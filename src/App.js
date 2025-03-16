import logo from './logo.svg';
import './App.css';
import { image } from 'framer-motion/client';
import { useEffect, useState } from 'react';
import {lAnimauts,categories,cartiers,villes} from './data';
import ImageSlider from './slider';
import { motion } from 'framer-motion';
function Elem(props){
return (<motion.div initial={{ opacity: 0 ,x: -400 }}
  animate={{ opacity: 1 ,x:0 }}
  transition={{ type: "spring",duration:1,stifness:400    }}>
<ImageSlider images={props.elem.images} ></ImageSlider>
<table className='table text-center' style={{fontSize:"22px"}} >
<tr><td style={{color:"#0355cc"}}>
  titre
  </td><td>{props.elem.titre}</td></tr>
<tr><td style={{color:"#0355cc"}}>
  prix
  </td><td>{props.elem.prix}</td></tr>
  <tr><td style={{color:"#0355cc"}}>
  ville
  </td><td>{props.elem.ville}</td></tr>
  <tr><td style={{color:"#0355cc"}}>
  cartier
  </td><td>{props.elem.cartier}</td></tr>
  <tr><td style={{color:"#0355cc"}}>
  contact
  </td><td>{props.elem.contact}</td></tr>
  <tr><td style={{color:"#0355cc"}}>
  description
  </td><td>{props.elem.description}</td></tr>
  <tr><td style={{color:"#0355cc"}}>
  categorie
  </td><td>{props.elem.categorie}</td></tr>
  
  </table>
</motion.div>)
}
function Recherche(props){
  return (<>
  <center><h1 style={{color:"white",backgroundColor:"#d1e3ff",margin:"0"}}>Filtrer</h1></center>
  <div style={{width:"100%",padding:"10px",margin:"0 0",display:"flex",justifyContent:"space-evenly",backgroundColor:"#d1e3ff",color:"#0355cc"}} className="filter">
<div><font className="nav-brand" >ville</font>
<select onChange={(event)=>props.setVille(event.target.value)}>{
  villes.map((e,i)=>{
    return <option key={i} value={e}>{e}</option>
  })}
  </select></div>

<div><font className="nav-brand">cartier</font>
<select onChange={(ev)=>props.setCartier(ev.target.value)} >
  {
  cartiers.filter(e=>{
    if(props.ville){
      return e.ville==props.ville
    }else{
      return true
    }
  }).map((e,i)=>{
    return <option key={i}>{e.cart}</option>
  })}
  </select></div>

<div><font className="nav-brand">categorie</font>
<select onChange={(ev)=>props.setCategorie(ev.target.value)} >
{
  categories.filter(e=>{
    if(props.mode){
      return e.animal==props.mode
    }else{
      return true
    }
  }).map((e,i)=>{
    return <option key={i}>{e.cat}</option>
  })}
  </select></div></div></>)
}
function Ans(props){
  
  const [l2,setl2]=useState(props.l.filter(e=>{
    if(props.animal){return e.animal==props.animal}else{
      return true
    }
    
  }).filter(e=>{
    if(props.ville){
      return e.ville==props.ville
    }else{
      return true
    }
  }).filter(e=>{
    if(props.cartier){
      return e.cartier==props.cartier
    }else{
      return true
    }
  }).filter(e=>{
    if(props.categorie){
      return e.categorie==props.categorie
    }else{
      return true
    }
  }));
  useEffect(()=>{setl2(props.l.filter(e=>{
    if(props.animal){return e.animal==props.animal}else{
      return true
    }
    
  }).filter(e=>{
    if(props.ville){
      return e.ville==props.ville
    }else{
      return true
    }
  }).filter(e=>{
    if(props.cartier){
      return e.cartier==props.cartier
    }else{
      return true
    }
  }).filter(e=>{
    if(props.categorie){
      return e.categorie==props.categorie
    }else{
      return true
    }
  }))} ,[props.animal,props.categorie,props.ville,props.cartier])
  return (<motion.div  initial={{ opacity: 0 ,y: -10 }}
    animate={{ opacity: 1 ,y:0 }}
    transition={{ type: "spring",duration:1,stifness:400    }}>
  <div style={{background:"white",width:"90%",margin:"10px auto",borderRadius:"20px"}}>
    <h1 style={{marginLeft:"10px",color:"#0355cc"}}>{props.animal}</h1>
    <div className='oo'>
      {l2.length==0?<h2 className='alert-primary rounded p-3'>il n y a aucun offre</h2>:l2.map((e,i)=>{
        return <div key={i} className="w3-card-4 w3-margin w" >
        <div className="w3-display-container w3-text-white">
          <img src={e.image} alt="Lights" style={{width:"100%"}}/>
          <div className="w3-xlarge w3-display-bottomleft badge badge-primary" style={{backgroundColor:'#0355cc'}}>{e.titre}</div>
        </div>
        <center><h3 style={{color:"#0355cc"}}>{e.prix} dhs</h3></center>
       <center><p>{e.description}</p></center> 
       <center><a href="#" ><button className='botona' onClick={()=>props.setId(e.id)}>voire</button></a></center>
      </div>
      
      })}
    </div>
{console.log(12)}
  </div>
  </motion.div>)
}

