import React from 'react';
import {Button, Row, Col } from 'react-bootstrap';


const Form = () => {
    return (
        <div className='form-container'>
               <div className="form-container">
                <form className="signup-form">
                    <input className="name-input" type="text" placeholder="nom" name="name"/> <br></br>
                    <input className="email-input" type="text" placeholder="email" name="email" /><br></br>
                    <Button className="submit-button" value="submit" type="submit">envoyer</Button>
                </form>
               </div>
        </div>
    );
};

export default Form;