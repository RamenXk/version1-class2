import { useState } from 'react'
import Home from './pages/home'
import MyForm from './pages/myform'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myform" element={<MyForm />} />
      </Routes>
    </>
  )
}

export default App
