import React from 'react';
import Paper from '../Paper/Paper';
import styles from './University.module.css';

class University = () => {
    return (
            <div className = {styles.universityWrapper}>
       <Paper className = { styles.universityName } >
           <h2>Title</h2>
    <p>Paragraf 1</p>
    <p>Paragraf 2</p>
    </Paper >
        
        <Paper>
            <p>
            Experience...
            </p>
        </Paper>
    </div>
    );
};

export default University;