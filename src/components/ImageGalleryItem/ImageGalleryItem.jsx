import { ListItem, Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({showModal, data}) => {
  const {  tags, webformatURL, largeImageURL } = data;
  return (
    <ListItem>
      <Picture
        src={webformatURL}
        alt={tags}
        onClick={() => showModal({ largeImageURL, tags })}
      />
    </ListItem>
  )
}

ImageGalleryItem.propTypes = {
  showModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
}

