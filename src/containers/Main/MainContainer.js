import React from 'react';
import { Navigation } from '../../components';
import { container, innerContainer } from './styles.css';

const MainContainer = ({children}) => (
  <div className={container}>
    <Navigation isAuthed={false} />
    <div className={innerContainer}>
      {children}
    </div>
  </div>
);

export default MainContainer;
