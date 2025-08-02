// contact.js
import "../styles/contact-style.css";

export function createContact() {
    // Create elements/get content
    const content = document.querySelector("#content");
    const h1 = document.createElement('h1');
    const form = document.createElement('form');
    const nameLebel = document.createElement('lebel');
    const nameInput = document.createElement('input');
    const messageLebel = document.createElement('lebel');
    const messageInput = document.createElement('textarea');
    const submitButton = document.createElement('button');

    content.textContent = "";
    content.className = 'contact';
    h1.textContent = "Contact Us";
    nameLebel.textContent = "Name";
    nameLebel.for = "name";
    nameInput.type = "text";
    nameInput.id = "name";
    messageLebel.textContent = "Message";
    messageLebel.for = "message";
    messageInput.placeholder = "I will like to order 50 bottles for my wedding on...";
    messageInput.id = "message";
    submitButton.textContent = "Submit";
    submitButton.type = "submit";
    
    form.append(nameLebel, nameInput, messageLebel, messageInput, submitButton);
    content.append(h1, form);
}
