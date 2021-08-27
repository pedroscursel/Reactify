// Tools
import React from 'react'
import { Link } from 'react-router-dom'

// Componentes
import Header from './templates/Header'

// Assets
import '../styles/_notFoundPage.scss'

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="wrap not-found-page">
        <h1>Página não encontra. Volte para <Link to="/dashboard">home page</Link></h1>
      </div>
    </React.Fragment>
  )
}

export default NotFoundPage
