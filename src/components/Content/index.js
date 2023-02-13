import React, {useState} from "react";
import './index.css'


export default function Content({posts}){

    return( 
        posts.length>0&&//有东西再展示 不然就会出现一个空的小方框
        posts.map((data)=>(
             <div className="contents" key={data.id}>
                {data.title}
            </div>
        ))
    
    )
}

