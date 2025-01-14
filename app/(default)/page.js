"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Error from "@/components/Error";

// 리덕스
import {useDispatch} from "react-redux";
import {actions} from "@/app/store";

// api
import bannerApi from "@/lib/api/bannerApi";


export default function Start() {

    const [mainBanners, setMainBanners] = useState([]);
    const [categoryBanners, setCategoryBanners] = useState([]);
    const [middleBanners, setMiddleBanners] = useState([]);
    const [ribbonBanners, setRibbonBanners] = useState([]);

    function getMainBanners() {
        bannerApi.index({ type: "1" }, (response) => {
            setMainBanners(response.data.data);
        });
    }
    
    function getCategoryBanners() {
        bannerApi.index({ type: "2" }, (response) => {
            setCategoryBanners(response.data.data);
        });
    }
    
    function getMiddleBanners() {
        bannerApi.index({ type: "3" }, (response) => {
            setMiddleBanners(response.data.data);
        });
    }
    
    function getRibbonBanners() {
        bannerApi.index({ type: "4" }, (response) => {
            setRibbonBanners(response.data.data);
        });
    }
    
    useEffect(() => {
        getMainBanners();
        getCategoryBanners();
        getMiddleBanners();
        getRibbonBanners();
    }, []);


    
    return (
        <section>
            <div className="container">
                <div className="main-swiper-box">
                    <div className="swiper-container">
                        <ul className="swiper-wrapper">
                            {mainBanners.map((mainBanner, index) => (
                                <li key={index} className="swiper-slide">
                                    <img
                                        src={mainBanner.url}  // banner의 이미지 URL 속성을 사용하세요
                                        alt={`Slide ${mainBanner + 1}`} // Alt 속성에 슬라이드 번호를 동적으로 추가
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="swiper-control">
                        <div className="swiper-scrollbar"></div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button">
                            <div className="swiper-button-prev"></div>
                            <a href="#" className="swiper-button-play">
                                재생
                            </a>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>

                <div className="mt80 mt-lg-50">
                    <div className="title-box mb40 mb-lg-20">
                        <h2 className="tc">MD 추천상품</h2>
                        <p className="tc">
                            장인의 상패 MD가 카테고리별로 준비했습니다.
                        </p>
                    </div>
                    <div className="item-main-title-box mb24">
                        <div className="sca-box">
                            <ul className="flex-tc">
                                <li className="active">
                                    <Link href="#">감사패</Link>
                                </li>
                                <li>
                                    <Link href="#">트로피</Link>
                                </li>
                                <li>
                                    <Link href="#">싱글패</Link>
                                </li>
                                <li>
                                    <Link href="#">이글패</Link>
                                </li>
                                <li>
                                    <Link href="#">홀인원</Link>
                                </li>
                                <li>
                                    <Link href="#">교회</Link>
                                </li>
                                <li>
                                    <Link href="#">명패</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="button-box">
                            <Link
                                href="#"
                                className="btn btn-bd-black sm radius more"
                            >
                                더보기
                            </Link>
                        </div>
                    </div>

                    <div className="item-list-box">
                        <ul className="grid-4">
                            {Array(8)
                                .fill(null)
                                .map((_, index) => (
                                    <li
                                        key={index}
                                        className={`best${index + 1}`}
                                    >
                                        <Link href="#">
                                            <div className="list-image">
                                                <img
                                                    src="/image/test3.png"
                                                    alt={`BEST ${index + 1}`}
                                                />
                                                <span>{`BEST ${
                                                    index + 1
                                                }`}</span>
                                            </div>
                                            <div className="list-content">
                                                <div className="subject">
                                                    <p>
                                                        우드상패 싱글패 SGW-037
                                                    </p>
                                                </div>
                                                <div className="price">
                                                    <b>
                                                        50<em>%</em>
                                                    </b>
                                                    <strong>
                                                        92,000<em>원</em>
                                                    </strong>
                                                    <strike>184,000원</strike>
                                                </div>
                                                <div className="info">
                                                    <dl>
                                                        <dd>구매수 245</dd>
                                                        <dd>구매수 245</dd>
                                                    </dl>
                                                </div>
                                                <div className="state">
                                                    <dl>
                                                        <dd>인기</dd>
                                                        <dd>특가</dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="mt80 mt-lg-50">
                    <div className="main-find-box">
                        <div className="find-left">
                            <div className="swiper-container">
                                <ul className="swiper-wrapper">
                                    {categoryBanners.map((categoryBanner, index) => (
                                        <li key={index} className="swiper-slide">
                                            <Link
                                                href="#"
                                                style={{
                                                    backgroundImage: `url(${categoryBanner.url})`, // API에서 제공되는 이미지 URL 사용
                                                }}
                                            ></Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                        <div className="find-right">
                            <div className="find-right-top">
                                <div className="right-top-title">
                                    <p>금액대와 용도, 재질을 입력해주세요.</p>
                                    <h2>
                                        찾으시는 상품을 <br />
                                        맞춤으로 추천드립니다.
                                    </h2>
                                </div>
                                <div className="right-top-search">
                                    <div className="select-box">
                                        <select>
                                            <option>용도</option>
                                        </select>
                                    </div>
                                    <div className="search">
                                        <div className="select-box">
                                            <select>
                                                <option>금액대</option>
                                                <option>5만원 이하</option>
                                                <option>5~10만</option>
                                                <option>10~20만</option>
                                                <option>20~30만</option>
                                                <option>30~50만</option>
                                                <option>50만 이상</option>
                                            </select>
                                        </div>
                                        <div className="select-box">
                                            <select>
                                                <optgroup label="재질">
                                                    <option>
                                                        크리스탈상패
                                                    </option>
                                                    <option>순금상패</option>
                                                    <option>나무상패</option>
                                                    <option>
                                                        메탈포토상패
                                                    </option>
                                                    <option>주석상패</option>
                                                    <option>액자형상패</option>
                                                    <option>자개상패</option>
                                                    <option>천연옥상패</option>
                                                    <option>기타상패</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div className="button-box">
                                            <Link
                                                href="#"
                                                className="btn btn-black radius sm"
                                            >
                                                검색
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="find-right-bottom">
                                <div className="content">
                                    <p>
                                        RW234는 사각형을 베이스로 디자인
                                        되었습니다.
                                        <br />
                                        부드럽게 다듬어진 사각형 위에 빛나는
                                        원을 조합하였으며,
                                        <br />
                                        그 원 안에는 필드 위에서 경험한 빛나는
                                        순간들이 담겨있습니다.
                                        <br />
                                        가장 익숙하고 기본적인 형태로 이루어진
                                        디자인이지만,
                                        <br />그 익숙함 위에 골프공을 올리는
                                        순간, 단 하나의 특별한 오브제가 됩니다.
                                    </p>
                                </div>
                                <div className="image">
                                    <Link href="#">
                                        <p>NEXT</p>
                                        <img
                                            src="/image/img_main_find_02.png"
                                            alt="Find Next"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt80 mt-lg-50">
                    <div className="title-box mb24">
                        <h2 className="tc">상품 카테고리</h2>
                    </div>
                    <div className="main-category-box">
                        <ul>
                            <li>
                                <Link href="">
                                    <div className="list-image">
                                        <img
                                            src="" // 실제 이미지 경로로 수정 필요
                                            alt="카테고리 이미지 1"
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                    <div className="list-content">
                                        <p>변함없는 감사한 마음을 <br />변함없이 오래도록</p>
                                        <small>MD가 추천하는 베스트 감사패 모음</small>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <div className="list-image">
                                        <img
                                            src="" // 실제 이미지 경로로 수정 필요
                                            alt="카테고리 이미지 2"
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                    <div className="list-content">
                                        <p>노력의 결실을 오래 기억하도록 <br />당신의 노력을 응원합니다</p>
                                        <small>트로피 · 싱글패 · 이글패 · 홀인원 · 메달 · 깃</small>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <div className="list-image">
                                        <img
                                            src="" // 실제 이미지 경로로 수정 필요
                                            alt="카테고리 이미지 3"
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                    <div className="list-content">
                                        <p>당신의 새로운 시작을 <br />응원합니다</p>
                                        <small>다양한 직군을 위한 명패모음</small>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="mt80 mt-lg-50">
                    <div className="main-banner-box">
                        <ul>
                            {middleBanners.map((middleBanner, index) => (
                                <li key={index}>
                                    <Link href="#">
                                        <img
                                            src={middleBanner.url}  // API에서 제공되는 이미지 URL 사용
                                            alt={`Banner ${index + 1}`}  // 동적으로 Banner 번호 지정
                                        />
                                    </Link>
                                </li>
                            ))}
                            {ribbonBanners.map((ribbonBanner, index) => (
                                <li key={index}>
                                    <Link href="#">
                                        <img
                                            src={ribbonBanner.url}  // API에서 제공되는 이미지 URL 사용
                                            alt={`Banner ${index + 1}`}  // 동적으로 Banner 번호 지정
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 상품 리스트 섹션 반복 */}
                {["감사패", "트로피", "싱글패", "이글패", "명패", "기타"].map(
                    (category, index) => (
                        <div key={index} className="mt80 mt-lg-50">
                            <div className="item-main-title-box mb24">
                                <div className="title-box">
                                    <h2 className="tc">{category} 인기상품</h2>
                                    <p className="tc">
                                        판매량이 많은 장인의상패의 {category}{" "}
                                        베스트셀러
                                    </p>
                                </div>
                                <div className="button-box">
                                    <Link
                                        href="#"
                                        className="btn btn-bd-black sm radius more"
                                    >
                                        더보기
                                    </Link>
                                </div>
                            </div>
                            <div className="item-list-box">
                                <ul className="grid-4">
                                    {Array(4)
                                        .fill(null)
                                        .map((_, i) => (
                                            <li
                                                key={i}
                                                className={`best${i + 1}`}
                                            >
                                                <Link href="#">
                                                    <div className="list-image">
                                                        <img
                                                            src="/image/test3.png"
                                                            alt={`BEST ${
                                                                i + 1
                                                            }`}
                                                        />
                                                        <span>{`BEST ${
                                                            i + 1
                                                        }`}</span>
                                                    </div>
                                                    <div className="list-content">
                                                        <div className="subject">
                                                            <p>
                                                                우드상패 싱글패
                                                                SGW-037
                                                            </p>
                                                        </div>
                                                        <div className="price">
                                                            <b>
                                                                50<em>%</em>
                                                            </b>
                                                            <strong>
                                                                92,000
                                                                <em>원</em>
                                                            </strong>
                                                            <strike>
                                                                184,000원
                                                            </strike>
                                                        </div>
                                                        <div className="info">
                                                            <dl>
                                                                <dd>
                                                                    구매수 245
                                                                </dd>
                                                                <dd>
                                                                    구매수 245
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                        <div className="state">
                                                            <dl>
                                                                <dd>인기</dd>
                                                                <dd>특가</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
