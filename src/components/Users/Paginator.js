import React, {useState} from "react";
import s from "./Users.module.css";
import cn from "classnames"

const Paginator = ({totalItemCount, pageSize, currentPage, requestUser, portionSize = 7}) => {
    const onPageChanged = (p) => {
        requestUser(p, pageSize);
    }
    const pagesCount = Math.ceil(totalItemCount / pageSize);
    const [portionNum, setPortionNum] = useState(Math.ceil(currentPage / portionSize));
    const pageNum = [];
    for (let i = portionSize * portionNum - 6; i <= portionSize * portionNum; i++) {
        pageNum.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);

    return <div className={s.users_pages}>
        {portionNum > 1 &&
        <button className={s.controlButton} onClick={() => setPortionNum(portionNum - 1)}>&#60;</button>}
        {pageNum.map((p) => <button key={p} type="button"
                                    className={cn({[s.selectedPage]: currentPage === p})}
                                    onClick={(e) => {
                                        onPageChanged(p)
                                    }}>
                {p}
            </button>
        )}
        {portionCount > portionNum &&
        <button className={s.controlButton} onClick={() => setPortionNum(portionNum + 1)}>&#62;</button>}
    </div>
}

export default Paginator;
