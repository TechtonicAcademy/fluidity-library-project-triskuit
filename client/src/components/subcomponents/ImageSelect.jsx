import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Placeholder from '../../styles/assets/images/books/placeholder_book_cover.jpeg';

function ImageSelect({ cover: initialCover, setCover }) {
  const [preview, setPreview] = useState(initialCover);
  const inputCover = useRef();

  const handleImageBtn = () => {
    inputCover.current.click();
  };

  const handleImageChange = () => {
    const input = inputCover.current.files[0];
    if (input) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCover(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(input);
    } else {
      setCover(null);
      setPreview(null);
    }
  };

  useEffect(() => {
    setPreview(initialCover);
    setCover(initialCover);
  }, [initialCover]);

  return (
    <div className="edit_form__book_cover_wrapper">
      <input
        type="file"
        accept=".jpeg,.png"
        name="cover"
        ref={inputCover}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <img
        src={preview || Placeholder}
        alt="Book cover"
        className="edit_form__image"
      />
      <button type="button" className="edit_form__btn" onClick={handleImageBtn}>
        Change Image
      </button>
    </div>
  );
}

ImageSelect.propTypes = {
  cover: PropTypes.string,
  setCover: PropTypes.func,
};

ImageSelect.defaultProps = {
  cover: '',
  setCover: () => {
    // eslint-disable-next-line no-console
    console.log(
      'Pass a setter to the ImageSelect component to return a value to the form'
    );
  },
};

export default ImageSelect;
