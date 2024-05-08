import { useState } from 'react'

import './App.css'

import useClickAway from './hooks/useClickAway'

function App() {
  const [open, setOpen] = useState(true)

  const ref = useClickAway(() => {
    setOpen(false)
  })

  return (
    <div>
      <h1>Easy Click Away</h1>

      {!open && <button onClick={() => setOpen(!open)}>Open The Content Again</button>}

      <div ref={ref} className="container">
        {open && (
          <div className="content">
            <h2>Click away from the green area to close</h2>

            <label htmlFor="textfield">Interact inside the green box</label>
            <input type="text" id="textfield" />

            <button onClick={() => alert('Clicked')}>Click ME!!</button>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatibus quam debitis culpa facere
              a hic sint optio deleniti! Repellat nostrum atque sunt consectetur numquam sequi exercitationem saepe,
              eaque quisquam!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
