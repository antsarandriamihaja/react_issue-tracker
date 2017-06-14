import React, { Component } from 'react';
import {string, func} from 'prop-types';
import {FieldGroup} from 'react-bootstrap';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
//check that input is string and function

Input.propTypes = {
    issue: string,
    name: string,
    handleInputChange: func,
    handleSubmit: func 
}
function Input({handleInputChange, handleSubmit}) {
    return (
        <div>
            <form onSubmit={handleSubmit} >
                    <h1>Add a new issue</h1>
                    <FieldGroup
                    id = 'formControlsText'
                    type = "text"
                    label = 'Issue'
                    placeholder = 'Describe issue'
                    onChange = {handleInputChange}
                    />
                    {/*<FormGroup controlId="formControlsSelect">
                        <ControlLabel>Severity:</ControlLabel>
                        <FormControl componentClass="select" name='severity' placeholder="select">
                             <option defaultValue value="Low">Low</option>
                             <option value="Medium">Medium</option>
                             <option value="Hard">Hard</option>
                        </FormControl>
                    </FormGroup>
                    <FieldGroup
                    id = 'formControlsText'
                    type = "text"
                    label = 'Assigned to:'
                    placeholder = 'Enter person responsible for issue'
                    onChange = {handleInputChange}
                    />
                    <Button type="submit"> Submit Issue </Button>*/}
            </form>
        </div>                   
    )
}

export default Input
