<p align="center"><a href="https://github.com/jhuix-js/imark" target="_blank" rel="noopener noreferrer"><img width="128" src="https://raw.githubusercontent.com/jhuix-js/imark/refs/heads/main/logo.png" alt="imark logo"></a></p>

<h1 align="center">iMark</h1>

[iMark](https://github.com/jhuix-js/imark) is a javascript's lib that make markdown to html with some extensions features(include diagrams of abcjs, echarts, mermaid, plantuml, railroad, wavedrom, katex, gird tables, gfm extended tables etc.).


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

#### `remark` (RemarkSetting)

    type RemarkSetting = KatexDelimiters | GfmOptions | EmojiOptions

##### EmojiOptions

  The options of parse emoji of markdown.

    interface RemarkEmojiOptions {
      accessible?: boolean;
      padSpaceAfter?: boolean;
      emoticon?: boolean;
    }

* `accessible` (boolean, default: false)

  Setting to `true` makes the converted emoji text accessible with `role` and `aria-label` attributes. Each emoji 
  text is wrapped with `<span>` element. The `role` and `aria-label` attribute are not allowed by default. Please 
  add them to the sanitization schema used by remark's HTML transformer. The default sanitization schema is exported 
  from [rehype-sanitize](https://www.npmjs.com/package/rehype-sanitize) package. Default value is `false`.

* `padSpaceAfter` (boolean, default: false)

  Setting to `true` means that an extra whitespace is added after emoji.
  This is useful when browser handle emojis with half character length and following character is hidden.
  Default value is `false`.

* `emoticon` (boolean, default: false)

  Setting to `true` means that [emoticon](https://www.npmjs.com/package/emoticon) shortcodes are supported (e.g. :-)
  will be replaced by 😃). Default value is `false`.


##### GfmOptions

  The options of parse gfm content of markdown.

    interface GfmOptions {
      singleTilde?: boolean
      tableHeadless?: boolean
      colspanWithEmpty?: boolean
    }

* `singleTilde` (boolean, default: true)

  Whether to support strikethrough with a single tilde. Single tildes work on github.com, but are technically prohibited by the GFM spec. Default value is `true`.

* `tableHeadless` (boolean, default: true)

  Whether to support headless with a headless table. Default value is `true`.

* `colspanWithEmpty` (boolean, default: true)

  Whether to merge cell with the right empty cell which contains no spaces (||). It will be parsed as an empty token type ('tableColspanLeftMarker'). Default value is `true`.

##### KatexDelimiters

  This is a list of delimiters to look for katex math, processed in the same order as the list.

    interface KatexDelimiter {
      left: string
      right: string
      display?: boolean
      asciimath?: boolean
    }
    interface MathDelimiters {
      display?: KatexDelimiter[]
      inline?: KatexDelimiter[]
    }
    interface KatexDelimiters {
      texmath?: MathDelimiters
      asciimath?: MathDelimiters
    }

  Default options is described below:

    const defDelimiters = {
      texmath: {
        display: [
          { left: '$$', right: '$$' },
          { left: '\\[', right: '\\]' },
          { left: '\\begin{equation}', right: '\\end{equation}' },
          { left: '\\begin{align}', right: '\\end{align}' },
          { left: '\\begin{alignat}', right: '\\end{alignat}' },
          { left: '\\begin{gather}', right: '\\end{gather}' },
          { left: '\\begin{CD}', right: '\\end{CD}' }
        ],
        inline: [{ left: '\\(', right: '\\)' }]
      },
      asciimath: {
        display: [{ left: '@@', right: '@@' }],
        inline: [{ left: '\\$', right: '\\$' }]
      }
    }

* `left` (string)

  A string which starts the math expression (i.e. the left delimiter).

* `right` (string)

  A string which ends the math expression (i.e. the right delimiter).

* `display` (boolean)

  Whether the math in the expression should be rendered in display or inline mode.

* `asciimath` (boolean)

  Whether the math be rendered by asciimath or katex math.

* `display` (KatexDelimiter[])

  The list of delimiters that the expression should be rendered in display mode.

* `inline` (KatexDelimiter[])

  The list of delimiters that the expression should be rendered in inline mode.

* `texmath` (MathDelimiters)

  The list of delimiters for katex math.

* `asciimath` (MathDelimiters)

  The list of delimiters for asciimath.

#### `rehype` (RehypeOptions)

  The configuration for remark rehype.

    interface RehypeOptions extends rehypeOptons {
      outFormat?: boolean;
    }

* `outFormat` (boolean)

  Whether format output after remark rehype.

* Other options (rehypeOptons)

  See [rehypeOptons](https://github.com/remarkjs/remark-rehype#options) from [remark-rehype](https://github.com/remarkjs/remark-rehype)

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

* `katex` (KatexOptions)

  See [Options](https://katex.org/docs/options) from [KaTeX](https://github.com/KaTeX/KaTeX)

* `toc` (TocOptions)

  The configuration for render table of content.

      interface TocOptions {
        heading?: string
        title?: string
        compatible?: boolean
      }

  - `heading` (string)

    The heading regex expression.

  - `title` (string)

    The title of table of content.

  - `compatible` (boolean)

    Whether compatible to parse regular expression from the main text (`p` element of html).

* `mermaid` (MermaidConfig)

  See [Options](https://mermaid.js.org/config/setup/mermaid/interfaces/MermaidConfig.html) from [mermaid](https://github.com/mermaid-js/mermaid)

* `echarts` (EChartsInitOpts)

  See [Options](https://echarts.apache.org/zh/api.html#echarts) from [EChart](https://github.com/apache/echarts)

* `abc` (AbcVisualParams)

  See [Options](https://docs.abcjs.net/visual/render-abc-options.html) from [abcjs](https://github.com/paulrosen/abcjs)

* `uml` (UmlOptions)

   The configuration for render plantuml.

      interface UmlOptions {
        umlWebSite?: string
        imageFormat?: string
        svgRender?: (id: string, classname: string, code: string, index: Number) => Promise<string>
      }

    - `umlWebSite` (string)

      Plantuml website

    - `imageFormat` (string)

      Render image format string. Includes svg,png,jpg etc.

    - `svgRender` ((id: string, classname: string, code: string, index: Number) => Promise<string>)

      Render for svg.

* `wavedrom` (WaveDromOptions)

  The configuration for render wavedrom.

      interface WaveDromOptions {
        WaveDromSkin: 'default' | 'dark' | 'lowkey' | 'narrow' | 'narrower' | 'narrowerer'
      }

    - `WaveDromSkin` ('default' | 'dark' | 'lowkey' | 'narrow' | 'narrower' | 'narrowerer')

      The skin of render wave drom. (default value: `default`)

* `vega` (VegaEmbedOptions)

  See [Options](https://github.com/vega/vega-embed#options) from [vega-embed](https://github.com/vega/vega-embed)


## API

Global `imark` object, which can be accessed after including imark.js in script tag or through require('imark') in AMD environment.


* imark.use

      (vaule: Schema | IMarkPlugins) => IMark

  Use sanitize options or imark plugins. Return imark instance.

  - `vaule` (Schema | IMarkPlugins)

    Sanitize schema or imark plugins.

    `Schema` is sanitize schema, see [Schema](https://github.com/syntax-tree/hast-util-sanitize#schema) from [hast-util-sanitize](https://github.com/syntax-tree/hast-util-sanitize).

    `IMarkPlugins` is imark plugins, refer to the following format:

        type Render = ((tree: HTMLElement, option?: RenderOption) => void) | (() => void)

        type Handlers = Partial<Record<string, Handler>>

        interface IMarkPlugin {
          /**
          * Setting for parse markdown
          */
          setting?: ((s: GfmOptions) => void) | ((s: KatexDelimiters) => void) | ((s: EmojiOptions) => void)
          /**
          * Customize markdown parse by remark plugins:
          *
          * https://github.com/remarkjs/remark/blob/main/doc/plugins.md
          */
          remark?: (p: Processor) => Processor
          /**
          * Rehype handlers for remark rehype
          */
          handlers?: Handlers
          /**
          * Customize HTML parse by rehype plugins:
          *
          * https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
          */
          rehype?: (p: Processor) => Processor
          /**
          * Render for the element, triggers when element props changes
          */
          render?: Render
        }

        type IMarkPlugins = Record<string, IMarkPlugin>

* imark.setting

      (name: string, remarkOptions: RemarkSetting) => IMark

  Set the necessary settings for parsing markdown. Return imark instance.

  - `name` (string)

    IMark plugin name.

  - `remarkOptions` (RemarkSetting)

    The configuration required for the imark plugin corresponding to the name.
    See [RemarkSetting](#remark-remarksetting).

* imark.parse

      (md: string, remarkOptions?: RemarkSetting, rehypeOptions?: RehypeOptions) => Promise<RenderContext>

  - `md` (string)

    Text of markdown.

  - `remarkOptions` (RemarkSetting)

    The configuration required for parse markdown.
    See [RemarkSetting](#remark-remarksetting).

  - `rehypeOptions` (RehypeOptions)

    The configuration required for remark rehype.
    See [RehypeOptions](#rehype-rehypeoptions).

  - Result (Promise<RenderContext>)

    `RenderContext` object definition refer to the following format:

      interface RenderContext {
        /**
        * The html string of the render
        */
        html: string
        /**
        * Virtual file format used in [unified](https://unifiedjs.com/)
        *
        * Get the HTML output by calling `vfile.toString()`
        */
        renders?: Record<string, Render>
      }

* imark.render

      render(md: string, root?: HTMLElement, imarkOptions?: IMarkOptions)

  - `md` (string)

    Text of markdown.

  - `root` (HTMLElement)

    The html element for render.

  - `imarkOptions` (IMarkOptions)

    The configuration required where parse markdown or remark rehype or render html.
    See [IMarkOptions](#options)
