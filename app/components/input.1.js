import React, { Component } from 'react';
import {string, func} from 'prop-types';

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
                    <label>
                        Issue:
    <input type="text" name="issue" placeholder = 'Describe issue' onChange={handleInputChange}/>
                    </label>
                    <label htmlFor="severity">Severity: </label>
                     <select name = 'severity' onChange = {handleInputChange}>
  <option defaultValue value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value='Hard' >Hard</option>
</select>
<label htmlFor="Assigned"> Assigned to: 
     <input type="text" name='person'  onChange = {handleInputChange} placeholder="Enter Person Responsible"/>
</label>
                
            <input type="submit" value="Track Issue" />
            </form>
        </div>
    )
}

export default Input
