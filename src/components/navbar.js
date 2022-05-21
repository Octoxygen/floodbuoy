import logo from './resources/sidebar-logo.png';
import userIcon from './resources/icon_user_white.png';
import iconHome from './resources/icon_home.png';
import iconDashboard from './resources/icon_dashboard 1.png';
import iconMap from './resources/icon_floodmap.png';
import iconForecast from './resources/icon_floodforecast.png';
import iconAbout from './resources/icon_about.png';
import iconNews from './resources/icon_news.png';
import iconSupport from './resources/icon_support.png';
import iconPremium from './resources/icon_premium1.png';
import iconSettings from './resources/icon_settings.png';

import './navbar.css';

function Navbar() {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <div className='upper-panel'></div>

                <img src={logo} alt="logo" />

                <div className='user'>
                    <div>
                        <img src={userIcon} alt="user icon"></img>
                    </div>
                    <div>
                        <p>JUAN DELA CRUZ</p>
                    </div>
                </div>
                
                <div className='group1'>
                    <button className='active nav-button'>
                        <img src={iconHome} alt="home icon"></img>
                        <p>HOME</p>
                    </button>
                    <button className='nav-button'>
                        <img src={iconDashboard} alt="user icon"></img>
                        <p>DASHBOARD</p>
                    </button>
                    <button className='nav-button'>
                        <img src={iconMap} alt="flood map icon"></img>
                        <p>FLOOD MAP</p>
                    </button>
                    <button className='nav-button'>
                        <img src={iconForecast} alt="flood forecast icon"></img>
                        <p>FLOOD FORECAST</p>
                    </button>
                </div>
                
                <div className='div-divider'>
                    <div className='solid'></div>
                </div>

                <div>
                    <button className='nav-button'>
                        <img src={iconAbout} alt="about icon"></img>
                        <p>ABOUT</p>
                    </button>
                    <button className='nav-button'>
                        <img src={iconNews} alt="news icon"></img>
                        <p>NEWS</p>
                    </button>
                    <button className='nav-button'>
                        <img src={iconSupport} alt="support icon"></img>
                        <p>SUPPORT</p>
                    </button>
                </div>

                <div className='div-premium'>
                    <button className='premium-button'>
                        <img src={iconPremium} alt="support icon"></img>
                        <p>Try FloodBuoy Premium</p>
                    </button>
                </div>
                
                <div className='div-download'>
                    <button className='download-button'>DOWNLOAD APP</button>
                </div>
                
                <div className='div-settings'>
                    <button className='settings-button'>
                        <img src={iconSettings} alt="home icon"></img>
                        <p>SETTINGS</p>
                    </button>
                </div>
            </div>
        </div>
    )
}   

export default Navbar;