import React, {useState} from "react";
import s from "./Users.module.css";
import cn from "classnames"

const Paginator = ({totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 7}) => {
    let pagesCount = Math.ceil(totalItemCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNum, setPortionNum] = useState(1);
    const leftPortPageNum = (portionNum - 1) * portionSize + 1;
    const rightPortPageNum = portionNum * portionSize;
    return <>
        {portionNum > 1 &&
        <button className={s.controlButton} onClick={() => setPortionNum(portionNum - 1)}>&#60;</button>}
        {pages.filter(p => p >= leftPortPageNum && p <= rightPortPageNum)
            .map((p) =><button key={p} type="button"
                    className={cn({[s.selectedPage]: currentPage === p})}
                    onClick={(e) => {onPageChanged(p)}}>
                {p}
            </button>
        )}
        {portionCount > portionNum &&
        <button className={s.controlButton} onClick={() => setPortionNum(portionNum + 1)}>&#62;</button>}
    </>
}

export default Paginator;