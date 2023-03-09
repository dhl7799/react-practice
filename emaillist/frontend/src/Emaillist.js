import React from 'react';
import styles from './assets/css/Emaillist.css';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emails from './assets/json/data.json';
console.log(Emails);
const Emaillist = () => {
    
    return (
        <div className={styles.Emaillist}>
            <RegisterForm/>
            <Searchbar/>
            <ul>
                {
                Emails.map(Email => 
                <li key={Email.no}>
                    {Email.firstName} {Email.lastName}
                    <br/>
                    {Email.email}
                </li>)
                }
            </ul>
        </div>
    );
};

export default Emaillist;