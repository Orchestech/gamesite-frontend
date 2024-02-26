import '../css/MainComponent.css';
import * as Images from './image';

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
                            <h3>Баланс? Нет, мы предпочитаем анархию</h3>
                            <p>Разработчики не знают что это такое, да и всем, собсна, безразницы.</p>
                            <p>Тебя что-то не устраивает? Вау, ты такой оригинальный...</p>
                            <p>Оставляй комментарий и мы обязательно учтем твое мнение.</p>
                        </div>
                        <div className='about-game__item'>
                            <h3>Шикарный геймплей</h3>
                            <p>Вам придется задротить эту дичь 3000 часов и в конечном итоге вы нифига не получите!</p>
                            <p>Спешите, иначе найдутся другие идиоты вместо вас.</p>
                        </div>
                        <div className='about-game__item'>
                            <h3>Абсолютно новый подход к защите</h3>
                            <p>В игре используется инновационный способ защиты от пиратов.</p>
                            <p>Лучшая защита - нападение. У нас нет никакой защиты, мы первые взламываем хакеров!</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className='beta' id='beta'>
                <div className='container'>
                    <h2>У нас проходит beta-тестирование!</h2>
                    <div className='beta-block'>
                        <h3>Уже не терпится поиграть?</h3>
                        <p>Это вполне реализуемо!</p>
                        <p>Подавай заявку на тестирование, в течение 2-ух лет мы рассмотрим ее и обязательно пришлем ключик.</p>
                        <p>Вы тестер?</p>
                        <div className='beta-block__grid'>
                            <div className='beta-block__item'>
                                <img src={Images.ImgTime} alt='' width='100px' />
                                <p>Есть немного свободного времени</p>
                            </div>
                            <div className='beta-block__item'>
                                <img src={Images.ImgTools} alt='' width='100px' />
                                <p>Куча инициативы к новому</p>
                            </div>
                            <div className='beta-block__item'>
                                <img src={Images.ImgMoney} alt='' width='100px' />
                                <p>Получаете шикарные призы</p>
                            </div>
                        </div>
                        <a href='registration.html' className='registration_block'>
                            <div className='registration_link'>Один раз живем!</div>
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default MainComponent;