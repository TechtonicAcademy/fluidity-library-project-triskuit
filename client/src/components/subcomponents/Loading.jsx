import PropTypes from 'prop-types';

function Loading(props) {
  const { message } = props;

  const output = message ? (
    <span className="Loading__span">{message}</span>
  ) : (
    <span className="Loading__span Loading__span--ellipsis">Loading</span>
  );

  return <div className="Loading__wrapper">{output}</div>;
}

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: '',
};

export default Loading;
