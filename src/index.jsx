import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path='' element={<HomePage />}/>
          <Route path='/' element={<HomePage />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/:id' element={<ProjectPage />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

