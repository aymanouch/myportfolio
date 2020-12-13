import React, {useEffect, useState} from 'react';
import Links from './Links';
import Logo from './Logo';
import './navbar.css';
import { FaBars, FaTimes} from 'react-icons/fa';
function Navbar() {
const [showMenu, setshowMenu] = useState(false);
const [toggeleMenu, setToggelMenu] = useState(false);
    useEffect(() => {
        if(window.innerWidth <= 991) {
            setshowMenu(true);
        }
    }, []);
    window.addEventListener('resize', function() {
        if(window.innerWidth <= 991) {
            setshowMenu(true);
        } else{
            setshowMenu(false);
            setToggelMenu(false);
        }
    });
function handleLinkClick() {
         if(window.innerWidth <=991) {
             setToggelMenu(false);
         }
}
    return (<div className="navbar">
                <div className="container">
                    <div className="flex-navbar">
                    <div className="cont-logo__navbar center-left black-back"><Logo /></div>
                    <div className="cont-list__navbar center-right white-back">
                    <Links show={toggeleMenu} handleClick={() => {handleLinkClick()}}/>
                    </div>
                    <div className="cont-icon__navbar center-right">{showMenu&&<div className="icon-menu" onClick={()=> {setToggelMenu(!toggeleMenu)}}>
                                <IconBtn value={toggeleMenu} />
                        </div>}</div>
                    </div>
                </div>
          </div>);
}

function IconBtn(props) {
    if(!props.value) {
        return(<FaBars />)
    }
    return <FaTimes />;
}
export default Navbar;