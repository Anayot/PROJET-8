import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import GlobalStyle from './utils/style/GlobalStyle'
import ErrorPage from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path='/PROJET-8' element={<HomePage />}/>
          <Route path='/PROJET-8' element={<HomePage />}/>
          <Route path='/PROJET-8/projects' element={<Projects />}/>
          <Route path='/PROJETS-8/projects/:id' element={<ProjectPage />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

