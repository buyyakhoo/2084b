class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <ul>
                    <li><a href="/index.html">[Home]</a></li>
                    <li><a href="/blog/index.html">[Blog]</a></li>
                </ul>
            </header>
        `
    }
}
customElements.define('my-header', MyHeader);