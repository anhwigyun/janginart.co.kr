import { configureStore, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const token = Cookies.get("token");
const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
const coords = Cookies.get("coords") ? JSON.parse(Cookies.get("coords")) : null;

const slices = createSlice({
    name: 'app',
    initialState: {
        token: token,
        user: user,
        errors: {},
        message: null,
        coords: coords,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;

            action.payload
                ? Cookies.set("token", action.payload)
                : Cookies.remove("token");
        },

        // user정보는 객체라서 strig화해서 저장해야됨 (안그럼 [Object object]로 저장됨)
        setUser: (state, action) => {
            state.user = action.payload;

            action.payload
                ? Cookies.set("user", JSON.stringify(action.payload))
                : Cookies.remove("user");
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        logout: (state, action) => {
            state.token = null;
            Cookies.remove("token");

            state.user = null;
            Cookies.remove("user");
        },
        setCoords: (state, action) => {
            state.coords = action.payload;
            console.log(action.payload);
            Cookies.set("coords", JSON.stringify(action.payload));
        }
    },
});

// 스토어 설정
const store = configureStore({
    reducer: {
        app: slices.reducer,
    },
});

// 액션과 리듀서를 내보내는 대신 appSlice 자체를 내보냅니다.
export const actions = slices.actions;
export default store;