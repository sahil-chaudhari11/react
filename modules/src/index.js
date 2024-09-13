import React from "react";
import ReactDOM from 'react-dom'

import * as hello from './App'
 

ReactDOM.render(
  <>
  <ol>
    <li>{hello.default}</li>
    <li>{hello.address}</li>
     <li>{hello.myname()}</li>

  </ol>
  </>,
  document.getElementById('root')
)