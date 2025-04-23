import type { CustomElementConstructor } from "./CustomElementConstructor.d.ts"

/** Provides methods for registering custom elements and querying registered elements. [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry) */
export declare class CustomElementRegistry {
	/** Adds a definition for a custom element to the custom element registry. [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/define) */
	define(name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions): void

	/** Returns the constructor for a previously-defined custom element. [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/get) */
	get(name: string): CustomElementConstructor | undefined

	/** Returns the name for a previously-defined custom element. [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/getName) */
	getName(constructor: CustomElementConstructor): string | null

	/** Upgrades all shadow-containing custom elements in the given root. [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/upgrade) */
	upgrade(root: Node): void

	/** Returns a Promise that resolves when the named element is defined. [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/whenDefined) */
	whenDefined(name: string): Promise<CustomElementConstructor>
}
