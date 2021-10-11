class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <nav>
            <div class="logo"><a class="nav-title" href="/">EDUCATION VALLEY</a></div>
            <input type="checkbox" id="click">
            <label for="click" class="menubtn">
                <i class="fas fa-bars"></i>
            </label>
            <ul>
                <li><a class="" href="/blog/">BLOG</a></li>
                <li><a class="" href="/work/">WORK</a></li>
                <li><a class="" href="/about/">ABOUT</a></li>
            </ul>
        </nav>
        <header>
        </header> 
        `
    }
}
customElements.define('my-header',MyHeader);