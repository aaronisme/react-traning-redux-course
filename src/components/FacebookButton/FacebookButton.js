import React from 'react';
import { button } from './styles.css'

export default function FacebookButton({onAuth, isFetching}) {
  return (
    <button onClick={onAuth} className={button}>
      { isFetching ? 'loading' : 'Login with Facebook'}
    </button>
  )
}
