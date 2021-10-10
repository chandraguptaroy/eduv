class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
        <header>
            <a href="index.html"><img src="#">
            </a>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">Notes</a></li>
                    <li><a href="index.html">About</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}
customElements.define('my-header',MyHeader);