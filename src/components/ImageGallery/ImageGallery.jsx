import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types'

export const ImageGallery = ({gallery, showModal}) => {

    return (
      <>
        <List>
          {gallery &&
            gallery.map((image) => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  data={image}
                  showModal={showModal}
                />
              );
            })}
        </List>
      </>
    );
  }

ImageGallery.propTypes = {
  showModal: PropTypes.func.isRequired,
}


