import { ReactComponent as GitHubIcom } from 'Assets/img/github.svg';
import './styles.css'

function Navbar() {

    return (

        <header>
            <nav className="container">
                <div className="dsmovie-nav-content"> 
                    <h1>DSmovie</h1>
                    <a href="https://github.com/Ruunes"></a>
                    <div className='dsmovie-contact-container'>
                        <GitHubIcom />
                        <p className="dsmovie-contact-link">/Ruunes</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;