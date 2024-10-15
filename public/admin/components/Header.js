// components/Sidebar.js
'use client';
import React from 'react';
import { useRouter, useSearchParams } from "next/navigation";

// 상태관리
import { useAuthTokenStore } from "/store/useAuthTokenStore";
import { useUserStore } from "/store/userStore";

const Header = () => {
  const router = useRouter();

  // 로그이토큰
  const { accessToken, setAccessToken } = useAuthTokenStore();
  // 회원정보
  const { user, setUser } = useUserStore();

  // 로그아웃
  function handleLogout() {
    router.push("/admin/login");
    setAccessToken(null);
    setUser(null);
  }


  return (
    <header className="header">
        <div className="fragment">
          <h3 className="title">
            안녕하세요, <span className="point">{user ? user.name : ""}</span>님.
          </h3>
        </div>
        <div className="fragment">
          <a
            href="#"
            className=""
            style={{ textDecoration: "underline", color: "#777" }}
            onClick={(e) => {
              e.preventDefault(); // 기본 링크 동작 방지
              handleLogout();
            }}
          >
            로그아웃
          </a>
        </div>
      </header>
  );
};

export default Header;
