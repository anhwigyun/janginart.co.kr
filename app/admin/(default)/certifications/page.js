"use client";
import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import certificationApi from "@/lib/api/admin/certificationApi";
import axiosInstance from "@/lib/util/axiosInstance";

export default function Page() {
    const searchParams = useSearchParams();

    const [items, setItems] = useState({
        data: [],
        meta: {
            current_page: 1,
            last_page: 1,
            total: 0,
        }
    });

    const [form, setForm] = useState({
        page:1,
        word: "",
        ids: [],
        user_id: searchParams.get("user_id"),
    });


    function getItems(e = null){
        if(e)
            e.preventDefault();

        certificationApi.index(form, (response) => {
            setItems(response.data);
        })
    }

    function destroy(){
        certificationApi.destroy(form, (response) => {
            setItems({
                ...items,
                data: items.data.filter(itemData => !form.ids.includes(itemData.id))
            });

            setForm({
                ...form,
                ids: []
            });
        });
    }

    const isToggleAll = form.ids.length > 0 && form.ids.length === items.data.length;
    function toggleAll(){
        if(isToggleAll)
            return setForm({...form, ids: []});

        return setForm({...form, ids: items.data.map(item => item.id)});
    }

    function toggle(item){
        if(form.ids.includes(item.id)) {
            return setForm({
                ...form,
                ids: form.ids.filter(id => id != item.id)
            });
        }

        return setForm({
            ...form,
            ids: [...form.ids, item.id]
        });
    }

    useEffect(() => {
        getItems();
    }, [form.page]);

    return (
        <div className="main-inner">
            <div className="page-top">
                <div className="fragment">
                    <h3 className="page-top-title">인증 목록</h3>
                    <p className="page-top-body">총 {items.meta.length}개</p>
                </div>

                <div className="fragment">
                    <div className="m-spaces type01">
                        <div className="m-space-wrap">
                            <div className="m-space">
                                <form action="" onSubmit={(e) => {setForm({...form, page: 1}); getItems(e);}}>
                                    <div className="m-input-search type01">
                                        <input
                                            type="text"
                                            placeholder="검색어를 입력하세요."
                                            value={form.word}
                                            onChange={(e) => setForm({...form, word: e.target.value})}
                                        />

                                        <button type={"submit"}>
                                            <i className="xi-search deco"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20"></div>

            <div className="m-spaces type01">
                <div className="m-space-wrap" style={{width: "100%"}}>
                    <div className="m-space">
                        <div className="m-box type01"></div>
                    </div>
                </div>
            </div>

            <div className="m-spaces type01">
                <div className="m-space-wrap">
                    <div className="m-space">
                        <div className="m-box type01">
                            <div className="m-table-wrap type01">
                                <table className="m-table type01">
                                    <colgroup>
                                        <col style={{width: "10%"}}/>
                                        <col/>
                                        <col/>
                                        <col/>
                                        <col/>
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th>
                                            <div className="m-input-checkbox type01">
                                                <input type="checkbox" id="" checked={isToggleAll} onChange={() => {}}/>
                                                <label htmlFor="" onClick={toggleAll}></label>
                                            </div>
                                        </th>
                                        <th>이름</th>
                                        <th>연락처</th>
                                        <th>프로그램</th>
                                        <th>인증일자</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {items.data.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="m-input-checkbox type01">
                                                    <input
                                                        type="checkbox"
                                                        id={`checkbox-${item.id}`}
                                                        checked={form.ids.includes(item.id)}
                                                        onChange={() => {}}
                                                    />
                                                    <label htmlFor={`checkbox-${item.id}`} onClick={() => toggle(item)}></label>
                                                </div>
                                            </td>
                                            <td>{item.user.name}</td>
                                            <td>{item.user.contact}</td>
                                            <td>{item.program.title}</td>
                                            <td>{item.format_created_at}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-20"></div>

                        <Pagination form={form} setForm={setForm} meta={items.meta} />
                    </div>
                </div>
            </div>
        </div>
    );
}
