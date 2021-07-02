//Autonomos custom elements
class popupInfo extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const wrapper=document.createElement('span');
        wrapper.setAttribute('class','wrapper');

        const info = document.createElement('span');
        info.setAttribute('class', 'info');
        const text = this.getAttribute('data-text');
        info.textContent = text;

        const image=document.createElement('img');
        const imageURL=image.getAttribute('img');
        image.src=imageURL;
        
        
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'styles.css');


        shadow.appendChild(linkElem);
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
        wrapper.appendChild(image);
        
    }
}
customElements.define('popup-inf0',popupInfo);
