
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  line-height: 3.5rem;
  margin: -.8rem 0 1rem 0;
  ::before {
    content: '<';
    margin-right: 8px;
    opacity: 0.5;
  }
  ::after {
    content: '/>';
    opacity: 0.5;
  }
`;

export const Link = styled.a`
  display: inline-block;
  margin-right: 10px;
  color: currentColor;
  text-decoration: none;
`;