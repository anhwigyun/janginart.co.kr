import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-left">
            <h2>
              <img src="/image/logo.png" alt="Logo" />
            </h2>
            <ul>
              <li>
                <Link href="">주문방법</Link>
              </li>
              <li>
                <Link href="">제작기간</Link>
              </li>
              <li>
                <Link href="">케이스</Link>
              </li>
              <li>
                <Link href="">문구추천</Link>
              </li>
              <li>
                <Link href="">질문과답변</Link>
              </li>
            </ul>
          </div>
          <div className="footer-top-center">
            <div className="top-center-cate">
              <ul>
                <li>
                  <Link href="">이용약관</Link>
                </li>
                <li>
                  <Link href="/contents/privacypolicy">개인정보처리방침</Link>
                </li>
                <li>
                  <Link href="">자주묻는질문</Link>
                </li>
                <li>
                  <Link href="">견적요청</Link>
                </li>
                <li>
                  <Link href="">주문서받기</Link>
                </li>
              </ul>
            </div>
            <div className="top-center-info">
              <ul>
                <li>회사명 : 언더독</li>
                <li>대표자명 : 김수철</li>
                <li>
                  주소 : 서울특별시 중구 마른내로 61-1, 2층 206호(안현동1가)
                </li>
                <li>사업자 등록번호 :</li>
                <li>통신판매번호 2023-서울강동-0202</li>
              </ul>
            </div>
          </div>
          <div className="footer-top-right">
            <strong>0000-0000</strong>
            <p>장인의상패@이메일</p>
            <small>월요일 - 금요일 09:00~18:00</small>
            <small>토/일/공휴일은 휴무입니다</small>
            <ul>
              <li className="blog">
                <a href="" target="_blank">
                  블로그
                </a>
              </li>
              <li className="instagram">
                <a href="" target="_blank">
                  인스타그램
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright 언더독 컴퍼니. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
