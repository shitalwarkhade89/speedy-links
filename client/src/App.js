import React, { useState } from 'react';
import './App.css';
import CopyImage from './copy-icon.png';

function App() {
  const [url, setUrl] = useState('')
  const [slug, setSlug] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  return (
    <>
      <h1 className='text-center'>Speedy Links 🔗</h1>
      <div className='app-container'>
        <div className='link-generation-card'>
          <h2>Link Generation</h2>

          <input type='text'
            placeholder='URL' className='user-input'
            value={url}
            onChange={(e) => { setUrl(e.target.value) }}
          />
          <input type='text'
            placeholder='Slug (Optional)' className='user-input'
            value={slug}
            onChange={(e) => { setSlug(e.target.value) }}
          />
          <div className='short-url-container'>
            <input type='text'
              placeholder='Short url' className='input-short-url'
              value={shortUrl}
              disabled
            />
            <img src={CopyImage} alt='copy' className='cpoy-icon' />
          </div>

          <button type='button' className='btn-generate-link'> Do Magic</button>

        </div>
        <div>
          <h2>All Links</h2>
        </div>
      </div>
    </>
  )
}

export default App;
