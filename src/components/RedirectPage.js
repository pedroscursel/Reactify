// Tools
import React from 'react'
import _ from 'lodash'

// Logins
import { getParamValues } from '../utils/functions'

export default class RedirectPage extends React.Component {
  componentDidMount() {

    // binding
    const { setExpiryTime, history, location } = this.props
    
    try {
      
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard')
      }
      
      // setando token e tempo de vida do token
      const access_token = getParamValues(location.hash)
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000

      // armazenando token no local storage
      localStorage.setItem('params', JSON.stringify(access_token))
      localStorage.setItem('expiry_time', expiryTime)
      
      setExpiryTime(expiryTime)

      // redirecionando para home
      history.push('/dashboard')
    } catch (error) {
      history.push('/')
    }
  }

  render() {
    return null
  }
}
