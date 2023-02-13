import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Content from './components/Content'
import Page from './components/Page'
import './App.css'

export default function App(){

    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentPage,setPage] = useState(1)
    const [currentPosts,setCurrentPosts] = useState([])
    const [postPerPage,setPostPerpage] = useState(10)

    const fetchPosts = async()=>{  
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
        }
        catch(error){
            console.log('error')
        }
    }

    const caculateCurrentPost = ()=>{
        const lastPageIndex = currentPage * postPerPage
        const firstPageIndex = lastPageIndex - postPerPage
        const currentPost = posts.slice(firstPageIndex,lastPageIndex)
        setCurrentPosts(currentPost)
    }

    useEffect(()=>{
        console.log('xxxx')
        fetchPosts();
        console.log(posts)
    },[])

    useEffect(()=>{
        caculateCurrentPost()
    },[currentPage,postPerPage,posts])


    return (
        <div className='App'>
            <h1>My Blog</h1>
            <Content posts={currentPosts}/>
            &nbsp;
            <Page postPerPage={postPerPage} totalPage={posts.length} setPage={setPage} />
        </div>
    )
}

