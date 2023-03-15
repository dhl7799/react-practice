import React from 'react'
import styles from './assets/scss/Email.scss';
import PropTypes from 'prop-types';

export default function Email({no,firstName, lastName, email, callbackDeleteEmail}) {

  return (
    <li className={styles.Email}>
      <h4>{`${lastName} ${firstName}`}</h4>
      <span>{email}</span>
      <a href='' onClick={ () =>{
        callbackDeleteEmail(no);
      }
    }></a>
    </li>
  );
}

Email.propType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,  
  email: PropTypes.string.isRequired
}