"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Error from "@/components/Error";

// 리덕스
import {useDispatch} from "react-redux";
import {actions} from "@/app/store";

// api
import estimate from "@/lib/api/estimateApi";


export default function Page() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [phone3, setPhone3] = useState("");
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [imgs, setimgs] = useState([]); // 여러 파일을 관리할 수 있도록 배열로 변경
    const [budget, setBudget] = useState("");
    const [count, setcount] = useState("");
    const [privacyCheck, setPrivacyCheck] = useState(false);

    const dispatch = useDispatch();

    const handleFileChange = (e) => {
        const selectedimgs = Array.from(e.target.files); // 여러 파일을 배열로 변환
        setimgs((previmgs) => [...previmgs, ...selectedimgs]); // 기존 파일과 새로 선택한 파일을 합치기
    };

    const handleRemoveFile = (fileName) => {
        setimgs((previmgs) =>
            previmgs.filter((file) => file.name !== fileName)
        );
    };


    const register = () => {
        if (!privacyCheck) {
            alert("개인정보처리방침에 동의해야 합니다.");
            return;
        }

        // FormData 생성
        const formData = new FormData();
        formData.append("email", email);
        formData.append("name", name);
        formData.append("contact", `${phone1}${phone2}${phone3}`); // 전화번호를 합쳐서 전송
        formData.append("title", title);
        formData.append("description", description);
        formData.append("budget", budget);
        formData.append("count", count);

        // 이미지를 배열로 추가
        imgs.forEach((img, index) => {
            formData.append(`imgs[${index}]`, img); // 각 이미지 파일 추가
        });

        // 서버로 FormData 전송
        estimate.store(formData, (response) => {
            const data = response.data.data;
            const message = response.data.message;
            
            dispatch(actions.setMessage(message));

            router.push("/");
        });
    };



    return (
        <section>
            <div className="container sm">
                <div className="mypage-box">
                    <div className="mypage-right">
                        <div className="title-box mb16">
                            <h2 className="lg">견적요청</h2>
                            <p>
                                신속히 확인하여 담당자가 안내드립니다. <br />
                                대량 구매 시 아래 사항을 정확히 기재해주세요.
                            </p>
                        </div>
                        <div className="write-box">
                            <ul>
                                <li>
                                    <strong className="req">이메일</strong>
                                    <div>
                                        <div className="input-box mx560">
                                            <input
                                                type="text"
                                                placeholder="이메일을 작성해주세요."
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>
                                        <Error name={'email'} />
                                    </div>
                                    
                                </li>
                                <li>
                                    <strong className="req">담당자명</strong>
                                    <div>
                                        <div className="input-box mx560">
                                            <input
                                                type="text"
                                                placeholder="담당자 성명을 작성해주세요."
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                            />
                                        </div>
                                        <Error name={'name'} />
                                    </div>
                                </li>
                                <li>
                                    <strong className="req">연락처</strong>
                                    <div>
                                        <div className="flex flex-vc mx560">
                                            <div className="input-box flex-1 mr4">
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    value={phone1}
                                                    onChange={(e) =>
                                                        setPhone1(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-box flex-1 mr4">
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    value={phone2}
                                                    onChange={(e) =>
                                                        setPhone2(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-box flex-1">
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    value={phone3}
                                                    onChange={(e) =>
                                                        setPhone3(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <Error name={'contact'} />
                                    </div>
                                    
                                </li>
                                <li>
                                    <strong className="req">제목</strong>
                                    <div>
                                        <div className="input-box mx560">
                                            <input
                                                type="text"
                                                placeholder="제목을 작성해주세요."
                                                value={title}
                                                onChange={(e) =>
                                                    setTitle(e.target.value)
                                                }
                                            />
                                        </div>
                                        <Error name={'title'} />
                                    </div>
                                </li>
                                <li>
                                    <strong className="req">내용</strong>
                                    <div>
                                        <div className="textarea-box mx560">
                                            <textarea
                                                placeholder="내용을 작성해주세요."
                                                value={description}
                                                onChange={(e) =>
                                                    setdescription(e.target.value)
                                                }
                                            ></textarea>
                                        </div>
                                        <Error name={'description'} />
                                    </div>
                                </li>
                                <li>
                                    <strong>파일첨부</strong>
                                    <div>
                                        <div className="upload-box">
                                            <ul>
                                                <li>
                                                    <input
                                                        type="file"
                                                        name="file"
                                                        id="file"
                                                        multiple // 다중 파일 업로드 허용
                                                        onChange={
                                                            handleFileChange
                                                        }
                                                    />
                                                    <label htmlFor="file">
                                                        <p>이미지</p>
                                                    </label>
                                                </li>
                                                {imgs.length > 0 &&
                                                    imgs.map((file, index) => (
                                                        <li key={index}>
                                                            <div className="file-preview">
                                                                <img
                                                                    src={URL.createObjectURL(
                                                                        file
                                                                    )}
                                                                    alt={`Preview ${index}`}
                                                                    className="thumb"
                                                                />
                                                                <button
                                                                    type="button"
                                                                    className="RemoveFile-btn"
                                                                    onClick={() =>
                                                                        handleRemoveFile(
                                                                            file.name
                                                                        )
                                                                    }
                                                                >
                                                                    삭제
                                                                </button>
                                                            </div>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                        <Error name={'imgs'} />
                                    </div>
                                </li>
                                <li>
                                    <strong className="req">예산</strong>
                                    <div>
                                        <div className="input-box mx560">
                                            <input
                                                type="number"
                                                placeholder="예산을 작성해주세요."
                                                value={budget}
                                                onChange={(e) =>
                                                    setBudget(e.target.value)
                                                }
                                            />
                                            <em>만원</em>
                                        </div>
                                        <Error name={'budget'} />
                                    </div>
                                </li>
                                <li>
                                    <strong className="req">
                                        필요상품 갯수
                                    </strong>
                                    <div>
                                        <div className="input-box mx560">
                                            <input
                                                type="number"
                                                placeholder="개수를 작성해주세요."
                                                value={count}
                                                onChange={(e) =>
                                                    setcount(e.target.value)
                                                }
                                            />
                                            <em>개</em>
                                        </div>
                                        <Error name={'count'} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="all-check-box mt64 mt-lg-32">
                            <input
                                type="checkbox"
                                name="check"
                                id="check"
                                checked={privacyCheck}
                                onChange={(e) =>
                                    setPrivacyCheck(e.target.checked)
                                }
                            />
                            <label htmlFor="check" className="lg">
                                [필수] 개인정보처리방침
                            </label>
                            <Link href="/contents/privacypolicy">전문보기</Link>
                        </div>
                        <div className="button-box mt64 mt-lg-32">
                            <button
                                onClick={register}
                                className="btn btn-black lg radius"
                            >
                                요청하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
