import React, { useState, useEffect } from 'react'
import { Meme } from '../components/Meme'
import { Link } from 'react-router-dom'

import Menu from '../components/menu'

const objectToQueryParam = obj => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
  return '?' + params.join('&')
}

const Home = props => {
  const [templates, setTemplates] = useState([])
  const [template, setTemplate] = useState(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const disconnect = () => {
    localStorage.removeItem('token')
    props.history.push('/')
  }

  const [meme, setMeme] = useState(null)

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    )
  }, [])

  if (meme) {
    return (
      <div style={{ textAlign: 'center' }}>
        <img style={{ width: 200 }} src={meme} alt='custom meme' />
        <Link to='/'>Go back to memes</Link>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {template && (
        <form
          onSubmit={async e => {
            e.preventDefault()
            // add logic to create meme from api
            const params = {
              template_id: template.id,
              text0: topText,
              text1: bottomText,
              //              boxes: texts,
              username: 'mahdeasy',
              password: 'fdk01mah'
            }
            const response = await fetch(
              `https://api.imgflip.com/caption_image${objectToQueryParam(
                params
              )}`
            )
            const json = await response.json()
            setMeme(json.data.url)
          }}
        >
          <Meme template={template} />
          <input
            placeholder='top text'
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
          <input
            placeholder='bottom text'
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
          <button type='submit'>create meme</button>

          <Link to='/'>Go back to memes</Link>
        </form>
      )}
      {!template && (
        <>
          <Menu
            disconnect={disconnect}
            user={{
              username: 'Chalgoumito',
              avatar:
                'https://static.lexpress.fr/medias_7867/w_480,h_270,c_fill,g_north/v1378380975/l-imam-de-drancy-seine-saint-denis-hassen-chalghoumi-le-4-juin-2012-a-jerusalem_4028331.jpg'
            }}
          ></Menu>
          <h1>Choisis ton Meme</h1>
          {templates.map(template => {
            const NewMeme = (
              <div key={template.id}>
                <Meme
                  template={template}
                  onClick={() => {
                    setTemplate(template)
                  }}
                />
              </div>
            )
            return NewMeme
          })}
        </>
      )}
    </div>
  )
}

export default Home
