import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';

const initialState = {
  caption: '',
  datePublished: '',
  firebaseKey: '',
  photoUrl: '',
  userId: '',
};

export default function Form({ postObj }) {
  const [formInput, setFormInput] = useState(initialState);
  //   const history = useHistory();

  useEffect(() => {
    if (postObj.firebaseKey) {
      setFormInput({
        caption: postObj.caption,
        datePublished: postObj.datePublished,
        firebaseKey: postObj.firebaseKey,
        photoUrl: postObj.photoUrl,
        userId: postObj.userId,
      });
    }
  }, [postObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // createPost(formInput).then(() => {
    resetForm();
    //   history.push('/posts');
    // });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="m-3">
          <label htmlFor="name">
            <h5>Caption</h5>
            <div className="m-3">
              <input
                type="text"
                id="name"
                name="name"
                value={formInput.caption}
                onChange={handleChange}
                required
              />
            </div>
          </label>
        </div>
        <div className="m-3">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  postObj: PropTypes.shape({
    caption: PropTypes.string,
    datePublished: PropTypes.string,
    firebaseKey: PropTypes.string,
    photoUrl: PropTypes.string,
    userId: PropTypes.string,
  }),
};

Form.defaultProps = { postObj: {} };
