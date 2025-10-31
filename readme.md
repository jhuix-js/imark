<p align="center"><a href="https://github.com/jhuix-js/imark" target="_blank" rel="noopener noreferrer"><img width="128" src="https://raw.githubusercontent.com/jhuix-js/imark/refs/heads/main/logo.png" alt="imark logo"></a></p>

<h1 align="center">iMark</h1>

[iMark](https://github.com/jhuix-js/imark) is a javascript's lib that make [markdown][docs-markdown] to html with some extensions features(include extensions of abcjs, echarts, mermaid, plantuml, railroad, wavedrom, katex, gird tables, gfm extended tables etc.).

> If you think the imark library can help you or also hope to encourage the author, click on the top right corner to give me a [Star](https://github.com/jhuix-js/imark)⭐️.

## Feature highlights

[compliant](#syntax) — 100% to [CommonMark][docs-commonmark], 100% to [GFM][docs-gfm] or MDX with a plugin

[MDAST](#markdown-syntax-tree) — markdown ASTs that inspecting and changing content made easy

[HAST](#html-syntax-tree) — HTML ASTs that inspecting and changing content made easy

### Syntax

Markdown is parsed and serialized according to [CommonMark][docs-commonmark].
Other plugins can add support for syntax extensions.

We use [`micromark`][github-micromark] for our parsing.
See its documentation for more information on markdown,
CommonMark, and extensions.

### MarkDown Syntax tree

The syntax tree used in iMark is [mdast][github-mdast] by [remark-parse][github-remark-parse].
It represents markdown constructs as JSON objects.

This markdown:

```markdown
## Hello *Pluto*!
```

…yields the following tree (positional info remove for brevity):

```js
{
  type: 'heading',
  depth: 2,
  children: [
    {type: 'text', value: 'Hello '},
    {type: 'emphasis', children: [{type: 'text', value: 'Pluto'}]}
    {type: 'text', value: '!'}
  ]
}
```

### HTML Syntax tree

The syntax tree used in iMark is [hast][github-hast] by [remark-rehype][github-remark-rehype].

## Intro

iMark is an ecosystem of plugins that work with [markdown][docs-markdown] as structured data, specifically ASTs (abstract syntax trees). ASTs make it easy for programs to deal with markdown. We call those programs plugins. Plugins inspect and change trees. You can use the many existing plugins or you can make your own.

iMark integrated some packages that contains the following:

* [unified][github-unified]
  — it is the core project that transforms content with ASTs.
* [`remark-parse`][github-remark-parse]
  — plugin to take markdown as input and turn it into the markdown ASTs (**[mdast][github-mdast]**)
* [`remark-rehype`][github-remark-rehype]
  — plugin to turn markdown into the HTML ASTs (**[hast][github-hast]**)
* [`rehype-format`][github-rehype-format]
  — plugin to format a HTML ASTs (**[hast][github-hast]**)
* [`rehype-stringify`][github-remark-stringify]
  — plugin to take a HTML ASTs (**[hast][github-hast]**) and turn it into HTML as output

It supports [CommonMark][docs-commonmark] by default. Non-standard markdown extensions can be enabled with plugins. 
For example, it support for [GFM][docs-gfm] (autolink literals, footnotes, strikethrough, tables, tasklists) in [`@jhuix/remark-gfm`][github-remark-gfm].

Supports extensions features as follows, preview as the document -- [iMark's Features](https://jhuix-js.github.io/imark/index.html):

* [Table](https://jhuix-js.github.io/imark/index.html#1-table)

* [Table Of Contents](https://jhuix-js.github.io/imark/index.html#2-table-of-contents)

* [Footnotes](https://jhuix-js.github.io/imark/index.html#3-footnotes)

* [Container](https://jhuix-js.github.io/imark/index.html#4-container)

* [CSS](https://jhuix-js.github.io/imark/index.html#5-css)

* [Media](https://jhuix-js.github.io/imark/index.html#6-media)

* [LaTex and Ascii math](https://jhuix-js.github.io/imark/index.html#7-latex-math-and-asciimath)

* [Plantuml](https://jhuix-js.github.io/imark/index.html#8-plantuml)

* [Mermaid diagrams](https://jhuix-js.github.io/imark/index.html#9-mermaid)

* [Railroad diagrams](https://jhuix-js.github.io/imark/index.html#10-railroad)

* [WaveDrom diagrams](https://jhuix-js.github.io/imark/index.html#11-wavedrom)

* [ECharts diagrams](https://jhuix-js.github.io/imark/index.html#12-echarts)

* [Vega diagrams](https://jhuix-js.github.io/imark/index.html#13-vega)

* [ABC](https://jhuix-js.github.io/imark/index.html#14-abc)

## Usage

### Installation

1.  Using npm:

        npm install @jhuix/imark

    Note: add --save if you are using npm < 5.0.0

2.  In a browser:

    put the following line into your HTML page \<body>:

        <script src="dist/imark.js"></script>

### Quick Example

#### Browser

Put the following line into your HTML page \<body>:

```html
    <div id="main" class="workspace-container main-toc-row"></div>
    <script type="module">
      import imark from "../dist/imark.js";
      (function(element) {
        window
          .fetch("../docs/imark-features.md")
          .then(function(response) {
            if (response.ok) {
              return response.text();
            }
          })
          .then(function(text) {
            imark.render(text, element, {render:{toc:{title:'大纲',compatible:false}}})
          })
          .catch(function(error) {
            console.log(error);
          });
      })(document.getElementById("main"));
    </script>
```    

### Options

iMark's Options be defined as follows:

    interface IMarkOptions {
        remark?: RemarkSetting
        rehype?: RehypeOptions
        render?: RenderOptions
      }

See [iMark's Options](https://github.com/jhuix-js/imark/blob/main/docs/options.md)

#### `remark` (RemarkSetting)

    type RemarkSetting = HeadOptions | KatexDelimiters | GfmOptions | EmojiOptions

#### `rehype` (RehypeOptions)

  The configuration for remark rehype.

    interface RehypeOptions extends rehypeOptons {
      outFormat?: boolean;
    }

#### `render` (RenderOptions)

  The configuration for render html.

    type RenderOptions = {
      katex: KatexOptions;
      toc: TocOptions;
      mermaid: MermaidConfig;
      echarts: EChartsInitOpts;
      abc: AbcVisualParams;
      uml: UmlOptions;
      wavedrom: WaveDromOptions;
      vega: VegaEmbedOptions;
    }

## API

Global `imark` object, which can be accessed after including imark.js in script tag or through require('imark') in AMD environment.
See [iMark's API](https://github.com/jhuix-js/imark/blob/main/docs/api.md).

* imark.use

      (vaule: Schema | IMarkPlugins) => IMark

  Use sanitize options or imark plugins. Return imark instance.

* imark.setting

      (name: string, remarkOptions: RemarkSetting) => IMark

  Set the necessary settings for parsing markdown. Return imark instance.

* imark.parse

      (md: string, remarkOptions?: RemarkSetting, rehypeOptions?: RehypeOptions) => Promise<RenderContext>

  Parse markdown to html with additional renders.

* imark.render

      render(md: string, root?: HTMLElement, imarkOptions?: IMarkOptions)

  Render markdown to a html element.

## License

[MIT](LICENSE) © 2025 [Jhuix](mailto:jhuix0117@gmail.com) (Hui Jin)

<!-- Definitions -->

[docs-commonmark]: https://commonmark.org/

[docs-gfm]: https://github.github.com/gfm/

[docs-markdown]: https://daringfireball.net/projects/markdown

[github-hast]: https://github.com/syntax-tree/hast

[github-mdast]: https://github.com/syntax-tree/mdast

[github-micromark]: https://github.com/micromark/micromark

[github-rehype]: https://github.com/rehypejs/rehype

[github-remark-gfm]: https://github.com/jhuix-js/remark-gfm

[github-remark-parse]: https://github.com/remarkjs/remark/tree/main/packages/remark-parse

[github-remark-rehype]: https://github.com/remarkjs/remark-rehype

[github-remark-stringify]: https://github.com/rehypejs/rehype

[github-rehype-format]: https://github.com/rehypejs/rehype-format

[github-unified]: https://github.com/unifiedjs/unified
