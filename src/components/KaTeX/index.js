/** @jsx jsx */
import { jsx } from 'theme-ui'
import katex from 'katex'

export const KaTeX = ({children, ...props}) => {
  const {macros, ...opts} = props

  if(macros) {
    opts.macros = (new Function(`return ${macros.replace(/\\/mg, String.raw`\\`)}`))();
  }
  const code = katex.renderToString(children, {
    ...opts,
    throwOnError: false
  })

  return (
    <span className="katex" {...props} dangerouslySetInnerHTML={{__html: code}}/>
  )
}