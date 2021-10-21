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
                <li><a class="/index.html#notes" href="/blog/">Notes</a></li>
                <li><a class="" href="/work/">Java</a></li>
                <li><a class="" href="/about/">About</a></li>
            </ul>
        </nav>
        <header>
        </header>
        <script type="text/javascript">
            window.addEventListener("scroll",function()
            {
                var header=document.querySelector("header");
                header.classList.toggle("sticky", window.scrollY > 0 );
            }
            )
        </script>
        `
    }
}
customElements.define('my-header',MyHeader);