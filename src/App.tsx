import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import AppDetail from './pages/AppDetail'
import ThemeJinroLanding from './pages/ThemeJinroLanding'
import NomibePage from './pages/NomibePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/apps/themejinro" element={<ThemeJinroLanding />} />
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/apps/nomibe" element={<NomibePage page="overview" />} />
        <Route path="/apps/nomibe/terms" element={<NomibePage page="terms" />} />
        <Route path="/apps/nomibe/privacy" element={<NomibePage page="privacy" />} />
        <Route path="/apps/nomibe/age-suitability" element={<NomibePage page="age-suitability" />} />
        <Route path="/apps/:appId" element={<AppDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
