import axios from "axios";
import axiosInstance from "@/lib/util/axiosInstance";

const userApi = {
    // 로그인
    login(params = {}, onSuccess = () => {}, onFail = () => {}) {
        return axiosInstance.post("/api/login", params)
            .then((response) => onSuccess(response))
            .catch(error => onFail(error));
    },

    // 저장
    store(params = {}, onSuccess = () => {}, onFail = () => {}) {
        return axiosInstance.post("/api/users", params)
            .then((response) => onSuccess(response))
            .catch(error => onFail(error));
    }
}
export default userApi;