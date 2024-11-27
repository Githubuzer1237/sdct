import React from 'react'
import s from './HomeHero.module.scss'
const HomeHero = () => {
  return (
    <>
      <section className={s.welcome_section}>
        <div className={s.container_welcome}>
          <img src="/sdct-removebg-preview.png" alt="" className={s.logo} />
          <div className={s.welcome_text}>Welcome to Student Chat</div>
        </div>        
      </section>
        <section className={s.active}>
                <div className={s.home_wrapper}>
                    <h2 className={s.home_title}>О нас</h2>
                    <p className={s.home_text}>Мы первый сайт который был создан для
                        студентов,учеников из разных школ и классов,кто
                        собирается поступать в вузы/институты и колледжи.
                        Здесь вы можете практически все.Практически имеем
                        ввиду,помогать друг-другу с поступление,советоваться с
                        нашими учителями а так же делиться опытом если вы
                        уже поступил,потому что это поможет другим.
                        Здесь вы так-же сможете найти информацию о IELTS и еще материалы для подготовления к IELTS.
                    </p>
                </div>
                <img className={s.home_img} src="/hi.svg" alt="" />
        </section>
        <section className={s.services}>
                <h1 className={s.services_title}>Чем мы можем помочь вам?</h1>
                <div className={s.service_cards}>
                    <div className={s.service_card}>
                        <img className={s.service_img} src="/Colleg.JPG" alt="Помощь при поступлении" />
                        <h2 className={s.service_title}>Помощь при поступлении</h2>
                        <p className={s.service_text}>Вы можете оставлять свою информацию про поступления, как и куда можно будет поступить. А также, если у вас есть ответы на экзамены, вы можете поделиться именно здесь.</p>
                    </div>
                    <div className={s.service_card}>
                        <img className={s.service_img} src="/Comit.JPG" alt="Общение с другими людьми" />
                        <h2 className={s.service_title}>Общение с другими людьми</h2>
                        <p className={s.service_text}>С помощью общения с другими людьми, вы можете узнавать для себя очень много нового. Если у вас нет друзей, подходящих для вас, то вы можете найти их здесь. Главное соблюдайте приличие и никого не оскорбляйте!</p>
                    </div>
                    <div className={s.service_card}>
                        <img className={s.service_img} src="/learn.JPG" alt="Поступления в колледжи" />
                        <h2 className={s.service_title}>Поступления в колледжи</h2>
                        <p className={s.service_text}>Помимо студентов, здесь могут быть ученики из разных школ. Тут вам смогут помочь и с поступлением в колледж. Главное соблюдайте субординацию и никого не оскорбляйте!</p>
                    </div>
                </div>
        </section>
        <section className={s.why_us}>
            <h1 className={s.why_us_title}>Почему именно мы?</h1>
            <div className={s.content}>
                <div className={s.item}>
                    <h2 className={s.item_title}>Способ связи</h2>
                    <p className={s.item_text}>Способ связи с учителями будет в Zoom.</p>
                </div>
                <div className={s.item}>
                    <h2 className={s.item_title}>Учителя</h2>
                    <p className={s.item_text}>У нас самые лучшие учителя, которые смогут вам помочь чем смогут.</p>
                </div>
                <div className={s.item}>
                    <h2 className={s.item_title}>Помощь 24/7</h2>
                    <p className={s.item_text}>Мы готовы вам помогать хоть даже ночью!</p>
                </div>
            </div>
            <div className={s.image}>
                <img src="/Enot.png" alt="" />
            </div>
        </section>
        <section className={s.our_users}>
            <h1 className={s.our_users_title}>Наши пользователи</h1>
            <div className={s.content_our}>
                <div className={s.item}>
                    <img className={s.item_img} src="/chart.png" alt="График" />
                    <h2 className={s.item_text_desc}>199%</h2>
                    <p className={s.item_text_decor}>Найдёте ответы на все ваши вопросы</p>
                </div>
                <div className={s.item}>
                    <img className={s.item_img} src="/laptop.png" alt="Ноутбук" />
                    <h2 className={s.item_text_desc}>200%</h2>
                    <p className={s.item_text_decor}> Наши учителя помогут вам</p>
                </div>
                <div className={s.item}>
                    <img className={s.item_img} src="/house.png" alt="" />
                    <h2 className={s.item_text_desc}>200%</h2>
                    <p className={s.item_text_decor}>Найдёте себе новых друзей</p>
                </div>
            </div>
        </section>
        <section className={s.news}>
            <div className={s.card}>
                <div className={s.image_box}>
                    <img src="/Earth.jpg" alt="" />
                  </div>
                  <div className={s.content_news}>
                    <h2 className={s.news_card}>Последние новости</h2>
                    <br />
                    <p className={s.news_card_text}>Мы создали проекта SDCT расшифруется как Student chat. 
                      Вскоре мы еще создадим сайт где вы можете узнавать,как же можно поступить в институты, колледжи, вузы и лицеи. И это все абсолютно бесплатно!
                      Так же если вы уже поступили и хотите помочь другим с этим,то спешим вас обрадовать вы можете сделать это именно у нас, вы можете вскоре создавать свои группы, еще можете так же проводить свои уроки.
                      Например: английский, немецкий или математику. 
                      Но если вы не сможете найти ту информацию которая вам нужна, то не спешите уходить от нас.
                      У нас для этого есть учителя которые могут помочь вам с поступлением или с подготовкой предстоящими экзаменами.
                      Помимо все этого, вы на сайте сможете найти себе много новых друзей с других стран и городов.
                      Узнавать последние новости про свои учреждение и наших обновлениях в дальнейшем.
                      Так что подписывайтесь на нас и следите за последними новостями!</p>
                    </div>
                  </div>
        </section>

    </>
  )
}

export default HomeHero
