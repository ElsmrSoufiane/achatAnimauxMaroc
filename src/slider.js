import { image } from 'framer-motion/client';
import { useState } from 'react';



const ImageSlider = ({ images }) => {
  const [index,setIndex]=useState(0);
  function Add(){
    if(index!=(images.length-1)){
        setIndex(index+1)
    }
 }
    function M(){
        if(index!=0){
            setIndex(index-1)
        }
  }
  return (<>
  <br></br>
  <div style={{display:'flex',justifyContent:"space-evenly"}}>
  <button className='btn btn-primary' onClick={M} >{"<<"}</button>
    <button className='btn btn-primary' onClick={Add} >{">>"}</button>
   
  </div>
  <img style={{width:"90%",margin:"5px auto",display:'block',borderRadius:'20px'}} src={images[index]} ></img>
  </>)
};
export default ImageSlider;