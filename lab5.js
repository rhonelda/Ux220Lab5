class centreHtml extends HTMLElement{
 connectedCallback(){
    This.innerHtml=`<div style="text-align:center">${this.innerHtml}</div`;
 }
}

customElements.define("x-center, centerHtml");


class blueHtml extends HTMLElement{
 connectedCallback(){
    This.innerHtml=`<div style="color:blue">${this.innerHtml}</div`;
 }
}

customElements.define("x-blue, blue.html");