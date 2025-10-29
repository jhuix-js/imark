# iMark's Options

IMark Options defined be defined as follows:

    interface IMarkOptions {
      remark?: RemarkSetting
      rehype?: RehypeOptions
      render?: RenderOptions
    }

## `remark` (RemarkSetting)

    type RemarkSetting = HeadOptions | KatexDelimiters | GfmOptions | EmojiOptions

### EmojiOptions

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


### GfmOptions

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

### HeadOptions

The heading options.

    interface HeadOptions {
      chapterNumber?: boolean
      defaults?: boolean
      toc?: string
    }

* `chapterNumber` (boolean, default: true)

  Whether show chapter number.(default: `true`).

* `defaults` (boolean, default: true)

  Whether apply defaults of heading id.(default: `true`)

* `toc` (string)

  The heading regex expression of table of contents. 

  (default: `[\\[【]Table[ -]Of[ -]Contents[\\]】]|[\\[【]目录[\\]】]|[\\[【]TOC[\\]】]|\\{\\{TOC\\}\\}`)

### KatexDelimiters

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

## `rehype` (RehypeOptions)

The configuration for remark rehype.

    interface RehypeOptions extends rehypeOptons {
      outFormat?: boolean;
    }

* `outFormat` (boolean)

  Whether format output after remark rehype.

* Other options (rehypeOptons)

  See [rehypeOptons](https://github.com/remarkjs/remark-rehype#options) from [remark-rehype](https://github.com/remarkjs/remark-rehype)

## `render` (RenderOptions)

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

### `katex` (KatexOptions)

  See [Options](https://katex.org/docs/options) from [KaTeX](https://github.com/KaTeX/KaTeX)

### `toc` (TocOptions)

The configuration for render table of content.

    interface TocOptions {
      title?: string
      compatible?: string
    }

- `title` (string)

  The title of table of content.

- `compatible` (string)

  Compatible to heading regex expression from the main text (`p` element of html).

### `mermaid` (MermaidConfig)

  See [Options](https://mermaid.js.org/config/setup/mermaid/interfaces/MermaidConfig.html) from [mermaid](https://github.com/mermaid-js/mermaid)

### `echarts` (EChartsInitOpts)

  See [Options](https://echarts.apache.org/zh/api.html#echarts) from [EChart](https://github.com/apache/echarts)

### `abc` (AbcVisualParams)

  See [Options](https://docs.abcjs.net/visual/render-abc-options.html) from [abcjs](https://github.com/paulrosen/abcjs)

### `uml` (UmlOptions)

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

### `wavedrom` (WaveDromOptions)

The configuration for render wavedrom.

    interface WaveDromOptions {
      WaveDromSkin: 'default' | 'dark' | 'lowkey' | 'narrow' | 'narrower' | 'narrowerer'
    }

- `WaveDromSkin` ('default' | 'dark' | 'lowkey' | 'narrow' | 'narrower' | 'narrowerer')

      The skin of render wave drom. (default value: `default`)

### `vega` (VegaEmbedOptions)

  See [Options](https://github.com/vega/vega-embed#options) from [vega-embed](https://github.com/vega/vega-embed)
