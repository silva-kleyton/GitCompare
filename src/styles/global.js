import { injectGlobal } from "styled-components";

import "font-awesome/css/font-awesome.css";

injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: boder-box;
  outline:0;
}

body {
  background: #808080;
  text-rendering: optimizeLegibiity !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: sans-serif;
}
`;
