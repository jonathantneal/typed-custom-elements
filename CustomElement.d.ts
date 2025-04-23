/** Base class for a custom element. */
export declare class CustomElement extends HTMLElement {
	/** List of attributes to observe for changes, invoking `attributeChangedCallback`. */
	static observedAttributes?: string[]

	/** Indicates whether the custom element participates in form submission. */
	static formAssociated?: boolean

	/** Called when one of the element's observed attributes changes. */
	attributeChangedCallback?(name: string, oldValue: string | null, newValue: string | null): void

	/** Called when the element is added to a document. */
	connectedCallback?(): void

	/** Called when the element is removed from a document. */
	disconnectedCallback?(): void

	/** Called when the element is associated or disassociated with a form. */
	formAssociatedCallback?(form: HTMLFormElement | null): void

	/** Called when the disabled state of the element changes. */
	formDisabledCallback?(isDisabled: boolean): void

	/** Called when the associated form is reset. */
	formResetCallback?(): void

	/** Called when the browser automatically fills out the element. */
	formStateRestoreCallback?(state: string | File | FormData, reason: "autocomplete" | "restore"): void
}
