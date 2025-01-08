import React from 'react';
import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <h3 className={style.footerTitle}>bageriet</h3>
      <p className={style.footerText}>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer.
      </p>
     <div className={style.disclaimer}>Copyright &#169; 2017 bageriet aps</div>
    </footer>
  );
};
