"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Error from "@/components/Error";

// 리덕스
import { useDispatch } from "react-redux";
import { actions } from "@/app/store";

import Pagination from "@/components/Pagination";

// api
import productApi from "@/lib/api/productApi";

export default function Page() {
    const router = useRouter();
    const dispatch = useDispatch();

    // 필터
    // 정렬기준
    const [form, setForm] = useState({
        order_by: "recommend",
        align: "desc",
        category_id: "",
        random: "",
        price_min: "",
        price_max: "",
        word: "",
        page: 1,
        ids: [],
    });

    const [bestProducts, setBestProducts] = useState([]);

    const [products, setProducts] = useState({
        data: [],
        meta: {
            current_page: 1,
            last_page: 1,
            total: 0,
        },
    });

    function getBestProducts() {
        productApi.index(
            {
                order_by: "count_order",
                align: "desc",
                take: "3",
            },
            (response) => {
                // setBestProducts(response.data);
                setBestProducts(response.data.data);
                console.log(response.data.data);
            }
        );
    }

    function getProducts(e = null) {
        if (e) e.preventDefault();

        productApi.index(form, (response) => {
            setProducts(response.data);
        });
    }

    useEffect(() => {
        getBestProducts();
    }, []);

    useEffect(() => {
        getProducts();
    }, [form.page, form.order_by , form.align]);

    return (
        <section>
            <div className="container sm">
                <div className="title-box mb40 mb-lg-25">
                    <h2 className="tc fw5 lg">
                        지난 1년간 가장 많이 찾아주신 베스트 <b>감사패</b>
                    </h2>
                </div>

                <div className="item-list-box">
                    <ul>
                        {bestProducts.map((product, index) => (
                            <li key={product.id} className={`best${index + 1}`}>
                                <a href="#">
                                    <div className="list-image">
                                        <img
                                            src={product.img.url}
                                            alt={product.title}
                                        />
                                        <span>{`BEST ${index + 1}`}</span>
                                    </div>
                                    <div className="list-content">
                                        <div className="subject">
                                            <p>{product.title}</p>
                                        </div>
                                        <div className="price">
                                            <b>
                                                {(
                                                    ((product.price_origin -
                                                        product.price_discount) /
                                                        product.price_origin) *
                                                    100
                                                ).toFixed(0)}
                                                <em>%</em>
                                            </b>
                                            <strong>
                                                {product.price_discount.toLocaleString()}
                                                <em>원</em>
                                            </strong>
                                            <strike>
                                                {product.price_origin.toLocaleString()}
                                                원
                                            </strike>
                                        </div>
                                        <div className="info">
                                            <dl>
                                                <dd>
                                                    구매수 {product.count_order}
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="state">
                                            <dl>
                                                {product.pop && <dd>인기</dd>}
                                                {product.special && (
                                                    <dd>특가</dd>
                                                )}
                                            </dl>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt80 mt-lg-50">
                    <div className="title-box mb40 mb-lg-25">
                        <h2 className="tc fw5 lg">
                            장인의 <b>감사패</b>
                        </h2>
                    </div>

                    <div className="item-search-box">
                        <div className="search">
                            <div className="select-box">
                                <select
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        switch (value) {
                                            case "5만원 이하":
                                                setForm({ ...form, price_min: 0, price_max: 50000 });
                                                break;
                                            case "5~10만":
                                                setForm({ ...form, price_min: 50000, price_max: 100000 });
                                                break;
                                            case "10~20만":
                                                setForm({ ...form, price_min: 100000, price_max: 200000 });
                                                break;
                                            case "20~30만":
                                                setForm({ ...form, price_min: 200000, price_max: 300000 });
                                                break;
                                            case "30~50만":
                                                setForm({ ...form, price_min: 300000, price_max: 500000 });
                                                break;
                                            case "50만 이상":
                                                setForm({ ...form, price_min: 500000, price_max: "" });
                                                break;
                                            default:
                                                setForm({ ...form, price_min: "", price_max: "" });
                                        }
                                    }}
                                >
                                    <option>금액대</option>
                                    <option>5만원 이하</option>
                                    <option>5~10만</option>
                                    <option>10~20만</option>
                                    <option>20~30만</option>
                                    <option>30~50만</option>
                                    <option>50만 이상</option>
                                </select>
                            </div>
                            <div className="button-box">
                                <a
                                    href="#"
                                    className="btn btn-black radius sm"
                                    onClick={(e) => {
                                        e.preventDefault(); // a 태그의 기본 동작 방지
                                        setForm({ ...form, page: 1 });
                                        getProducts(); // 함수 호출
                                    }}
                                >
                                    검색
                                </a>
                            </div>
                            <div className="text">
                                <p>
                                    금액대, 재질 별로 필요한 상품을 찾아보세요
                                </p>
                            </div>
                        </div>
                        <div className="filter-box icon">
                            <ul>
                                <li className={form.order_by === "recommend" && form.align === "desc" ? "active" : ""}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setForm({ ...form, order_by: "recommend", align: "desc" });
                                        }}
                                    >
                                        추천제품순
                                    </a>
                                </li>
                                <li className={form.order_by === "count_order" && form.align === "desc" ? "active" : ""}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setForm({ ...form, order_by: "count_order", align: "desc" });
                                        }}
                                    >
                                        누적판매순
                                    </a>
                                </li>
                                <li className={form.order_by === "created_at" && form.align === "desc" ? "active" : ""}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setForm({ ...form, order_by: "created_at", align: "desc" });
                                        }}
                                    >
                                        신상품순
                                    </a>
                                </li>
                                <li className={form.order_by === "price" && form.align === "asc" ? "active" : ""}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setForm({ ...form, order_by: "price", align: "asc" });
                                        }}
                                    >
                                        낮은가격
                                    </a>
                                </li>
                                <li className={form.order_by === "price" && form.align === "desc" ? "active" : ""}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setForm({ ...form, order_by: "price", align: "desc" });
                                        }}
                                    >
                                        높은가격
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="item-list-box mt15">
                        <ul>
                            {products.data.map((product) => (
                                <li key={product.id}>
                                    <a href="#">
                                        <div className="list-image">
                                            <img
                                                src={product.img.url}
                                                alt={product.title}
                                            />
                                        </div>
                                        <div className="list-content">
                                            <div className="subject">
                                                <p>{product.title}</p>
                                            </div>
                                            <div className="price">
                                                <b>
                                                    {(
                                                        ((product.price_origin -
                                                            product.price_discount) /
                                                            product.price_origin) *
                                                        100
                                                    ).toFixed(0)}
                                                    <em>%</em>
                                                </b>
                                                <strong>
                                                    {product.price_discount.toLocaleString()}
                                                    <em>원</em>
                                                </strong>
                                                <strike>
                                                    {product.price_origin.toLocaleString()}
                                                    원
                                                </strike>
                                            </div>
                                            <div className="info">
                                                <dl>
                                                    <dd>
                                                        구매수{" "}
                                                        {product.count_order}
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="state">
                                                <dl>
                                                    {product.pop && (
                                                        <dd>인기</dd>
                                                    )}
                                                    {product.special && (
                                                        <dd>특가</dd>
                                                    )}
                                                </dl>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pagination 컴포넌트 */}
                    <Pagination
                        form={form}
                        setForm={setForm}
                        meta={products.meta}
                    />
                </div>
            </div>
        </section>
    );
}
