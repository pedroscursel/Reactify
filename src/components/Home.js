// Tools
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Components
import Header from './templates/Header'

// Assets
import { Alert, Button } from 'react-bootstrap'
import '../styles/_home.scss'

const Home = (props) => {
  
  // variáveis de ambiente no arquivo .env
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env

  // chamada de login do spotify
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`
  }

  // data binding
  const { isValidSession, location } = props
  const { state } = location
  const sessionExpired = state && state.session_expired

  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <React.Fragment>
          <Header />
          <div className="wrap home">
            { sessionExpired && (
              <Alert variant="info">Faça login para continuar.</Alert>
            )}
            <Button variant="success" type="submit" onClick={ handleLogin }>
              Login no Spotify
            </Button>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default connect()(Home)
