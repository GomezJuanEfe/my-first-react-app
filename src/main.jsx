import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import imgBG from './assets/scarecrow.png'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <App imgSrc={imgBG}/>
  </>,
)