/** @jsx jsx */
import { jsx } from 'theme-ui'

export const JCode = (props, ref) => {
  const source = `https://code.juejin.cn/pen/${props.codeId}`;
  const iframeStyle = {
    width: '100%',
    height: `${props.height || 420}px`,
    border: 'solid 1px #ccc',
    margin: '16px 0 32px 0',
  };

  return (
    <iframe src={source}
      scrolling="yes"
      style={iframeStyle}
      title="jcode"
    ></iframe>
  );
}