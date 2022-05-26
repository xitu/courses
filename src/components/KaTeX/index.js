/** @jsx jsx */
import { jsx } from 'theme-ui'
import katex from 'katex'

function createMarkup(__html) {
  return {__html}
}


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
    <span className="katex" {...props} dangerouslySetInnerHTML={createMarkup(code)}/>
  )
}