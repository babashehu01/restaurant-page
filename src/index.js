// index.js
import { createHome, createMenu, createContact } from "./js/modules";
import "./styles/main-style.css";

// // Create home by default
createHome();
const nav = document.querySelector('header nav');
nav.addEventListener("click", (e) => {
    if (e.target.id === 'home') {
        createHome();
    } else if (e.target.id === 'menu') {
        createMenu();
    } else if (e.target.id === 'contact') {
        createContact();
    }
});