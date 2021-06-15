import exampleLibrary from "example-library/exampleLibrary.js";
import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";

export default class ExampleElement extends HTMLElement {
    readonly #shadowRoot = this.attachShadow({ mode: "closed" });

    constructor() {
        super();
        this.#shadowRoot.innerHTML = `
            <p>${ exampleLibrary() }</p>
            
            <button id="increment">Click Me</button>
            <p id="count"></p>
        `;
        
        const increment = this.#shadowRoot.getElementById("increment")!;
        const count = this.#shadowRoot.getElementById("count")!;

        fromEvent(increment, "click")
            .pipe(scan(count => count + 1, 0))
            .forEach(n => {
                count.textContent = String(n);
            });
    }
}
