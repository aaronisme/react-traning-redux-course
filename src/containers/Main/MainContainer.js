import React from 'react';
import { Navigation } from '../../components';
import { container, innerContainer } from './styles.css';

function compoentWrapper(WrappedComponent) {
  
  return class extends React.Component {
    render(){
      return (
        <div className={container}>
        <Navigation isAuthed />
        <div className={innerContainer}>
          <WrappedComponent />
        </div>
      </div>)
    }
  }
}


export default compoentWrapper;
