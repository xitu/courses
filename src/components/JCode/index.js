/** @jsx jsx */
import { useEffect, useRef } from 'react';
import { jsx } from 'theme-ui'

export const JCode = ({codeId, height, lazy}) => {
  const source = `https://code.juejin.cn/pen/${codeId}`;
  const iframeStyle = {
    width: '100%',
    height: `${height || 420}px`,
    border: 'solid 1px #ccc',
    margin: '16px 0 32px 0',
  };

  const ref = useRef();
  useEffect(() => {
    if(lazy && ref.current) {
      const width = document.documentElement.offsetWidth;
      if( !ref.current.childNodes[0] && width > 767) {
        const iframe = document.createElement('iframe');
        iframe.style = `width:100%;height:${height || 420}px;border:solid 1px #ccc;margin:16px 0 32px 0;`;
        ref.current.appendChild(iframe);
        iframe.src = source;
        ref.current.className = "lazy show";
      }
    }
  });

  if(lazy) {
    return (
      <div ref={ref} className="lazy"></div>
    );
  }

  return (
    <iframe ref={ref}
      src = {source}
      scrolling="no"
      style={iframeStyle}
      title="jcode"
    ></iframe>
  );
}
