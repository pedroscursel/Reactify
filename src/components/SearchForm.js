// Tools
import React, { useState } from 'react'
import { connect } from 'react-redux'

// Assets
import { Form, Button } from 'react-bootstrap'
import '../styles/_searchForm.scss'

const SearchForm = ( props ) => {

  const [searchTerm, setSearchTerm] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  // pega alterações no input text
  const handleInputChange = (event) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)
  }

  // valida o termo de pesquisa e faz a chamada
  const handleSearch = (event) => {
    event.preventDefault()
    if (( searchTerm.trim() !== '' ) && ( searchTerm.length >= 3 )) {
      setErrorMsg('')
      props.handleSearch(searchTerm)
    } else {
      setErrorMsg('Para fazer uma pesquisa, necessitamos de um termo...')
    }
  }
  
  return (
    <div className="search-form">
      <Form onSubmit={ handleSearch }>
        { errorMsg && <p className="errorMsg">{ errorMsg }</p> }
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Busque por artistas, albuns ou músicas</Form.Label>
          <Form.Control
            type="search"
            name="searchTerm"
            value={ searchTerm }
            placeholder="Comece a escrever..."
            onChange={ handleInputChange }
            autoComplete="off"
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Buscar
        </Button>
      </Form>
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return {
    album: state.album,
    selectedalbum: state.selectedalbum
  }
}

export default connect(mapStateToProps)(SearchForm)
