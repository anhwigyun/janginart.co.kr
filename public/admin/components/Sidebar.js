// components/Sidebar.js
'use client';
import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <h3 className="title">관리자</h3>
            </div>

            <div className="menus-wrap">
                <div className="menus m-scrollbar type01">
                    <div className="menu-wrap">
                        <p className="menu">
                            <i className="xi-arrow-down"></i>
                            대시보드
                        </p>

                        <div className="menus">
                            <div className="menu-wrap">
                                <a href="/admin/programs" className="menu">프로그램</a>
                            </div>
                            <div className="menu-wrap">
                                <a href="/admin/users" className="menu">가입자</a>
                            </div>
                            <div className="menu-wrap">
                                <a href="/admin/certifications" className="menu">인증내역</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
