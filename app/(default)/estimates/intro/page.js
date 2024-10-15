"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Error from "@/components/Error";

// 리덕스
import {useDispatch} from "react-redux";
import {actions} from "@/app/store";


export default function Page() {
    return (
        <section>
            <div className="container sm">
                <div className="title-box mb24">
                    <h2 className="tc lg">맞춤 결제</h2>
                </div>
                <div className="order-buy-box">
                    <ul>
                        <li>
                            <div>
                                <p>
                                    1. 예산과 필요한 물품 및 수량을 결정하여
                                    견적상담을 요청합니다
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>
                                    2. 견적상담을 담당자가 확인하여 최종협의 후
                                    최종가격을 결제할 수 있는 링크를
                                    전달드립니다
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>
                                    3. 결제가 완료되면 제작이 진행되며, 시안을
                                    전달드린 후 시안피드백을 거쳐 최종시안을
                                    확정합니다.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>
                                    4. 최종시안이 확정되면 배송과정을 거쳐
                                    최종배송이 완료됩니다.
                                </p>
                                <small>
                                    퀵 발송이 필요하신 경우 견적 상담 시 미리
                                    말씀 부탁드립니다.
                                </small>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="button-box mt80 mt-lg-40">
                    <div className="w400 flex-lg-1">
                        <Link href="/estimates/create" className="btn btn-black lg radius">
                            견적상담
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
