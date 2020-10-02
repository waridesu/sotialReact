import React from "react";
import s from "./Users.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount && i <= 35; i++) {
        pages.push(i);
    }
    return <>
        {pages.map((p) => <button
                type="button"
                className={props.currentPage === p && s.selectedPage}
                onClick={(e) => {
                    props.onPageChanged(p);
                }}
            >
                {p}
            </button>
        )}</>
}

export default Paginator;