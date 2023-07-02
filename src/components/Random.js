import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
  
  const {gif,loading,fetchData}=useGif();

 
  return (

    <div className='w-1/2 h-[450px] bg-green-500 rounded-2xl border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold py-5'>A Random Gif</h1>
      {
        (loading===false)?<img src={gif} width={450}></img>:<Spinner/>
      }
      
      <button onClick={()=>fetchData()} className='uppercase w-4/5 py-2 bg-white/70 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center'>
        Generate
      </button>
    </div>
  );
}

export default Random
