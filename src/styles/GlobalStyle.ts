import { createGlobalStyle } from 'styled-components';
import { Theme } from './Theme';

export default createGlobalStyle`

  * {
    background-color: ${Theme.backgroundColor};
    color: ${Theme.primaryColor};
    text-decoration: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  span,
  p,
  a,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
    font-size: ${Theme.normalFontSize}
    font-family: 'Roboto', monospace;
    list-style: none;
    text-decoration: none;

  }

  a {
    color: ${Theme.LinkColor};
  }

  h1 {
    font-size: ${Theme.H1FontSize};
    font-weight: ${Theme.H1FontWeight};
  }

  h2 {
    font-size: ${Theme.H2FontSize};
    font-weight: ${Theme.H2FontWeight};
  }

  h3 {
    font-size: ${Theme.H3FontSize};
    font-weight: ${Theme.H3FontWeight};
  }

  img {
    max-width: 100%;
    display: block;
  }


  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;
