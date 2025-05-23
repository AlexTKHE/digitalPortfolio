import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { NotFound } from './pages/notFound';
import { Toaster } from 'sonner';
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
