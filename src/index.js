import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/ui component/header'
import Displayimgs from './components/ui component/displayimgs'

import './index.css';


export default function  App() {
     return (<>
        <Header />
        <Displayimgs />
      </>)
}




ReactDOM.render(<App />, document.getElementById("root"));