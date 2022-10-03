import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from './layout/Layout'
import Side from './pages/Side'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path=':routeParams' element={<Side />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
