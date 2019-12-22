import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    @media screen and (min-width: 1200px) {
      width: 1200px;
      margin:auto;
    }
  }

  body, input, button {
    font: 14px Raleway, sans-serif;
  }

  button {
    cursor: pointer;
  }
`
