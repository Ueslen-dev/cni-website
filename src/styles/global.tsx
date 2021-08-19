import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --white-color: #ffff;
  --primary-color: #06092b;
  --grey-color: #716E6E;
  --blue-color: #246EBF;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
html,body,#__next{
  height: 100%;
}
body{
  font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
img{
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    line-height: normal;
  }
  .title{
    font-size: 3rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 10px;
  }

  .subTitle {
    font-size: 2rem;
    color: var(--grey-color);
  }
  .paragraph{
    font-size: 1.5rem;
    color: var(--grey-color);
    font-weight: 500;
  }
`;

export default GlobalStyles;
