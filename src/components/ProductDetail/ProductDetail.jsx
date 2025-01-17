import React from 'react'
import {useState, useEffect} from 'react-router-dom'
import { CommentCard } from '../CommentCard/CommentCard';

export const ProductDetail = () => {
    const [product, setProduct] = useState([]);

    const url = `https://api.mediehuset.net/bakeonline/products/{id}`;

   useEffect(()=>{
       const fetchList= async ()=>{
           try{
                    const response = await fetch(url);
                    const data = await response.json();
                    setList(data.items)
                }
                catch(error){
                    console.error('Error fetching', error)
                }
            }
            fetchList()}, [id])
  return (

  

  )
}
