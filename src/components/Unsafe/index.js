/** @jsx jsx */
import { useEffect, useRef } from 'react'
import { jsx } from 'theme-ui'

function createMarkup(__html) {
  return {__html}
}

export const Unsafe = ({children}) => {
  const ref = useRef()

  useEffect(() => {
    ref.current.querySelectorAll('script:not([data-preview])').forEach((el) => {
      const type = el.getAttribute('type');
      if(!type || type === 'module' || type === 'text/javascript') {
        const b = el.nextElementSibling;
        const parent = el.parentElement;
    
        const code = el.textContent;
        // const script = el.cloneNode(false);
        const script = document.createElement('script');
        script.textContent = code;
        const matched = el.cloneNode(false).outerHTML.match(/<script((?:\s[_\w][_-\w]*="[^"]*")*)>/im);
        if(matched && matched[1]) {
          const kvs = matched[1].trim().split(/\s/);
          kvs.forEach((kv) => {
            const m = kv.match(/^([_\w][_-\w]*)="([^"]*)"$/);
            if(m) {
              script.setAttribute(m[1], m[2] || m[1]);
            }
          });
        }

        if(!script.hasAttribute('async') && !script.hasAttribute('defer')) {
          script.async = false;
        }
        
        el.remove();
        if(b) {
          parent.insertBefore(script, b);
        } else {
          parent.appendChild(script);
        }
      }
    });
  });

  if(typeof children === 'string') {
    return (
      <div ref={ref} dangerouslySetInnerHTML={createMarkup(children)}/>
    )
  } else {
    return <div ref={ref}>{children}</div>
  }
}