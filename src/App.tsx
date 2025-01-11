import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, Theme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { Login } from './pages/auth/Login'
import { useUserStore } from './store/user/UserStore'
import { useEffect, useState } from 'react'
import { themeDark, themeLight } from './common/theme'
import { Dashboard } from './pages/Dashboard'
import { Profile } from './pages/auth/Profile'
const useGetTheme = () => {
  const user = useUserStore((state) => state.user);
  const [theme, setTheme] = useState<Theme>(themeLight)
  useEffect(() => {
    if (user?.theme === 'dark') {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
  }, [user?.theme])
  return theme
}
function App() {
  const theme = useGetTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
