# Astro Starter Kit: Basics

```
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Directivas del cliente

De forma predeterminada, un componente de framework no está hidratado en el cliente. Si no se proporciona la directiva client:\*, tu HTML se representa en la página sin JavaScript.

Estos son los valores que puede tener la directiva client:

**client:load**: Cargue e hidrate el JavaScript del componente inmediatamente al cargar la página.
**client:idle**: Cargue e hidrate el componente JavaScript una vez que la página haya terminado con su carga inicial
**client:visibl**e: Cargue e hidrate el JavaScript del componente una vez que haya ingresado al viewport del usuario. Esto utiliza un IntersectionObserver internamente para realizar un seguimiento de la visibilidad.
**client:media**: client:media={string} carga e hidrata el componente JavaScript una vez que se cumple una determinada media query de CSS.
**client:only**: ¡Debes pasar el framework correcto al componente! Debido a que Astro no ejecuta el componente durante su compilación/en el servidor, Astro no sabe qué framework usa el componente a menos que se lo indiques explícitamente.

```html
<SomeReactComponent client:only="react" />
```
