# iMark's API

Global `imark` object, which can be accessed after including imark.js in script tag or through require('imark') in AMD environment.

## imark.use

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

## imark.setting

    (name: string, remarkOptions: RemarkSetting) => IMark

Set the necessary settings for parsing markdown. Return imark instance.

- `name` (string)

  IMark plugin name.

- `remarkOptions` (RemarkSetting)

  The configuration required for the imark plugin corresponding to the name.
  See [RemarkSetting](https://github.com/jhuix-js/imark/blob/main/docs/options.md#remark-remarksetting).

## imark.parse

    (md: string, remarkOptions?: RemarkSetting, rehypeOptions?: RehypeOptions) => Promise<RenderContext>

- `md` (string)

  Text of markdown.

- `remarkOptions` (RemarkSetting)

  The configuration required for parse markdown.
  See [RemarkSetting](https://github.com/jhuix-js/imark/blob/main/docs/options.md#remark-remarksetting).

- `rehypeOptions` (RehypeOptions)

  The configuration required for remark rehype.
  See [RehypeOptions](https://github.com/jhuix-js/imark/blob/main/docs/options.md#rehype-rehypeoptions).

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

## imark.render

    render(md: string, root?: HTMLElement, imarkOptions?: IMarkOptions)

- `md` (string)

  Text of markdown.

- `root` (HTMLElement)

  The html element for render.

- `imarkOptions` (IMarkOptions)

  The configuration required where parse markdown or remark rehype or render html.
  See [iMark's Options](https://github.com/jhuix-js/imark/blob/main/docs/options.md)
