import React from 'react';
import s from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={s.footer}>
    <div className="container__main">
    <div className={s.footer__wrapper}>
      {/* <div className={`${s.footer__sect__1} ${s.footer__sect} }`> */}
            <div className={`${s.footer__sect__1} ${s.footer__sect}`}>
        <div className={s.text}>
        <h2>THE STUDENTCHAT GAZETTE</h2>
        <p>Subscribe to the Gazette and be the first to <br /> receive the latest news from StudentChat.</p>
        </div>
        <div className={s.email}>
          <input type="email" placeholder='Your email address' />
          <button>SUMBIT</button>
        </div>
      </div>
      <div className={`${s.footer__sect__2} ${s.footer__sect}`}>
        <img src="/sdct.jpg" alt="" className={s.sdct} />

        <div className={s.socials}>
        <Link> <img className={s.social} src="/icons/instagram.svg" alt="" />  </Link>
        <Link> <img className={s.social} src="/icons/youtube.svg" alt="" />    </Link>
        <Link> <img className={s.social} src="/icons/twitter.svg" alt="" />    </Link>
        <Link> <img className={s.social} src="/icons/facebook.svg" alt="" />   </Link>

        </div>

        <div className={s.links}>
         <Link>Cookies policy</Link>
         <Link>Legan Information</Link> 
         <Link>Accesebility</Link>
        <Link>General terms and conditions</Link> 
         <Link>Privacy Policy</Link>
         <Link>Cookies</Link>
         
        </div>
      </div>
      <div className={`${s.footer__sect__3} ${s.footer__sect}`}>
       <h2>CUSTOMER SERVICE</h2>
       <div className={s.another}>
       <Link>Products & Sales Information</Link>
       <Link>After-sales Service</Link>
       <Link>Career Taking care of your Goyard</Link>
       <Link>FAQ</Link>
       </div>


       <div className={s.sec}>
        <h2>GOYARD BOUTIQUES</h2>
        <Link>Find a store</Link>
       </div>
      </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
