import exampleLibrary from "example-library/exampleLibrary.js";

export default class ExampleElement extends HTMLElement {
    readonly #shadowRoot = this.attachShadow({ mode: "closed" });

    constructor() {
        super();
        this.#shadowRoot.innerHTML = `
            <p>${ exampleLibrary() }</p>
            
            <button id="increaseCount">Click Me</button>
            <p id="count"></p>
        `;
        
        const ticks = this.#shadowRoot.getElementById("ticks") as HTMLElement;


    }
}
