import React, { useState } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  const [active, setActive] = useState(false);

  const toggleBurger = () => {
    setActive(!active);
  };
  return (
    <>
      <header className={s.header}>
        <div className="container__main">
          <nav className={s.nav}>
            <div className={s.logo}>
              <Link to={'/'} className={s.h1__logo}>
                StuDent ChaT
              </Link>
            </div>

            <div className={`${s.links} ${active ? s.active : ''}`}>
              <Link to={'/'}>Главная</Link>
              <a href="">Группа</a>
              <div className={s.news}>
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
              </div>
              <Link to={'/Teacher'}>Учителя</Link>
              <Link to={'/login'}>        <button className={s.log}>Войти</button> </Link>

              <Link to={'/register'}>     <button className={s.reg}>Регистрация</button> </Link>

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
