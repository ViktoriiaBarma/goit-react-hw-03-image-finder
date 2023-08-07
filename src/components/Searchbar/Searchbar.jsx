import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
 // BtnText,
} from './Searchbar.styled';
//import PropTypes from 'prop-types';

export class Searchbar extends Component  {

  state = {
    value: ''
  }

  handleChange = ({target: {value}}) => {
    this.setState({value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.hendleInput(this.state.value)
    this.setState({value: ''})
  }
  
  render() {
    return (
      <>
        <Header>
          <SearchForm onSubmit={this.handleSubmit} >
            <SearchFormBtn type="submit">
              Search
            </SearchFormBtn>
            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange} value={this.state.value} /> 
            </SearchForm>
          </Header>
      </>
    )
  }
}