function Header(props){
  useEffect(()=>{
props.setId();
  },[props.mode])
  return (<>
   <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +212 766548709
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : soufianeasmar0@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span><svg style={{width:"40px",height:"40px",fill:"#4335A7"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M320 192l17.1 0c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4l0 4 0 32 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-140.8L280 448l56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-223.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3l0 85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5s0 0 0 0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32c0 0 0 0 0 0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128c0 0 0 0 0 0l0-96 0-20 0-1.3C352 4.8 356.7 .1 362.6 0l.2 0c3.3 0 6.4 1.6 8.4 4.2c0 0 0 0 0 .1L384 21.3l27.2 36.3L416 64l64 0 4.8-6.4L512 21.3 524.8 4.3c0 0 0 0 0-.1c2-2.6 5.1-4.2 8.4-4.2l.2 0C539.3 .1 544 4.8 544 10.7l0 1.3 0 20 0 96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
                animaux Maroc
              </span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className={`nav-item ${props.mode != undefined ? "" : "active"}`}   >
                  <a  style={{cursor:"pointer"}}  className="nav-link" onClick={()=>props.setMode()}  >principale</a>
                </li>
                <li className={`nav-item ${props.mode != "chien" ? "" : "active"}`}>
                  <a  style={{cursor:"pointer"}} className="nav-link"  onClick={()=>props.setMode("chien")} >chien</a>
                </li>
                <li className={`nav-item ${props.mode != "chat" ? "" : "active"}`}>
                  <a style={{cursor:"pointer"}}  className="nav-link"  onClick={()=>props.setMode("chat")} >chat</a>
                </li>
                <li className={`nav-item ${props.mode != "oiseau" ? "" : "active"}`}>
                  <a  style={{cursor:"pointer"}} className="nav-link"  onClick={()=>props.setMode("oiseau")} >oiseau</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </>)
}
function Slider(props){
  return (<>
   <motion.section 
   initial={{ opacity: 0 ,x: -400 }}
   animate={{ opacity: 1 ,x:0 }}
   transition={{ type: "spring",duration:1,stifness:400    }}
   className="slider_section ">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="detail-box">
              <h1>
               Le Site numero 1 <br/>
               de vente et de achat des animaux <br/>
               au Maroc
              </h1>
              
              <a href="https://www.instagram.com/soufianeasmar6/profilecard/?igsh=MXZkZGgzY3VqOWJ6NA==" about='blank'>
                contater nous
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={props.image} alt="" style={{borderRadius:"20px",margin:"0 auto"}}></img>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
   
  </>)
}
function Proprs(){
  return (<>
  <section className="feature_section">
    <div className="container">
      <div className="feature_container">
        <div className="box">
          <div className="img-box">
            <svg enable-background="new 0 0 511.995 511.995" height="512" viewBox="0 0 511.995 511.995" width="512" xmlns="http://www.w3.org/2000/svg">
              <g>
                <g>
                  <path d="m217.106 280.749-48.214 48.214c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l48.214-48.214c3.905-3.905 3.905-10.237 0-14.143s-10.237-3.905-14.142 0z" />
                  <path d="m328.915 168.939-48.17 48.17c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929l48.17-48.17c3.905-3.905 3.905-10.237 0-14.143-3.905-3.905-10.235-3.905-14.142 0z" />
                  <path d="m467.092 344.045c-19.14-11.051-41.175-14.64-62.649-10.314l-77.734-77.734 77.792-77.792c5.807 1.153 11.636 1.714 17.42 1.713 31.563-.001 61.664-16.706 78.009-45.016 14.983-25.951 16.076-57.546 2.923-84.516-4.363-8.946-10.004-13.602-16.765-13.838-6.652-.225-12.388 3.784-17.092 11.933l-15.5 26.847c-2.641 4.573-3.996 4.574-6.241 4.574h-11.499c-7.173 0-8.405-.712-11.992-6.924l-5.749-9.957c-1.161-2.011-1.801-3.12.84-7.692l15.5-26.847c4.705-8.15 5.307-15.138 1.788-20.769-3.585-5.737-10.432-8.295-20.366-7.6-29.932 2.094-56.747 18.837-71.73 44.789-11.052 19.141-14.641 41.178-10.313 62.65l-77.734 77.734-77.792-77.792c7.444-37.494-9.805-76.089-43.302-95.429-25.954-14.982-57.549-16.075-84.519-2.921-8.945 4.363-13.601 10.003-13.837 16.764-.232 6.636 3.783 12.387 11.933 17.092l26.846 15.5c4.574 2.641 4.574 3.92 4.574 6.241v11.499c0 7.173-.712 8.406-6.924 11.992l-9.958 5.749c-2.011 1.161-3.119 1.801-7.692-.839l-26.847-15.5c-8.15-4.706-15.138-5.307-20.769-1.789-5.737 3.585-8.294 10.437-7.6 20.366 2.094 29.933 18.837 56.749 44.789 71.732 19.141 11.051 41.176 14.64 62.65 10.313l77.734 77.734-77.792 77.791c-37.491-7.443-76.088 9.805-95.429 43.303-14.983 25.951-16.076 57.545-2.922 84.515 4.363 8.946 10.003 13.602 16.764 13.838 6.644.24 12.387-3.783 17.093-11.933l15.5-26.846c2.641-4.574 3.92-4.574 6.242-4.574h11.498c7.172 0 8.405.712 11.992 6.924l5.748 9.957c1.161 2.012 1.801 3.12-.839 7.692l-15.5 26.847c-4.706 8.15-5.307 15.138-1.788 20.769 3.202 5.124 9.008 7.711 17.285 7.711.991 0 2.019-.037 3.08-.111 29.933-2.094 56.749-18.837 71.731-44.788 11.051-19.141 14.641-41.178 10.314-62.65l77.733-77.733 77.792 77.792c-7.443 37.494 9.806 76.089 43.303 95.429 13.902 8.026 29.419 12.066 44.981 12.066 13.488-.001 27.012-3.037 39.534-9.144 8.945-4.363 13.601-10.003 13.837-16.764.232-6.636-3.782-12.387-11.933-17.093l-26.847-15.499c-4.573-2.641-4.573-3.92-4.573-6.242v-11.498c0-7.173.712-8.406 6.924-11.992l9.957-5.749c2.011-1.162 3.118-1.801 7.692.839l26.847 15.5c8.149 4.706 15.137 5.307 20.77 1.788 5.736-3.585 8.294-10.437 7.599-20.365-2.092-29.935-18.836-56.75-44.787-71.733zm-349.33-183.857c-2.529-2.528-6.217-3.514-9.67-2.585-18.082 4.867-36.972 2.39-53.188-6.972-19.866-11.47-32.794-31.86-34.751-54.705l25.178 14.537c6.256 3.612 15.932 7.629 27.692.839l9.958-5.749c12.336-7.123 16.923-15.067 16.923-29.312v-11.5c-.001-13.578-8.318-19.95-14.574-23.562l-25.178-14.535c20.763-9.729 44.887-8.727 64.752 2.743 27.385 15.812 40.811 48.162 32.647 78.671-.923 3.45.063 7.131 2.589 9.656l81.715 81.715-14.141 14.141-44.633-44.633c-3.905-3.905-10.237-3.905-14.143 0s-3.905 10.237 0 14.143l44.633 44.633-14.143 14.143zm42.426 234.045c-2.529 2.529-3.515 6.216-2.585 9.67 4.866 18.083 2.39 36.972-6.973 53.189-11.469 19.865-31.858 32.794-54.704 34.751l14.537-25.178c3.611-6.256 7.627-15.933.839-27.692l-5.749-9.958c-7.123-12.336-15.066-16.923-29.311-16.923h-11.5c-13.577 0-19.95 8.317-23.563 14.573l-14.536 25.178c-9.728-20.763-8.726-44.886 2.743-64.751 15.812-27.386 48.161-40.813 78.671-32.647 3.45.921 7.131-.063 9.656-2.589l234.094-234.094c2.529-2.529 3.515-6.216 2.585-9.67-4.866-18.083-2.391-36.972 6.973-53.188 11.47-19.866 31.86-32.794 54.705-34.751l-14.537 25.177c-3.612 6.256-7.629 15.932-.84 27.692l5.749 9.958c7.123 12.337 15.067 16.923 29.312 16.923h11.5c13.578-.001 19.95-8.318 23.562-14.573l14.537-25.178c9.728 20.763 8.726 44.885-2.744 64.751-15.811 27.386-48.164 40.809-78.671 32.647-3.451-.923-7.131.064-9.656 2.589zm306.476 7.3c-6.257-3.612-15.936-7.626-27.691-.839l-9.958 5.749c-12.336 7.122-16.923 15.066-16.923 29.31v11.5c0 13.578 8.317 19.95 14.573 23.563l25.178 14.536c-20.762 9.729-44.885 8.727-64.751-2.743-27.386-15.812-40.811-48.163-32.647-78.671.923-3.45-.063-7.131-2.589-9.656l-81.716-81.716 14.143-14.143 44.68 44.681c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929c3.905-3.905 3.905-10.237 0-14.142l-44.68-44.681 14.141-14.141 81.667 81.667c2.528 2.528 6.215 3.514 9.67 2.585 18.079-4.867 36.972-2.39 53.188 6.973 19.866 11.47 32.795 31.859 34.751 54.704z" />
                  <path d="m255.998 245.998h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z" />
                </g>
              </g>
            </svg>
          </div>
          <h5 className="name">
            Repair
          </h5>
        </div>
        <div className="box active">
          <div className="img-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512">
              <g id="paint-painted-paint_roller-home-house" data-name="paint-painted-paint roller-home-house">
                <path d="M60.01,25.05a2.963,2.963,0,0,0,1.85-1.54l.21-.41a3.022,3.022,0,0,0-1.14-3.91L58,17.43V7.82A3,3,0,0,0,57,2H49a3.009,3.009,0,0,0-3,3,2.979,2.979,0,0,0,1.99,2.81v3.62L33.54,2.76a2.988,2.988,0,0,0-3.08,0L3.07,19.19A3.022,3.022,0,0,0,1.93,23.1l.21.41a2.963,2.963,0,0,0,1.85,1.54,2.923,2.923,0,0,0,.83.12A3.033,3.033,0,0,0,6,24.9V56H5a3,3,0,0,0,0,6H59a3,3,0,0,0,0-6H58V24.91A2.9,2.9,0,0,0,60.01,25.05ZM49,4h8a1,1,0,0,1,0,2H49a1,1,0,0,1,0-2Zm7,4v8.23l-6.01-3.6V8ZM40,60H5a1,1,0,0,1,0-2H40Zm6,0H42V50h4Zm1-12H45V42.03a1.028,1.028,0,0,1,.42-.82l5.32-3.8A2.991,2.991,0,0,0,52,34.97V32a3.009,3.009,0,0,0-3-3H48V28a1,1,0,0,0-1-1H44a3.009,3.009,0,0,0-3-3H19a3.009,3.009,0,0,0-3,3H13a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h3a3.009,3.009,0,0,0,3,3h1v8a4,4,0,0,0,8,0V36h2a4,4,0,0,0,8,0h3a3.009,3.009,0,0,0,3-3h3a1,1,0,0,0,1-1V31h1a1,1,0,0,1,1,1v2.97a1.028,1.028,0,0,1-.42.82l-5.32,3.8A2.991,2.991,0,0,0,43,42.03V48H41a1,1,0,0,0-1,1v7H8V23.76L31.48,9.62a1.02,1.02,0,0,1,1.04,0L56,23.76V56H48V49A1,1,0,0,0,47,48ZM46,29v2H44V29Zm-4-2v6a1,1,0,0,1-1,1H38V26h3A1,1,0,0,1,42,27ZM29,30a3.009,3.009,0,0,0-3,3V44a2,2,0,0,1-4,0V26H36V36a2,2,0,0,1-4,0V33A3.009,3.009,0,0,0,29,30Zm1,3v1H28V33a1,1,0,0,1,2,0ZM20,26v8H19a1,1,0,0,1-1-1V27a1,1,0,0,1,1-1Zm-4,3v2H14V29ZM59,58a1,1,0,0,1,0,2H48V58ZM33.55,7.91a2.979,2.979,0,0,0-3.1,0L5.34,23.03a1.018,1.018,0,0,1-.8.1.972.972,0,0,1-.61-.51l-.21-.41A1.021,1.021,0,0,1,4.1,20.9L31.49,4.47a1,1,0,0,1,1.02,0L59.9,20.9a1.021,1.021,0,0,1,.38,1.31l-.21.41a.972.972,0,0,1-.61.51,1.018,1.018,0,0,1-.8-.1Z" />
              </g>
            </svg>
          </div>
          <h5 className="name">
            Improve
          </h5>
        </div>
        <div className="box">
          <div className="img-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512">
              <path d="M62.707,31.293l-30-30a1,1,0,0,0-1.414,0l-30,30A1,1,0,0,0,2,33H7V57H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H58a1,1,0,0,0,1-1V58a1,1,0,0,0-1-1H57V33h5a1,1,0,0,0,.707-1.707ZM57,61H7V59H57ZM9,57V32.414l23-23,23,23V57ZM56.414,31,32.707,7.293a1,1,0,0,0-1.414,0L7.586,31H4.414L32,3.414,59.586,31Z" />
              <path d="M41,39H36V36a1,1,0,0,0-1-1H29a1,1,0,0,0-1,1v3H23a3,3,0,0,0-3,3v4a1,1,0,0,0,1,1h1v7a1,1,0,0,0,1,1H41a1,1,0,0,0,1-1V47h1a1,1,0,0,0,1-1V42A3,3,0,0,0,41,39ZM30,37h4v2H30ZM40,53H24V47h5v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V47h5Zm-9-6h2v2H31Zm11-2H22V42a1,1,0,0,1,1-1H41a1,1,0,0,1,1,1Z" />
              <path d="M46,31H42.422a1,1,0,0,1,0-2H46a1,1,0,0,0,.916-1.4A5.992,5.992,0,0,0,36.231,27h-8.04a5.992,5.992,0,0,0-10.685.6,1,1,0,0,0,.916,1.4H22a1,1,0,0,1,0,2H18.422a1,1,0,0,0-.916,1.4,5.992,5.992,0,0,0,10.685.6h8.04a5.992,5.992,0,0,0,10.685-.6A1,1,0,0,0,46,31Zm-4.578,3a4,4,0,0,1-3.662-2.4,1,1,0,0,0-.916-.6H27.578a1,1,0,0,0-.916.6,3.991,3.991,0,0,1-6.3,1.4H22a3,3,0,0,0,0-6H20.359a3.991,3.991,0,0,1,6.3,1.4,1,1,0,0,0,.916.6h9.266a1,1,0,0,0,.916-.6,3.991,3.991,0,0,1,6.3-1.4h-1.64a3,3,0,0,0,0,6h1.64A3.988,3.988,0,0,1,41.422,34Z" /></svg>
          </div>
          <h5 className="name">
            Maintain
          </h5>
        </div>
      </div>
    </div>
  </section>
  </>)
}
function About(){
  return (<>
  <section className="about_section layout_padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="detail-box">
            <h2>
              About us
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="img-box">
            <img src="images/about-img.jpg" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>)
}
function Pro(){
  return (<>
  <section className="professional_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src="images/professional-img.png" alt=""></img>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="detail-box">
            <h2>
              We Provide Professional <br/>
              Home Services.
            </h2>
            <p>
              randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</>)
}
function App() {
  const [mode,setMode]=useState();
  const [ville,setVille]=useState();
  const [cartier,setCartier]=useState();
  const [categorie,setCategorie]=useState();
  const [id,setId]=useState();

  return (
  <>
   <div className="hero_area" style={{height:"100%",paddingBottom:"500px"}}>
   
   <Header mode={mode} setMode={setMode} setId={setId} ></Header>
   {mode==undefined &&   <Slider image="pexels-pixabay-33537.jpg" ></Slider>}
   {id && <Elem elem={lAnimauts.find(e=>{
    return e.id==id
   })} ></Elem>}
   <Recherche  ville={ville} setVille={setVille} cartier={cartier} setCartier={setCartier} categorie={categorie} setCategorie={setCategorie} mode={mode} ></Recherche>
   {mode ?<Ans mode={mode} ville={ville} cartier={cartier} categorie={categorie} id={id} setId={setId}  animal={mode} l={lAnimauts} ></Ans>:
   <>
   <Ans  ville={ville} cartier={cartier} categorie={categorie} id={id} setId={setId}  animal="chien" l={lAnimauts} ></Ans>
   <Ans  ville={ville} cartier={cartier} categorie={categorie} id={id} setId={setId} animal="chat" l={lAnimauts} ></Ans>
   <Ans  ville={ville} cartier={cartier} categorie={categorie} id={id} setId={setId} animal="oiseau" l={lAnimauts} ></Ans>
   </>
   }
  </div>
</>
  );
}

export default App;
