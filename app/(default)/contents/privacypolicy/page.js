"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Error from "@/components/Error";

// 리덕스
import {useDispatch} from "react-redux";
import {actions} from "@/app/store";


export default function Page() {
    const router = useRouter();


    return (
        <>
            개인정보처리방침
        </>
    );
}
