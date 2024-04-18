import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tutors.module.css'
import { nanoid } from "nanoid";

class Tutors = ({ tutors )} => {
    return tutors.map({ tutor }) => {
        constid = nanoid();
        return (
        <Paper key={id}>
            <div>
             <div>
            <p>{tutor.firstName}</p>
            <p>{tutor.lastName}</p>
            </div>
            <div>
            <p>{tutor.phone}</p>
            <p>{tutor.email}</p>
             <p>{tutor.city}</p>
          </div>
                    
             <p>{tutor.options}</p>
             </div>
</Paper>
    )};
    };


Tutors.propTypes = {
  tutors: PropTypes.arrayOf(PropTypes.object),
};
export default Tutors;