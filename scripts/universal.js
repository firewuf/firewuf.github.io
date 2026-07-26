class NavHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = `
            <link rel="stylesheet" href="/styles/universal.css">

            <div id="nav_header">
                <h1>
                    Kyle's Website
                </h1>
        
                <a href="/pages/home.html"><h4>Home</h4></a>
                <a href="/pages/about_me.html"><h4>About Me</h4></a>
                <a href="/pages/photography.html"><h4>Photography</h4></a>
            </div>
        `
    }
}
customElements.define("nav-header", NavHeader)

class NavFooter extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = `
            <link rel="stylesheet" href="/styles/universal.css">
            
            <div id="nav_footer">
                <h6><slot></slot> - Kyle's Website</h6>
            </div>
        `
    }
}
customElements.define("nav-footer", NavFooter)