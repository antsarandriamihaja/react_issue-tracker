import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { FieldGroup } from 'react-bootstrap';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
//check that input is string and function

Input.propTypes = {
    issue: string,
    name: string,
    handleInputChange: func,
    handleSubmit: func 
}

function Input({ handleInputChange, handleSubmit }) {
    return (
        <div className = 'userInput'>
            <form onSubmit={handleSubmit} >
                <h1>Add a new issue</h1>
               
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Issue: </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Describe your issue"
                            name ="issue"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Severity:</ControlLabel>
                        <FormControl componentClass="select" name='severity' onChange={handleInputChange}>
                             <option defaultValue value="Low">Low</option>
                             <option value="Medium">Medium</option>
                             <option value="Hard">Hard</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Assigned to: </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Person Responsible for issue"
                            name='person'
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                <Button bsStyle ='success'type="submit">Track Issue </Button>
            </form>
        </div>
    )
}

export default Input
