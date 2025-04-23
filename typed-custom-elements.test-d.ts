import type { CustomElement, CustomElementConstructor, CustomElementRegistry } from "./typed-custom-elements.js"

import { expectAssignable, expectType } from "tsd"

type CustomElementAttributeChangedCallback = NonNullable<CustomElement["attributeChangedCallback"]>
type CustomElementAttributeChangedParameters = Parameters<CustomElementAttributeChangedCallback>

// #region CustomElement

class CustomElementTest extends HTMLElement implements CustomElement {
	static formAssociated = true
	static observedAttributes = ["name"]

	attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
		expectType<CustomElementAttributeChangedParameters[0]>(name)
		expectType<CustomElementAttributeChangedParameters[1]>(oldValue)
		expectType<CustomElementAttributeChangedParameters[2]>(newValue)
	}
}

expectAssignable<CustomElement>(new CustomElementTest())

expectType<boolean>(CustomElementTest.formAssociated)
expectType<string[]>(CustomElementTest.observedAttributes)
expectType<CustomElementAttributeChangedCallback>(CustomElementTest.prototype.attributeChangedCallback)
expectType<CustomElementTest>(new CustomElementTest())

// #endregion

// #region CustomElementConstructor

const CustomElementConstructorTest: CustomElementConstructor = class extends HTMLElement {
	static formAssociated = true
	static observedAttributes = ["name"]

	attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
		expectType<CustomElementAttributeChangedParameters[0]>(name)
		expectType<CustomElementAttributeChangedParameters[1]>(oldValue)
		expectType<CustomElementAttributeChangedParameters[2]>(newValue)
	}
}

expectAssignable<CustomElement>(new CustomElementConstructorTest())
expectAssignable<HTMLElement>(new CustomElementConstructorTest())

expectType<boolean | undefined>(CustomElementConstructorTest.formAssociated)
expectType<string[] | undefined>(CustomElementConstructorTest.observedAttributes)
expectType<CustomElementAttributeChangedCallback | undefined>(new CustomElementConstructorTest().attributeChangedCallback)
expectType<HTMLElement & CustomElement>(new CustomElementConstructorTest())

// #endregion

// #region CustomElementRegistry

declare const customElements: CustomElementRegistry

expectType<CustomElementRegistry>(customElements)

// ## endregion
