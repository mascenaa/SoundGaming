import Logo from '../../assets/logo.svg'
import './header.css'
function Header () {
    return (  
        <section className='header'>
            <div className='headerLogo'>
                <img id="logo" src={Logo} alt="logo" />
            </div>
            <div className='headerList'>
                <ul>
                    <li>github</li>
                    <li>tutorial</li>
                    <li>tos</li>
                </ul>
            </div>
        </section>
    );
}

export default Header;