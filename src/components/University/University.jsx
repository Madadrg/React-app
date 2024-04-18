import React from 'react';
import Paper from '../Paper/Paper';
import styles from './University.module.css';
import universityEmoji from '../../../public/University.png';
import PropTypes from 'prop-types';

const University = ({ name, description }) => {
  return (
    <div className={styles.universityWrapper}>
      <Paper className={styles.universityData}>
        <img
          src={universityEmoji}
          alt="University Emoji Image"
          className={styles.universityImage}
        />
        <p className={styles.UniversityType}>University</p>
        <p className={styles.universityName}>MIT</p>
      </Paper>

      <Paper>
        <p>{description}</p>
      </Paper>
    </div>
  );
};

University.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default University;
