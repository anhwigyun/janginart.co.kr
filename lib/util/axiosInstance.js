// lib/axiosInstance.js
import axios from 'axios';
import store from "@/app/store";
import Cookies from "js-cookie";

const {dispatch} = store;

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // API의 기본 URL
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
    (config) => {
        // 요청 전에 헤더에 토큰 추가
        const token = Cookies.get('token') || null; //

        if (token)
            config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
    (response) => {
        // 응답 데이터 가공 (필요할 경우)
        return response;
    },
    (error) => {
        if (error.response?.status === 422) {
            // axiosInstance는 리액트 컴포넌트가 아니기 때문에 useDispath를 못쓰고 아래처럼 직접 호출해줘야함
            dispatch({
                type: "app/setErrors",
                payload: error.response.data.errors
            });
        }

        if (error.response?.status === 401) {
            dispatch({
                type: "app/setUser",
                payload: null
            });

            dispatch({
                type: "app/setToken",
                payload: null
            });
        }

        if (error.response?.status === 403) {
            dispatch({
                type: "app/setMessage",
                payload: error.response.data.message
            });
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;