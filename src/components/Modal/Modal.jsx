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
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if(e.code === 'Escape' || e.currentTarget === e.target) this.props.closeModal()
  }

  render() {
    const { largeImageURL, tags } = this.props.img;
    return (
      <ModalBackdrop onClick={this.handleKeyDown}>
        <ModalContent>
          <ModalPicture src={largeImageURL} alt={tags} />
          <ModalDescr>{tags}</ModalDescr>
        </ModalContent>
      </ModalBackdrop>
    )
  }
}