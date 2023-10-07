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
import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/:id' element={<ProjectPage />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
