// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


import React from "react";
import ReactDOM from "react-dom/client";
import '../src/style.css'
import logo from '../src/img/Vector.png'
import logo2 from '../src/img/Group 13.png'
import logo3 from '../src/img/Group 115.png'
import logo4 from '../src/img/render 3.png'
// import '../src/img'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <div className="container">
        <div className="navbar">
            <img src= {logo}/>
            
                <ul>
                    <li>Продукция</li>
                    <li>Области применения</li>
                    <li>Калькулятор</li>
                    <li>Проекты</li>
                    <li>Информация</li>
                    <li>Новости</li>
                    <li>О компании</li>
                    <li>Контакты</li>
                </ul>
            
            <img src= {logo2}/>
        </div>

        <div className="mark">
            <div className="box">
                <div className="box_left">
                    <h1>
                        Раздвижные
                        конструкции
                    </h1>
                    <h2>
                        с высоким уровнем
                        звукоизоляции
                    </h2>
                    <ul>
                        <li>Собственное производство в России</li>
                        <li>Уровень вукоизоляции до 52 дБ</li>
                        <li>Расчит проекта по вашим требованиям за 1 час</li>
                        <li>Гарантия на продукцию 3 года</li>
                        <li>Работа “под ключ”</li>
                    </ul>
                    <div className="btn">
                        <p>
                        Получить рассчет проекта +
                        </p>
                    </div>
                </div>
                <div className="box_right">
                    <div className="box_one">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>                    
                </div>
            </div>
            <div className="box_img">
                <div className="img_left"></div>
                <div className="img_right"></div>
            </div>
            <div className="info">
                <div className="titel">
                    <img src={logo3}/>
                    <h1>18 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>18 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>18 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>18 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>18 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>8 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>62 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>12 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>30 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>51 лет</h1>
                    <p>работына рынке</p>
                </div>
                <div className="titel">
                    <img src={logo3}/>
                    <h1>35 лет</h1>
                    <p>работына рынке</p>
                </div>
            </div>
            <div className="box">
                <div className="box_left">
                    <h1>
                        Самые разные
                    </h1>
                    <h2>
                        области применения
                    </h2>
                    <ul>
                        <li>
                            Мы применяем уникальную систему потолочных треков, парковочных зон и роликов. Все это обеспечивает плавное и абсолютно бесшумное перемещение панелей.
                        </li>
                        <li>
                            Раздвижные перегородки и стены изготавливаются на заказ в зависимости от типа помещения и индивидуальных требований заказчика.
                        </li>
                    </ul>
                    <div className="btn">
                        <p>
                        Перейти в раздел проектов
                        </p>
                    </div>
                </div>
                <div className="box_right">
                    <div className="box_one">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>                    
                </div>
            </div>
            <div className="box_img">
                <div className="fooater_left">
                    <img src={logo4} />
                </div>
                <div className="fooater_right">
                    <h1>А может хотите</h1>
                    <h1 style={{color: '#B8884B'}}>персональную скидку</h1>
                    <h1>специально для вас?</h1>
                    <p>
                        Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время для обсуждения всех деталей спецпредложения специально для вас.
                    </p>
                    <br/>
                    <p>
                    Для начала, давайте определимся, к какому типу клиентов вы себя относите :
                    </p>

                    <div className="btn">
                    <p># Собственник {'>'} </p> 
                    </div>
                </div>
            </div>
        </div>

        
    </div>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

