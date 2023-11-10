class centreHtml extends HTMLElement{
 connectedCallback(){
    This.innerHtml=`<div style="text-align:center">${this.innerHtml}</div`;
 }
}

customElements.define("x-center, centerHtml");