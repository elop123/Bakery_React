import React from 'react'
import { useGet } from '../../hooks/useGet'
import style from './ProductMenu.module.scss'

export const ProductMenu = ({ setId }) => {
const {data, isLoading, error }= useGet('https://api.mediehuset.net/bakeonline/categories');

  return (
    <aside>
       <ul style={{  alignItems:'left', marginTop:'-5rem', marginLeft:'-14rem', padding:'2rem', listStyle: 'none', display: 'flex', flexDirection:'column', fontFamily:'Open-sans',cursor:'pointer' }}>
        {!isLoading && data?.items?.map((item) => (
          <li  className={style.li}key={item.id} onClick={() => setId(item.id)}> 
            {item.title}
           
          </li>
        ))}
      </ul>
    </aside>
  )
}
