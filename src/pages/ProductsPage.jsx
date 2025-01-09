import React from 'react'
import { useState } from 'react'
import {useGet} from '.././hooks/useGet'
import {Title} from '../components/Title/Title'
import { ProductMenu } from '../components/ProductMenu/ProductMenu'
import { ProductCard } from '../components/ProductCard/ProductCard'


export const ProductsPage = () => {
  const[id, setId] = useState(1);
  const {data, isLoading, error} = useGet(`https://api.mediehuset.net/bakeonline/categories/${id}`)

  return (
    <>
    <Title title="Vores eleskede bagværk"
          text="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud."/>
    <h2>{data?.item.title}</h2>
    <ProductMenu setId={setId} />
    <div style={gridContainerStyle}>
    {data?.item.products.map((product)=>{
      return(
        <ProductCard imgSrc={product.image.fullpath}
                     numberComments= {product.num_comments}
                     title={product.title}
                     text={product.teaser.slice(0,80)} />
      )
    })}
        </div>
    
   
  </>
        )
}

const gridContainerStyle = {
 display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap:'10px',
  margin:'11rem',
  marginTop:'-13rem'

 
};