/** @jsx jsx */
import { jsx } from 'theme-ui'
import mermaid from 'mermaid'
import { useEffect, useRef } from 'react'

mermaid.startOnLoad = false
mermaid.parseError = function (err) {
  console.error(err)
}

export const Diagram = ({children, ...props}) => {
  // console.log(mermaid, children)
  const ref = useRef()

  useEffect(() => {
    const options = {
      ...props
      // themeCSS: ".edgePaths path.path {stroke: green}"
    }
    if(!options.themeCSS && options.theme === 'forest') {
      options.themeCSS = '.edgePaths path.path {stroke: green}'
    }
    if(!options.themeCSS && options.theme === 'neutral') {
      options.themeCSS = 'marker path.arrowheadPath {stroke: #666; fill: #666;}'
    }
    if(!options.themeCSS && (!options.theme || options.theme === 'default')) {
      options.themeCSS = '.edgePaths path.path {stroke: currentColor} marker path.arrowheadPath {stroke: currentColor; fill: currentColor;}'
    }
    mermaid.initialize(options)
    mermaid.init(ref.current)
  })

  return (
    <div className="mermaid" {...props} ref={ref}>{children}</div>
  )
}