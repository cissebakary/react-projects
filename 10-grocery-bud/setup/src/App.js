import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show:true, message: '', type:''})
    const handleSubmit = e => {
      e.preventDefault()
      console.log('hello world')
    }
  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      { alert.show && <Alert/>}
      <h3>Grocery bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" />
        <button type='submit' className="submit-btn"></button>
      </div>
    </form>
    <div className="grocery-container">
      <List/>
      <button className="clearBtn">Clear items</button>
    </div>
  </section>
}

export default App
