import React, { useEffect, useState } from 'react';


export default function BlogHome(){
    const [blogsList, setBlogsList] = useState(null);

    async function getBlogs(){
        let result = await fetch('https://covercollabserver.fly.dev/admin/blogs',)
        // let result = await fetch('http://localhost:3000/admin/blogs')
        result = await result.json()
        console.log(result)
        setBlogsList(result)
    }

    useEffect(()=>{
        getBlogs()
    }, [])

    useEffect(()=>{
        if(blogsList){return console.log(blogsList)}
        else return 
    }, [blogsList])

    if(blogsList){
        return (
            <div style={{padding:'1rem', background: 'rgb(30,30,30)', height:'100%', display:'grid', alignItems:'start', alignContent:'start', gap:'2rem'}}>
                <h1 style={{color:'#8f8f8f', textAlign:'center'}}>Blog</h1>
                <div style={{ display:'grid', alignItems:'flex-start', gap:'.5rem'}}>
                    {blogsList.map((blog, i)=>{
                        return (
                            <div style={{border:'.1rem solid rgb(195,195,195)', padding:'1rem',height:'100%', borderRadius:'.5rem', backgroundImage:'var(--h1-green)', color:'rgb(30,30,30)', display:'grid', gap:'1rem', minHeight:'6rem'}}>
                                <h2 className='blog-title-home'>{blog.title}</h2>
                                <p>{new Date().toDateString(blog.datePublished)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
    else{
        return (
            <div style={{height:'100%', justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', gap:'1rem', background:'rgb(30,30,30)'}}>
                <span class="loader"></span>
            </div>
        )
    }
 

}