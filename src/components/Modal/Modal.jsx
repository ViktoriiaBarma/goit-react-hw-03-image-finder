//import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  ModalBackdrop,
  ModalContent,
  ModalDescr,
  ModalPicture,
} from './Modal.styled';


export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC)
  }

  handlePressESC = (e) => {
    if(e.code === 'Escape' || e.currentTarget === e.target) this.props.closeModal()
  }

  render() {
    const { largeImageURL, tags } = this.props.img;
    return (
      <ModalBackdrop onClick={this.handlePressESC}>
        <ModalContent>
          <ModalPicture src={largeImageURL} alt={tags} />
          <ModalDescr>{tags}</ModalDescr>
        </ModalContent>
      </ModalBackdrop>
    )
  }
}