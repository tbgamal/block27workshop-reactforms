import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>
      <SignUpForm />
      <Authenticate />
    </>
  )
}

export default App
