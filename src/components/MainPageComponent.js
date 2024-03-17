import '../css/MainComponent.css';
import * as Images from './image';
import { Link } from 'react-router-dom';

function MainComponent() {
    return (
        <main>
            <article className='main-block' id='main-block'>
                <div className='container'>
                    <div className='main-block__gif'>
                        <h1>WRAITH WRANGLER</h1>
                        <a href=''>Играть</a>
                    </div>
                </div>
            </article>
            <article className='about-game' id='about-game'>
                <div className='container'>
                    <h2 className='about-game__title'>Что тут происходит?</h2>
                    <div className='about-game__grid'>
                        <div className='about-game__item about-game__item_first'>
                            <h3>Стреляй</h3>
                            <p>Это твой единственный шанс на победу.</p>
                            <p>Толпы врагов уже так и рвутся к тебе!</p>
                            <p>Сделай все, что бы противостоять им.</p>
                            <p></p>
                        </div>
                        <div className='about-game__item'>
                            <h3>Живи</h3>
                            <p>Помни, ты не бессмертен, как и твои враги.</p>
                            <p>Удастся ли тебе уцелеть?</p>
                        </div>
                        <div className='about-game__item'>
                            <h3>Спасайся</h3>
                            <p>Опасности подстерегают тебя на каждом шагу.</p>
                            <p>Не забывай поглядывать заспину.</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className='beta' id='beta'>
                <div className='container'>
                    <h2>У нас проходит бета-тестирование!</h2>
                    <div className='beta-block'>
                        <h3>Шагнешь во тьму?</h3>
                        <p>Нам нужны такие смельчаки как ты!</p>
                        <p>Подавай заявку на тестирование, в течение 2-ух недель мы рассмотрим ее и обязательно пришлем ключик.</p>
                        <p>Вы тестер?</p>
                        <div className='beta-block__grid'>
                            <div className='beta-block__item'>
                                <img src={Images.ImgTime} className={"img_pixel"} alt='' width='100px' />
                                <p>Есть немного свободного времени</p>
                            </div>
                            <div className='beta-block__item'>
                                <img src={Images.ImgTools} className={"img_pixel"} alt='' width='100px' />
                                <p>Куча инициативы к новому</p>
                            </div>
                            <div className='beta-block__item'>
                                <img src={Images.ImgMoney} className={"img_pixel"} alt='' width='100px' />
                                <p>Получаете шикарные призы</p>
                            </div>
                        </div>
                        <Link to='sign_up' className='registration_block'>
                            <div className='registration_link'>Действуй!</div>
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default MainComponent;
