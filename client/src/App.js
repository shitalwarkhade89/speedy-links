import React, { useEffect, useState } from 'react';
import './App.css';
import CopyImage from './copy-icon.png';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('')
  const [slug, setSlug] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [links,setLinks] = useState([]);

  const generateLink =  async() =>{
    const response =await axios.post('/link',{
    url,
    slug
    })
     setShortUrl(response?.data?.data?.shortUrl)
     console.log(response?.data?.data?.shortUrl);
  }

  const copyShortUrl =() => {
    navigator.clipboard.writeText(shortUrl)
    alert('COpied to clipboard')
  }
  const loadLinks =async () => {
    const response =await axios.get('/api/links');

    setLinks(response?.data?.data)
  }

  useEffect(() =>{
    loadLinks();
  },[])

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
            <img src={CopyImage} alt='copy' className='cpoy-icon' onClick={copyShortUrl} />
          </div>

          <button type='button' className='btn-generate-link' onClick={generateLink}> Do Magic</button>

        </div>
        <div>
          <h2>All Links</h2>
        </div>
      </div>
    </>
  )
}

export default App;
