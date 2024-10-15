'use client'

import {Provider, useDispatch} from "react-redux";
import store, {actions} from './store';
import Message from "@/components/Message";
import {Suspense, useEffect} from "react";

export default function RootLayout({children}) {

    return (
        <html lang="ko">
        <body>
        <Provider store={store}>
            <Message/>
            
            <Suspense>
                {children}
            </Suspense>
        </Provider>
        </body>
        </html>
    );
}