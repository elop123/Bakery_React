import React from 'react'
import { useGet } from '../hooks/useGet'
import { News } from '../components/News/News'
import {Slider} from '../components/Slider/Slider'
import {SignUp} from '../components/SignUp/SignUp'
import {List} from '../components/List/List'
import { ProductCard } from '../components/ProductCard/ProductCard'







export const HomePage = () => {

  const {data, isLoading, error} =  useGet("https://api.mediehuset.net/bakeonline/products")
  console.log(data);
  
  return (
    <div>
   <Slider />
   <News />
   <SignUp />
   <List />
  
   {/* {!isLoading && data?.items?.map((item) => {
  return (
    <ProductCard 
      key={item.id} 
      title={item.title} 
      text={item.teaser} 
      imgSrc={item.image.fullpath} 
      numberComments={item.num_comments} 
    />
  
  );
})} */}


   
   
    </div>
  )
}
