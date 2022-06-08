/** @jsx jsx */
import { jsx } from 'theme-ui'
import katex from 'katex'

export const KaTeX = ({children, ...props}) => {
  const code = katex.renderToString(children, {
    ...props,
    throwOnError: false
  })

  return (
    <span className="katex" {...props} dangerouslySetInnerHTML={{__html: code}}/>
  )
}