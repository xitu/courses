/** @jsx jsx */
import { jsx } from 'theme-ui'
import { theme, useConfig, ComponentsProvider } from 'docz'
import { Styled, ThemeProvider } from 'theme-ui'

import defaultTheme from '~theme'
import components from '~components'
import { useEffect, useState } from 'react'

const Theme = ({ children }) => {
  const config = useConfig()
  const [color, setColor] = useState()
  useEffect(() => {
    if(typeof localStorage !== 'undefined') {
      const colorMode = localStorage.getItem('theme-ui-color-mode')
      setColor(colorMode)
      if(colorMode === color) {
        localStorage.setItem('theme-ui-color-mode-init', colorMode)
      }
    }
  })

  let initMode;

  if(typeof localStorage !== 'undefined') {
    initMode = localStorage.getItem('theme-ui-color-mode-init')
  }
  if(initMode) config.themeConfig.initialColorMode = initMode

  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={components}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  )
}

export default theme(defaultTheme)(Theme)
