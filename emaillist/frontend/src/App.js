import React from 'react';
import Emaillist from './Emaillist';
import styles from './assets/css/App.css'
function App(props) {

    return (
        <div id={styles.App}>
            <Emaillist />
        </div>
    );
}

export default App;