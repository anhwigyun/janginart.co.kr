"use client";
import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import programApi from "@/lib/api/admin/programApi";
import axiosInstance from "@/lib/util/axiosInstance";
import Error from "@/components/Error";
import InputCoords from "@/components/InputCoords";

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [form, setForm] = useState({
        title: "",
        opened_at: "",
        coords: "",
    });

    function getItem(){
        programApi.show(id, (response) => {
            setForm({
                ...form,
                ...response.data.data,
            });
        })
    }

    function onChange(event){
        setForm({
            ...form,
            [event.target.name] : event.target.value
        });
    }

    function store(){
        if(id)
            return programApi.update(id, form, () => {
                router.back();
            });

        return programApi.store(form, () => {
            router.back();
        });
    }

    useEffect(() => {
        if(id)
            getItem();
    }, []);

    return (
        <div className="main-inner">
            <div className="m-box type01">
                <div className="m-top type01">
                    <div className="fragment">
                        <h3 className="m-top-title">상세정보</h3>
                    </div>
                </div>

                <div className="mt-20"></div>

                <div className="m-input-wrap type01">
                    <div className="m-input-title">
                        <h3 className="title">제목 <span className="star">*</span></h3>
                    </div>
                    <div className="m-input-body">
                        <div className="m-input-text type01">
                            <input type="text" name={"title"} placeholder="내용을 입력하세요." value={form.title} onChange={onChange} required />
                        </div>

                        <Error name={'title'} />
                    </div>
                </div>

                <div className="m-input-wrap type01">
                    <div className="m-input-title">
                        <h3 className="title">날짜 <span className="star">*</span></h3>
                    </div>
                    <div className="m-input-body">
                        <div className="m-input-date type01">
                            <input type="date" name={"opened_at"} value={form.opened_at} onChange={onChange} required />
                        </div>

                        <Error name={'opened_at'} />
                    </div>
                </div>

                <div className="m-input-wrap type01">
                    <div className="m-input-title">
                        <h3 className="title">좌표</h3>
                        <p className="sub">한 프로그램에 장소가 여러개일 경우 좌표입력은 생략해주세요.</p>
                    </div>
                    <div className="m-input-body">
                        <div className="m-input-text type01">
                            <input type="text" name={"coords"} placeholder="내용을 입력하세요." value={form.coords} onChange={onChange} />
                        </div>

                        <Error name={'coords'} />
                    </div>
                </div>
            </div>


            <div className="mt-20"></div>

            <div className="page-top">
                <div className="fragment">

                </div>

                <div className="fragment">
                    <div className="m-spaces type01">
                        <div className="m-space-wrap">
                            <div className="m-space">
                                <button className="m-btn type01 bg-primary white" onClick={store}>
                                    저장하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}