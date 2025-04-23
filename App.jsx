import React from 'react'
import Home from './components/Home';
import './index.css'

const App = () => {
  return (
    <div className='app-container' aria-label="AI Image Enhancer">
      
      <div className="hero">
  <h1>AI Image Enhancer</h1>
  <p>Upload your image and let AI enhance it for you!✨</p>
</div>

      <Home />
      <div className='footer'>
        <p>Image Enhancer</p>
        <p>By Aniket Mishra 🤍</p>
      </div>
    </div>
  )
}
export default App