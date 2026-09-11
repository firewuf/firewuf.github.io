class MemoryGallery extends HTMLElement {
    picNum = 1

    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = `
            <link rel="stylesheet" href="/styles/mobile/universal.css">
            <link rel="stylesheet" href="/styles/mobile/photography.css">
            
            <table id="mem_gal_table">
                
            </table>
        `
    }

    addMemory(listOfPics, desc = null) {
        let pn

        for(let p of listOfPics){
            pn = this.picNum++

            this.shadowRoot.getElementById("mem_gal_table").innerHTML += `
                <tr>
                    <td class="mem_pic_container">
                        <img id="pic_${pn}" class="mem_pic" src="${p}">
                    </td>
                </tr>
            `
        }
    }
}
customElements.define("memory-gallery", MemoryGallery)