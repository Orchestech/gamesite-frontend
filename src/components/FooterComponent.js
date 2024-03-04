import '../css/FooterComponent.css'
import { ReactComponent as DiscordIcon } from '../img/discord-alt-svgrepo-com.svg';
import { ReactComponent as VkIcon } from '../img/vk-svgrepo-com (1).svg';
import { ReactComponent as GithubIcon } from '../img/github-svgrepo-com.svg';

const FooterComponent = () => {
    return (
        <footer className='footer-block'>
            <div className='container'>
                <div className='footer-flex'>
                    <a href=''><DiscordIcon width='50px' height='auto' /></a>
                    <a href=''><VkIcon width='50px' height='auto' /></a>
                    <a href=''><GithubIcon width='50px' height='50px' /></a>
                </div>
                <p>RuKolf_engenering</p>
                <p>Все права защищены - нападайте.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
