import { useState } from 'react'
import NavBar from './NavBar'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
       <div className='main-container'>
          <div className='left-container'>
            <img className='desktop-image' src="/assets/images/image-web-3-desktop.jpg" alt="image-web-3-desktop" />
            <img className='mobile-image' src="/assets/images/image-web-3-mobile.jpg" alt="image-web-3-desktop" />

            <div className='sub-left-container'>
            <div className='first-sub-left-container'>
              <h2>The Bright Future of web 3.0?</h2>
            </div>
            <div className='inner-left-right-container'>
              <p>
                We die into the next evolution of the web that 
                claims to put the power of the platfoms back into
                the hands of the people, But is it really fulfilling promises?
              </p>
              <button>Read more</button>
            </div>
            </div>
          </div>
          <div className='right-container'>
            <div className='inner-right-container'>
            <h1>New</h1>
            <p>Hygrogen vs Electric Cars</p>
            <span >Will hygrogen-fueled cars ever catch up to EVs?</span>
            <hr className='line' />
            <p>The Downsides of AI Artistry</p>
            <span>What are the possible adverse effects of on-demand AI image generation?</span>
            <hr className='line'/>
            <p>Is VS Funding Drying Up?</p>
            <span>Privae funding by VC firms is down 50% YOY. We take a look at what that means.</span>
          </div>
          </div>
       </div>
       <div className='final-container'>
        <div className='inner-final-container'>
            <img src="/assets/images/image-retro-pcs.jpg" alt="image-retro-pcs" />
          <div className='final-text'>
            <div className='inner-final-text'>
            <h2 style={{color: 'var(--soft-red)', fontSize: '2em',marginBottom: '-0.2em'}}>01</h2>
            <p className='final-container-sub-header' style={{fontSize:'1.1em', fontWeight: '700',marginBottom: '-0.2em'}}>Reviving Retro PCs</p>
            <p className='last-final-text' >What happens when old PCs are given modern upgrades?</p>      
            </div>
            </div>
        </div>
        <div className='inner-final-container'>
            <img src="/assets/images/image-top-laptops.jpg" alt="image-top-laptops" />
          <div className='final-text'>
            <div className='inner-final-text'>
            <h2 style={{color: 'var(--soft-red)', fontSize: '2em', marginBottom: '-0.3em'}}>02</h2>
            <p  className='final-container-sub-header' style={{fontSize:'1.1em', fontWeight: '700',marginBottom: '-0.2em'}}>Top 10 Laptops of 2022</p>
            <p className='last-final-text'>Our best picks for various needs and budgets.</p>
            </div>
          </div>
        </div>
        <div className='inner-final-container'>
            <img src="/assets/images/image-gaming-growth.jpg" alt="image-gaming-growth" />
          <div className='final-text'>
            <div className='inner-final-text'>
            <h2 style={{color: 'var(--soft-red)', fontSize: '2em',marginBottom: '-0.2em'}}>03</h2>
            <p   className='final-container-sub-header' style={{fontSize:'1.1em', fontWeight: '700',marginBottom: '-0.2em'}}>The Growth of Gaming</p>
            <p className='last-final-text'>How the pandemic has sparked fresh opportunities</p>
          </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
