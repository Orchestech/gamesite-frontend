
import '../css/HeaderComponent.css';

function HeaderComponent() {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li><a href='#main-block' className='nav__item'>Wraith Wrangler</a></li>
                        <li><a href='#about-game' className='nav__item'>What is it?</a></li>
                        <li><a href='#beta' className='nav__item'>Beta</a></li>
                        <li><a href='' className='nav__item'>Log in</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderComponent;