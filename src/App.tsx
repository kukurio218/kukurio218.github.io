import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import AppDetail from './pages/AppDetail'
import ThemeJinroLanding from './pages/ThemeJinroLanding'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/apps/themejinro" element={<ThemeJinroLanding />} />
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/apps/:appId" element={<AppDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
