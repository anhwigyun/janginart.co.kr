import axios from "axios";
import axiosInstance from "@/lib/util/axiosInstance";

const estimate = {
    // 저장
    store(params = {}, onSuccess = () => {}, onFail = () => {}) {
        return axiosInstance.post("api/estimates", params)
            .then((response) => onSuccess(response))
            .catch(error => onFail(error));
    },
}
export default estimate;