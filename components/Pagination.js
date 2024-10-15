import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/app/store";

export default function Pagination({ meta, form, setForm }) {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        let items = [];

        for (let i = 1; i <= meta.last_page; i++) {
            items.push(i);
        }

        setPages(items);
    }, [meta]);

    function pageClass(page) {
        return meta.current_page == page ? "m-page active" : "m-page";
    }

    function paginate(page) {
        setForm({
            ...form,
            page: page,
        });

        document.querySelector("html").scrollTop = 0;
    }

    function first() {
        paginate(1);
    }

    function prev() {
        if (meta.current_page > 1) paginate(parseInt(meta.current_page) - 1);
    }

    function next() {
        if (meta.current_page < meta.last_page)
            paginate(parseInt(meta.current_page) + 1);
    }

    function last() {
        paginate(meta.last_page);
    }

    return (
        <div className="m-pagination type01">
            <div className="m-pages">
                <div className="m-page-wrap">
                    <button type={"button"} className="m-page" onClick={first}>
                        <i className="xi-angle-left"></i>
                        <i className="xi-angle-left"></i>
                    </button>
                </div>

                {pages.map((page) => (
                    <div className="m-page-wrap" key={page}>
                        <button
                            type={"button"}
                            className={pageClass(page)}
                            onClick={() => paginate(page)}
                        >
                            {page}
                        </button>
                    </div>
                ))}

                <div className="m-page-wrap">
                    <button type={"button"} className="m-page" onClick={last}>
                        <i className="xi-angle-right"></i>
                        <i className="xi-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}


