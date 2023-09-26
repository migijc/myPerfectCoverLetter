import React, { useEffect, useState } from 'react';
import {VscMenu} from 'react-icons/vsc'
import {RiHome2Fill} from 'react-icons/ri';
import {TiDocumentText} from 'react-icons/ti'
import {PiUsersFill} from 'react-icons/pi'
import {IoMdClose} from 'react-icons/io'
import { Link } from 'react-router-dom';

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [closeOnClick, setCloseOnClick] = useState(false)

    const handleClick = () => {
      setCloseOnClick(false)
      setIsMenuOpen(false)
    }

    useEffect(()=>{
      if(isMenuOpen){
        setCloseOnClick(true)
      } 
    })

    useEffect(()=>{
      console.log('22')
      if(closeOnClick){
        document.addEventListener('click', handleClick)
      }
      return ()=>{
        document.removeEventListener('click', handleClick)
      }
    })

  return (
    <header>
      
        <div
          className={`${isMenuOpen ? 'open' : 'closed'}`}
           style={{
              width:'100dvw',
              display:'grid',
              gridTemplateColumns:'38% 62%',
              height:'100dvh',position:'fixed',
              left:0, 
              top:0, 
              zIndex:100}}>

            <div className={`open-menu`} style={{backgroundColor:'#171717',display:'flex',flexDirection:'column',gap:'.5rem', position:'relative',padding:'1em',borderBottomRightRadius:'.6rem' ,borderTopRightRadius:'.6rem', alignItems:'center' }}>
                <OpenedMenu setIsMenuOpen={setIsMenuOpen} setCloseOnClick={setCloseOnClick} />
                <CorePages  />
                <div style={{position:'absolute', left:0, bottom:'2rem'}}>
                    <p style={{textAlign:'center', color:'#2be7ab', fontWeight:500}}>Free<br/>Today<br/>Free<br/>Forever</p>
                </div>
            </div>

            {/* Content Layover for when menu is open*/}
            <div className={`top-layer ${isMenuOpen ? 'open' : 'closed'}`} style={{backgroundColor:'#e7e7e7ba'}} />
        </div>

        <OpenMenuButton closeOnClick={closeOnClick} setCloseOnClick={setCloseOnClick} setIsMenuOpen={setIsMenuOpen}/>
        <div className='logo-container'>
            <h1>
              <span className='logo-letter'>C</span>
              <span className='logo-letter'>C</span>
            </h1>
        </div>


    </header>
  )
}




function CorePages(){
  return (
    <div style={{display:'grid', gap:'2rem'}}>
        <div  style={{display:'grid', gap:'2rem'}}>
          <button onClick={()=>window.location.href = '/'} style={{ width:'auto', padding:0, border:'none', alignSelf:'start'}}> { <RiHome2Fill fontSize={'2rem'} color='white'/>} </button>
          <button onClick={()=>window.location.href = '/all-cover-letters'}  style={{ width:'auto', padding:0, border:'none', alignSelf:'start'}}>{<TiDocumentText color="white" fontSize={'2rem'}/>}</button>
          {/* <button onClick={()=>window.location.href = '/users'}  style={{ width:'auto', padding:0, border:'none', alignSelf:'start'}}>{<PiUsersFill color="white" fontSize={'2rem'}/>}</button> */}
        </div>

        <div>
          <Link to={'/about-us'}><button className='link-menu-btn'>About</button></Link>
          {/* <Link to={'contact-us'}><button className='link-menu-btn'>Contact</button></Link> */}
          <Link to={'blog'}><button className='link-menu-btn'>Blog</button></Link>          
          
        </div>
     

      
  </div>
  )
}

function OpenMenuButton({setIsMenuOpen, setCloseOnClick}){
 
  return (
    <button 
      onClick={()=>{
        setIsMenuOpen(true)
      }}
      style={{ width:'auto', padding:0, border:'none', display:'flex', alignItems:'center',}}>
      <VscMenu fontSize={'2rem'} color={'#8e8e8e'}/>
    </button> 
  )
}

function OpenedMenu({setIsMenuOpen, closeOnClick, setCloseOnClick}){


  return (
    <div className={'true'||'false'} style={{display:'flex', alignItems:'center'}}>
      <h1 style={{color:'white', fontSize:'1.4rem', paddingLeft:'.25rem'}}>Menu</h1>

      {/* Close Menu Button*/}
      <button onClick={()=> {
        setIsMenuOpen(false)
        }}
        style={{border:'none', left:0, top:0, justifyContent:'flex-end', display:'flex', color:'white'}}>
        <IoMdClose className={252525} fontSize={'1rem'}/>
      </button>
    </div>
  )
}