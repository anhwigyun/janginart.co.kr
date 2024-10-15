import Link from "next/link";
import { useEffect } from "react";

const Header = () => {


    function menuOpen(){
        $("html , body , .header-all").addClass("fixed");
    }
    
    function menuClose(){
        $("html , body , .header-all").removeClass("fixed");
    }
    
    // 우측 고정바 토글
    function rightToggle(){
        $("header .header-fixed").toggleClass("active");
    }

    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="header-top-logo">
                        <h1>
                            <Link href="/">
                                <img src="/image/logo.png" alt="Logo" />
                            </Link>
                        </h1>
                    </div>
                    <div className="header-top-member">
                        <ul>
                            <li>
                                <Link href="">로그인</Link>
                            </li>
                            <li>
                                <Link href="">회원가입</Link>
                            </li>
                            <li>
                                <Link href="">검색</Link>
                            </li>
                            <li>
                                <Link href="">장바구니</Link>
                            </li>
                            <li>
                                <Link href="">
                                    마이페이지<span>시안확인</span>
                                </Link>
                            </li>
                        </ul>
                        <a
                            href="#"
                            onClick={menuOpen}
                            className="menu"
                        >
                            메뉴바
                        </a>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container">
                    <div className="header-bottom-cate">
                        <a
                            href="#"
                            onClick={menuOpen}
                            className="all"
                        >
                            전체 카테고리
                        </a>
                        <ul>
                            <li>
                                <Link href="/products">감사패</Link>
                            </li>
                            <li>
                                <Link href="">트로피</Link>
                            </li>
                            <li>
                                <Link href="">싱글패</Link>
                            </li>
                            <li>
                                <Link href="">이글패</Link>
                            </li>
                            <li>
                                <Link href="">홀인원</Link>
                            </li>
                            <li>
                                <Link href="">교회</Link>
                            </li>
                            <li>
                                <Link href="">명패</Link>
                            </li>
                            <li>
                                <Link href="">기타</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-bottom-link">
                        <ul>
                            <li>
                                <Link href="/estimates/intro">견적상담</Link>
                            </li>
                            <li>
                                <Link href="">주문서 다운로드</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-fixed">
                <div className="box">
                    <div className="header-fixed-button">
                        <a href="#" onClick={rightToggle}>
                            토글
                        </a>
                    </div>
                    <div className="header-fixed-body">
                        <h2>주문도우미</h2>
                        <div className="fixed-body-cate">
                            <ul>
                                <li>
                                    <Link href="">문구추천</Link>
                                </li>
                                <li>
                                    <Link href="">장바구니</Link>
                                </li>
                                <li>
                                    <Link href="">맞춤결제</Link>
                                </li>
                                <li>
                                    <Link href="">카드증빙</Link>
                                </li>
                                <li>
                                    <Link href="">배송조회</Link>
                                </li>
                                <li className="kakao">
                                    <Link href="">실시간 문의</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="fixed-body-cs">
                            <strong>0000-0000</strong>
                            <p>장인의상패@이메일</p>
                            <small>월요일 - 금요일 09:00~18:00</small>
                            <small>토/일/공휴일은 휴무입니다</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-all">
                <div className="box">
                    <div className="all-head">
                        <a href="#" onClick={menuClose}>
                            닫기
                        </a>
                    </div>
                    <div className="all-body">
                        <div className="all-body-member">
                            <ul>
                                <li>
                                    <Link href="">로그인</Link>
                                </li>
                                <li>
                                    <Link href="">회원가입</Link>
                                </li>
                                <li>
                                    <Link href="">검색</Link>
                                </li>
                                <li>
                                    <Link href="">장바구니</Link>
                                </li>
                                <li>
                                    <Link href="">마이페이지</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="all-body-cate">
                            <h2>카테고리</h2>
                            <ul>
                                <li>
                                    <Link href="">감사패</Link>
                                </li>
                                <li>
                                    <Link href="">트로피</Link>
                                </li>
                                <li>
                                    <Link href="">싱글패</Link>
                                </li>
                                <li>
                                    <Link href="">이글패</Link>
                                </li>
                                <li>
                                    <Link href="">홀인원</Link>
                                </li>
                                <li>
                                    <Link href="">교회</Link>
                                </li>
                                <li>
                                    <Link href="">명패</Link>
                                </li>
                                <li>
                                    <Link href="">기타</Link>
                                </li>
                                <li>
                                    <Link href="">견적상담</Link>
                                </li>
                                <li>
                                    <Link href="">주문서 다운로드</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="all-body-my">
                            <h2>언더독 님</h2>
                            <ul>
                                <li>
                                    <a href="">쇼핑정보</a>
                                    <button type="button">쇼핑정보</button>
                                    <dl>
                                        <dd>
                                            <Link href="">
                                                주문내역/배송조회
                                            </Link>
                                        </dd>
                                        <dd>
                                            <Link href="">시안확인</Link>
                                        </dd>
                                        <dd>
                                            <Link href="">장바구니</Link>
                                        </dd>
                                        <dd>
                                            <Link href="">취소/교환 내역</Link>
                                        </dd>
                                        <dd>
                                            <Link href="">나의 리뷰</Link>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <a href="">내 정보</a>
                                    <button type="button">내 정보</button>
                                    <dl>
                                        <dd>
                                            <Link href="">회원정보수정</Link>
                                        </dd>
                                        <dd>
                                            <Link href="">배송지관리</Link>
                                        </dd>
                                        <dd>
                                            <Link href="">포인트/쿠폰</Link>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <a href="">고객센터</a>
                                    <button type="button">고객센터</button>
                                    <dl>
                                        <dd>
                                            <Link href="">문의내역</Link>
                                        </dd>
                                        <dd>
                                            <Link href="">자주묻는질문</Link>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
