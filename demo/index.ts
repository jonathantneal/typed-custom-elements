import type { CustomElement } from "typed-custom-elements"

class MyElement extends HTMLElement implements CustomElement {
	static formAssociated = true
	static observedAttributes = ["name"]

	attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
		console.log("Attribute changed:", { name, oldValue, newValue })

		this.textContent = `Hello, ${newValue}!`
	}
}

customElements.define("my-element", MyElement)
