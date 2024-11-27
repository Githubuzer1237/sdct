import React, { useState } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  const [active, setActive] = useState(false);

  const toggleBurger = () => {
    setActive(!active);
  };

  const CloseMenu = () => {
  setActive(false);
  };
  return (
    <>
      <header className={s.header}>
        <div className="container__main">
          <nav className={s.nav}>
            <div className={s.logo}>
              <Link onClick={CloseMenu} to={'/'} className={s.h1__logo}>
                StuDent ChaT
              </Link>
            </div>

            <div className={`${s.links} ${active ? s.active : ''}`}>
              <Link onClick={CloseMenu} to={'/'}>Главная</Link>
              <a href="">Группа</a>

              <Link  className={s.dropdown} to={'/'}>
              Новости
              <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5306 6.53063L8.53063 11.5306C8.46095 11.6005 8.37816 11.656 8.28699 11.6939C8.19583 11.7317 8.09809 11.7512 7.99938 11.7512C7.90067 11.7512 7.80293 11.7317 7.71176 11.6939C7.6206 11.656 7.53781 11.6005 7.46813 11.5306L2.46813 6.53063C2.32723 6.38973 2.24808 6.19864 2.24808 5.99938C2.24808 5.80012 2.32723 5.60902 2.46813 5.46813C2.60902 5.32723 2.80012 5.24808 2.99938 5.24808C3.19864 5.24808 3.38973 5.32723 3.53063 5.46813L8 9.9375L12.4694 5.4675C12.6103 5.32661 12.8014 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5319 5.4675C13.6728 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6728 6.38911 13.5319 6.53L13.5306 6.53063Z"
                    fill="white"
                  />
                </svg>
              <div>
                   <Link to={'/'}>Все новости</Link>
                   <Link to={'/'}>Общество</Link>
                   <Link to={'/'}>Технологии</Link>
                   <Link to={'/'}>Культура</Link>
              </div>
              </Link>
             
              <Link className={s.teach} onClick={CloseMenu} to={'/Teacher'}>Учителя</Link>
              <Link onClick={CloseMenu} to={'/login'}><button className={s.log}>Войти</button> </Link>

              <Link onClick={CloseMenu} to={'/register'}>     <button className={s.reg}>Регистрация</button> </Link>

            </div>

            <div
              onClick={toggleBurger}
              className={`${s.burger} ${active ? s.active : ''}`}
            >
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;


{/* <div className={s.news}>
<li className={s.drop}>
  <p className={s.overflow} href="">
    Новости
  </p>
  <div className={s.dropdown_menu}>
    <ul className={s.drop__2}>
      <li>
        <a href="#">Все новости</a>
      </li>
      <li>
        <a href="#">Общество</a>
      </li>
      <li>
        <a href="#">Технологии</a>
      </li>
      <li>
        <a href="#">Культура</a>
      </li>
      <li>
        <a href="#">Спорт</a>
      </li>
    </ul>
  </div>
</li>
</div> */}