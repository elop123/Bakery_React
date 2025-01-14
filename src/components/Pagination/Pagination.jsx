import React from 'react';
import chevron from '../../assets/images/Billeder/br├©d/chevron.png'; 
import style from './Pagination.module.scss'

export const Pagination = ({ pageForward, pageBackward, pageCount }) => {
  return (
    <div>
      <button  className={style.pageBtn} onClick={pageBackward}>
        <img  className={style.imgIcon} src={chevron} alt="Backward" />
      </button>
      <span className={style.num}>{pageCount}</span>
      <button  className={style.pageBtn} onClick={pageForward}>
        <img className={style.imgIcon} src={chevron} alt="Forward" />
      </button>
    </div>
  );
};
