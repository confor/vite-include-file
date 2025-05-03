# vite-include-file

A **Vite plugin** that lets you include external files into your HTML using a custom `<include>` tag. Inspired by classic [Server Side Includes](https://en.wikipedia.org/wiki/Server_Side_Includes).

Ideal for reusing HTML snippets such as headers, footers, or navigation menus across multiple pages.

## Features

* Replaces tags with the contents of external files at build time
* Supports `<include file="..." />` syntax
* Inspired by old SSI syntax: `<!-- #include file="..." -->`

## Installation

Available on this repository.

```bash
npm install --save-dev git+https://github.com/confor/vite-include-file
```

## Usage

Add the plugin to your `vite.config.js`:

```js
import includeFile from 'vite-include-file';

export default defineConfig({
  plugins: [
    includeFile(),
  ],
})
```

## Example

Assume you have a common header file at `partials/header.html`:

```html
<!-- partials/header.html -->
<header>
  <h1>My Website</h1>
  <nav><ul>...</ul></nav>
</header>
```

You can now include it in your `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <title>Example</title>
</head>
<body>
  <include file="partials/header.html" />

  <main>
    <h2>Welcome to my example site</h2>
  </main>
</body>
</html>
```

This plugin will replace `<include>` with the full content of `partials/header.html`.

## Details

This plugin matches all occurrences of:

```html
<include file="example.html" />
```

and replaces them with the contents of the specified file. It explicitly runs before other Vite plugins (`enforce: 'pre'`).

## Notes

* No checks are made to verify the file is HTML.
* The included file can be any readable file, including sensitive ones.
* File paths are resolved relative to where Vite is run.
* If a file can’t be read, the tag is left unchanged.

## License

MIT
