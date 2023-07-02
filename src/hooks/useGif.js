import React, { useEffect, useState } from 'react'
import axios from 'axios';



const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag) {
  const tag_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const random_url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [loading,setLoading]=useState(false);
    // const [tag,setTag]=useState('cute dogs');
    const [gif,setGif]=useState('');
    async function fetchData(){
      setLoading(true);

      const {data}=await axios.get(tag?tag_url:random_url);
      const imageSource=data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(()=>{fetchData();},[]);
  

    return {gif,loading,fetchData};

}

export default useGif
