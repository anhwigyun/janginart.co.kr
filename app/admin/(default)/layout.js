'use client'
import {Suspense, useEffect} from 'react';
import Script from 'next/script';
import Head from 'next/head';

import "../../../public/admin/css/reset.css";
import "../../../public/css/module.css";
import "../../../public/admin/css/swiper.min.css";
import "../../../public/admin/css/style.css";
import Header from "@/public/admin/components/Header";
import Sidebar from "@/public/admin/components/Sidebar";

export default function RootLayout({ children }) {

  

  return (
    <>
      <Script
        src="/admin/js/jquery.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/admin/js/swiper.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/admin/js/swiper.min.js"
        strategy="beforeInteractive"
      />
        <div id="wrap">
            <Header />

            <main id="main" className="main">
                <Sidebar />

                {children}
            </main>

            <footer className="footer"></footer>
        </div>

    </>
  );
}
