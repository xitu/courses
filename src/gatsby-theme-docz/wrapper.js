import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const footerStyle = {
    height: '3.5rem',
    borderTop: '1px solid var(--theme-ui-colors-border,#CED4DE66)',
    fontSize: '1rem',
    lineHeight: '3.5rem',
    textAlign: 'center',
}

const svgStyle = {
    verticalAlign: 'text-bottom',
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
    <main>
        {children}
    </main>
    <footer style={footerStyle}>
        &copy;2022 <a href="https://juejin.cn" rel="noreferrer" target="_blank" style={linkStyle}>稀土掘金</a> <a href="https://github.com/xitu/courses" rel="noreferrer" target="_blank" style={linkStyle} aria-label="GitHub repo"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={svgStyle}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
    </footer>
</React.Fragment>
export default Wrapper