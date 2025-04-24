import type { CustomElement } from "./CustomElement.d.ts"

/** Constructor interface for custom elements. */
export interface CustomElementConstructor<T = CustomElement> {
	/** Creates a new instance of the custom element. */
	new (...args: any[]): HTMLElement & T

	/** List of attributes to observe for changes, invoking `attributeChangedCallback`. */
	observedAttributes?: string[]

	/** Indicates whether the custom element participates in form submission. */
	formAssociated?: boolean
}
