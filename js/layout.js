const baseTemplate = document.createElement("template");
baseTemplate.innerHTML = `
<slot name="left-pane">Warning: left-pane not included</slot>
<slot name="right-pane">Warning: right-pane not included</slot>`;

const paneTemplate = document.createElement("template");
paneTemplate.innerHTML = `
<slot name="content">Warning: no content included</slot>`;

class PageBase extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "closed" });
        this.style.cssText += "display: flex;height: 100vh;width: 100vw;";

        let clone = baseTemplate.content.cloneNode(true);
        shadow.append(clone);
    }
}

class LeftPane extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "closed" });
        this.style.cssText += "background-color: black;flex: 1;text-align: center;padding: 0px; margin: 0px;";

        let clone = paneTemplate.content.cloneNode(true);
        shadow.append(clone);
    }
}

class RightPane extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "closed" });
        this.style.cssText += "background-image: linear-gradient(160deg, rgb(11, 3, 54) 1%, black 95%);flex: 6;padding: 20px;margin: 0px;";

        let clone = paneTemplate.content.cloneNode(true);
        shadow.append(clone);
    }
}

class LeftNav extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "closed" });

        let nav = document.createElement("div");
        nav.innerHTML = `
<h1>firewuf.io</h1>
<ul style="list-style-type: none;">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../pages/gaming.html">Gaming</a></li>
    <li><a href="../pages/projects.html">Projects</a></li>
    <li><a href="../pages/blog.html">Blog</a></li>
</ul>

<h3>On this page</h3>
<slot name="page-anchor-links">Warning: no anchor links</slot>`;
        shadow.append(nav);
    }
}

customElements.define("page-base", PageBase);
customElements.define("left-pane", LeftPane);
customElements.define("right-pane", RightPane);
customElements.define("left-nav", LeftNav);