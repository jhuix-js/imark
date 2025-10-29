<p align="center"><a href="https://github.com/jhuix-js/imark" target="_blank" rel="noopener noreferrer"><img width="128" src="https://raw.githubusercontent.com/jhuix-js/imark/refs/heads/main/logo.png" alt="imark logo"></a></p>

<h1 align="center">iMark</h1>

[iMark](https://github.com/jhuix-js/imark) is a javascript's lib that make markdown to html with some extensions features(include diagrams of abcjs, echarts, mermaid, plantuml, railroad, wavedrom, katex, gird tables, gfm extended tables etc.).

> If you think the imark library can help you or also hope to encourage the author, click on the top right corner to give me a [Star](https://github.com/jhuix-js/imark)⭐️.

## Support Features

Common Markdown Syntax, refer to the document -- [Markdown Syntax](https://github.com/showdownjs/showdown/wiki/Showdown's-Markdown-syntax).

Extensions features as follows, preview as the document -- [iMark's Features](https://jhuix-js.github.io/imark/index.html):

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

IMark Options defined be defined as follows:

    interface IMarkOptions {
        remark?: RemarkSetting
        rehype?: RehypeOptions
        render?: RenderOptions
      }

See [iMark's Options](https://github.com/jhuix-js/imark/blob/main/docs/options.md)

#### `remark` (RemarkSetting)

    type RemarkSetting = KatexDelimiters | GfmOptions | EmojiOptions

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

