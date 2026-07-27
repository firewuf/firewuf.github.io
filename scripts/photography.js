const Directions = Object.freeze({LEFT: "left", RIGHT: "right"})

class MemoryGallery extends HTMLElement {
    picNum = 1

    insertMemLeft(pic) {
        let pn = this.picNum++

        return `
            <style>
                #element_${pn}-l {
                    text-align: right;
                    vertical-align: center;
                }
                #element_${pn}-r {
                    text-align: left;
                    vertical-align: center;
                }
            </style>

            <tr>
                <td id="element_${pn}-l" class="mem_element"><img id="pic_${pn}" class="mem_pic" src="${pic}"></td>
                <td id="element_${pn}-r" class="mem_element"><p id="desc_${pn}"></p></td>
            </tr>
        `
    }

    insertMemRight(pic) {
        let pn = this.picNum++

        return `
            <style>
                #element_${pn}-l {
                    text-align: right;
                    vertical-align: center;
                }
                #element_${pn}-r {
                    text-align: left;
                    vertical-align: center;
                }
            </style>

            <tr>
                <td id="element_${pn}-l" class="mem_element"><p id="desc_${pn}"></p></td>
                <td id="element_${pn}-r" class="mem_element"><img id="pic_${pn}" class="mem_pic" src="${pic}"></td>
            </tr>
        `
    }

    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = `
            <link rel="stylesheet" href="/styles/photography.css">
            
            <table id="mem_gal_table">
                
            </table>
        `
    }

    addMemory(listOfPics) {
        for(let p of listOfPics){
            this.shadowRoot.getElementById("mem_gal_table").innerHTML +=
                (this.picNum % 2 === 1) ? this.insertMemLeft(p) : this.insertMemRight(p)

        }
    }

    addDescription(memNum, desc) {
        this.shadowRoot.getElementById(`desc_${memNum}`).innerHTML = desc
    }
}
customElements.define("memory-gallery", MemoryGallery)