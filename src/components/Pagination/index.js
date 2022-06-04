/** @jsx jsx */
import { jsx } from 'theme-ui'

const styles = {
  display: 'flex',
  paddingRight: '16px',
  marginTop: '1rem',
}

const previousStyles = {
  flexGrow: 1,
}

const linkStyles = {
  fontSize: '16px',
  color: 'currentColor',
  textDecoration: 'none',
}

export const Pagination = ({previous, next}) => {
  return (
    <div style={styles} title="pagination">
      <span style={previousStyles}>{previous && <a href={previous.src} style={linkStyles}>{previous.name || '上一页'}</a>}</span>
      <span>{next && <a href={next.src} style={linkStyles}>{next.name || '下一页'}</a>}</span>
    </div>
  );
}