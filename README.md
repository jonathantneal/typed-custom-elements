# Typed Custom Elements

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]

**Typed Custom Elements** is a collection of TypeScript types to help you author type-safe Web Components, with proper type checking for custom elements, their constructors, and the custom elements registry.

## Features

- ✅ Typed custom element class definitions
- ✅ Typed static properties and lifecycle methods
- ✅ Typed custom element constructors
- ✅ Type-safe interaction with the Custom Elements Registry
- ✅ Zero dependencies
- ✅ ESM compatible

👉 [Try it now in StackBlitz](https://stackblitz.com/github/jsxtools/typed-custom-elements/tree/main/demo)

## Installation

```shell
npm install typed-custom-elements
```

## Usage

### Basic Custom Elements

```ts
import type { CustomElement } from "typed-custom-elements"

class MyElement extends HTMLElement implements CustomElement {
  // type safety and code completion for static propertes, lifecycle methods, etc.
  static formAssociated = true
  static observedAttributes = ["name"]

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    // type-safe callback handling
  }
}
```

### Custom Element Constructors

```ts
import type { CustomElementConstructor } from "typed-custom-elements"

const MyElementConstructor: CustomElementConstructor = class extends HTMLElement {
  // type safety and code completion for static propertes, lifecycle methods, etc.
}
```

### Custom Elements Registry

```ts
import type { CustomElementRegistry } from "typed-custom-elements"

declare const customElements: CustomElementRegistry

// type-safe custom element registration
customElements.define('my-element', class extends HTMLElement {
  // type safety, code completion, you get the point
})
```

## Why Use Typed Custom Elements?

Working with Web Components in TypeScript often means relying on implicit or loosely typed structures.
This package brings clarity and confidence to your component authoring by enforcing:

- Proper typing for lifecycle callbacks.
- Static property inference (`formAssociated`, `observedAttributes`).
- Safer registration and instantiation via constructors and registries.

## License

This project is licensed under the [MIT No Attribution License](https://opensource.org/license/mit-0).

[npm-img]: https://img.shields.io/npm/v/typed-custom-elements
[npm-url]: https://www.npmjs.com/package/typed-custom-elements
[cli-img]: https://github.com/jsxtools/typed-custom-elements/actions/workflows/check.yml/badge.svg
[cli-url]: https://github.com/jsxtools/typed-custom-elements/actions/workflows/check.yml
