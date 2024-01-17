import './Navbar.css' 

import IssLogo from '../assets/ISS_logo.svg'

const Navbar = () =>{

    const url1 = 'https://www.nasa.gov/international-space-station/';

    const url2 = 'https://www.nasa.gov/mission/apollo-13/'

    const url3 = 'http://open-notify.org/Open-Notify-API/People-In-Space';

    return(

        <>

        <div className = 'navbar--container'>

            <div className = 'navbar--title'>

                <a href = { url1 } target = 'blank' id = 'link-logo'>

                    <img src = {IssLogo} alt = 'Logo de ISS' />

                </a>

            </div>

            <div className = 'navbar--links'>

                <div className = 'navbar--link'>

                    <a href = {url1} target = 'blank' > Home </a>

                </div>

                <div className = 'navbar--link'>

                    <a href = {url2} target = 'blank' > Apolo 13 </a>

                </div>

                <div className = 'navbar--link'>

                    <a href = {url3} target = 'blank' > Astros </a>

                </div>

            </div>

        </div>
        
        </>

    )

}

export default Navbar;