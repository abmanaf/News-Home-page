import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <div className='site-logo'>
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <div className='header-items'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Category</a></li>
          </ul>
        </div>
       </div>
       <div className='main-container'>
       <div className='left-container'>
        <img src="/assets/images/image-web-3-desktop.jpg" alt="image-web-3-desktop" />
       </div>
       <div className='right-container'>
        <h2>New</h2>
        <p>Hygrogen vs Electric Cars</p>
        <span>Will hygrogen-fueled cars ever catch up to EVs?</span>
        <hr />
        <p>The Downsides of AI Artistry</p>
        <span>What are the possible adverse effects of on-demand AI image generation?</span>
        <hr />
        <p>Is VS Funding Drying Up?</p>
        <span>Privae funding by VC firms is down 50% YOY. We take a look at what that means.</span>
       </div>
       </div>
    </>
  )
}

export default App 
