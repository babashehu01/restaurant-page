import "../styles/menu-style.css";
import manalTigerDrink from "../assets/manal-tiger-drink.jpg";
import manalCoconutDrink from "../assets/manal-coconut-drink.jpg";
import manalDrinks from "../assets/manal-drinks.jpg";

export function createMenu() {
    // Create elements
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const menuDiv = document.createElement('div');
    const img1 = document.createElement('img');
    const div1 = document.createElement('div');
    const div1p1 = document.createElement('p');
    const div1p2 = document.createElement('p');
    const img2 = document.createElement('img');
    const div2 = document.createElement('div');
    const div2p1 = document.createElement('p');
    const div2p2 = document.createElement('p');
    const img3 = document.createElement('img');
    const div3 = document.createElement('div');
    const div3p1 = document.createElement('p');
    const div3p2 = document.createElement('p');
    const img4 = document.createElement('img');
    const div4 = document.createElement('div');
    const div4p1 = document.createElement('p');
    const div4p2 = document.createElement('p');
    const img5 = document.createElement('img');
    const div5 = document.createElement('div');
    const div5p1 = document.createElement('p');
    const div5p2 = document.createElement('p');

    // Add contents and append children
    h1.textContent = "Menu";
    
    img1.src = manalCoconutDrink;
    div1p1.textContent = "Chill Baobab Drink";
    div1p2.textContent = "$1,000";
    div1.append(img1, div1p1, div1p2);

    img2.src = manalTigerDrink;
    div2p1.textContent = "Chill Zobo";
    div2p2.textContent = "$5,000";
    div2.append(img2, div2p1, div2p2);

    img3.src = manalCoconutDrink;
    div3p1.textContent = "Exotic Coconut Drink";
    div3p2.textContent = "$2,000";
    div3.append(img3, div3p1, div3p2);

    img4.src = manalDrinks;
    div4p1.textContent = "Fried Rice with Chicken";
    div4p2.textContent = "$5,000";
    div4.append(img4, div4p1, div4p2);

    img5.src = manalCoconutDrink;
    div5p1.textContent = "Jollof Rice with Chicken";
    div5p2.textContent = "$4,000";
    div5.append(img5, div5p1, div5p2);

    // Append all
    menuDiv.append(div1, div2, div3, div4, div5);
    content.textContent = "";
    content.className = "menu";
    content.appendChild(h1);
    content.append(menuDiv);

}