"use client";
import "@/public/css/swiper.min.css";
import "@/public/css/base.css";
import "@/public/css/grid.css";
import "@/public/css/common.css";
import "@/public/css/module.css";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actions } from "@/app/store";
import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
    userScalable: false,
};

export default function Layout({ children }) {
    return (
        <>
            <Script src="https://code.jquery.com/jquery-1.12.4.js" strategy="beforeInteractive"/>
            <Script src="/js/swiper.min.js" strategy="beforeInteractive" />
            {/* <Script src="/js/swiper.js" strategy="beforeInteractive" /> */}
            <Script src="/js/common.js" strategy="lazyOnload" />

            <Header />
            {children}
            <Footer />
        </>
    );
}
