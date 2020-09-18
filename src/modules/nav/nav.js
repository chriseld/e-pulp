import React from 'react';
import './nav.css';
import Darkmode from "../../images/icons/darkmode.png";
import Lightmode from "../../images/icons/lightmode.png";
import ProfileLight from "../../images/icons/profile-light.png";
import ProfileDark from "../../images/icons/profile-dark.png";
import ProfileLoggedIn from "../../images/icons/profile-loggedin.png";

import { ModalProvider } from "../modal/ModalContext/ModalContext";
import Login from '../modal/login/login'

if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  };

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
    setSwitchImg();
 }

 function setSwitchImg() {
	if (localStorage.getItem('theme') === 'theme-light') {
        document.getElementById("switch").src = Darkmode;
        document.getElementById("switch").title = "Switch to Dark Mode";
        document.getElementById("switch").alt = "Image courtesy of Alice Design from The Noun Project";

        document.getElementById("accountModalBtn").src = ProfileDark;
        document.getElementById("accountModalBtn").title = "Login";
        document.getElementById("accountModalBtn").alt = "Image courtesy of Alice Design from The Noun Project";
	} else {
        document.getElementById("switch").src = Lightmode;
        document.getElementById("switch").title = "Switch to Light Mode";
        document.getElementById("switch").alt = "Image courtesy of Tawny Whatmore from The Noun Project";

        document.getElementById("accountModalBtn").src = ProfileLight;
        document.getElementById("accountModalBtn").title = "Login";
        document.getElementById("accountModalBtn").alt = "Image courtesy of Alice Design from The Noun Project";
	}
}



const Nav = () => (
    <nav>
    <img src={Darkmode} alt="theme switcher" id="switch" onClick={toggleTheme}></img>
    <ModalProvider><Login /></ModalProvider>
    </nav>
);

export default Nav;