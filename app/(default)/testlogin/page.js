"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/app/store";
import userApi from "@/lib/api/userApi";

export default function Page() {
    // 상태 관리
    const [ids, setIds] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    function login(e) {
        e.preventDefault();

        userApi.login(
            {
                ids: ids,
                password: password,
            },
            (response) => {
                dispatch(actions.setUser(response.data.data.user));
                dispatch(actions.setToken(response.data.data.token));

                router.push("/admin/programs");
            },
            (error) => {
                console.log(error)
            }
        );
    }

    return (
        <div className="testlogin">
            <form onSubmit={login}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={ids}
                    onChange={(e) => setIds(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="m-btn type03 bg-primary white">
                    로그인
                </button>
            </form>
        </div>
    );
}
