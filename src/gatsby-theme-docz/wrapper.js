import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const footerStyle = {
    height: '3.5rem',
    borderTop: '1px solid var(--theme-ui-colors-border,#CED4DE66)',
    fontSize: '1rem',
    lineHeight: '3.5rem',
    textAlign: 'center',
}

const linkStyle = {
    color: 'currentColor',
    textDecoration: 'none',
}

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>掘金 - </title>
        <link rel="icon"
            type="image/png"
            href="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png"
        />
    </Helmet>
    {children}
    <footer style={footerStyle}>
        &copy;2022 <a href="https://juejin.cn" rel="noreferrer" target="_blank" style={linkStyle}>稀土掘金</a>
    </footer>
</React.Fragment>
export default Wrapper