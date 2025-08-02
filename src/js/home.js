// home.js
import "../styles/home-style.css";
import womanInRestaurantImg from "../assets/working-service.jpg";
import manalDrinks from "../assets/manal-drinks.jpg";

export function createHome() {
    // Create/Get elements
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');

    // Add contents
    content.textContent = '';
    content.className = "home";
    h1.textContent = "🌿 Welcome to Manal's Delicacies";
    p1.textContent = "Where Tradition Meets Taste! Indulge in the rich, refreshing flavors of Northern Nigeria with our lovingly crafted tigernut (Kunun Aya), zobo, and baobab drinks. Whether you're on a lunch break, at school, or in the market, our deliciously packaged fried rice and chicken are ready to power your day. At Manal’s, every sip and bite tells a story of freshness, culture, and care.";
    p2.textContent = "We serve fresh, tasty food, soft drinks, and satisfying snacks made with care. Whether you're at work, in school, or on the move, we deliver delicious moments in every bite and sip.";
    img1.src = womanInRestaurantImg;
    img1.alt = "Woman serving in a restaurant.";
    img2.src = manalDrinks;
    img2.alt = "Manal drinks";
    content.append(h1, img1, p1, img2, p2);
}