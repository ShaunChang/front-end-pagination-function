import React, { useEffect, useState } from "react";
import './index.css'

const Page = ({postPerPage,totalPage,setPage})=>{

    const [pageNumber,setPageNumber] = useState([])

    useEffect(()=>{
        let arr = []
        for(let i=1;i<=Math.ceil(totalPage/postPerPage);i++){
            arr.push(i)
        }
        setPageNumber(arr)
    },[totalPage,postPerPage])

    const setCurrentpage=(pageNumber)=>{
        return ()=>{
            setPage(pageNumber)
        }
    }
    return(
        <div className="pagination">
            {
            pageNumber.length>0&&
            pageNumber.map(pagecc => (
                <button className="pageItem" onClick={setCurrentpage(pagecc)} key={pagecc}>{pagecc}</button>  
            ))
            }
        </div>
    )
}

export default Page