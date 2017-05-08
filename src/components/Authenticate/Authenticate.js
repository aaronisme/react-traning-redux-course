import React, { PropTypes } from 'react';
import { FacebookButton } from '../../components';
import { centeredContainer, largeHeader, errorMsg } from '../../sharedStyles/styles.css';

const Authenticate = ({ onAuth, isFetching, error }) => (
  <div className={centeredContainer}>
    <h1 className={largeHeader}>Authenticate</h1>
    <FacebookButton onAuth={onAuth} isFetching={isFetching} />
    {error ? <p className={errorMsg}>{error}</p> : null}
  </div>
  );

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
};

export default Authenticate;
