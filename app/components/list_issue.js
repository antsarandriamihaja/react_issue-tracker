import React, { Component } from 'react';
import { string, func } from 'prop-types';
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';


function List_issue({ issuesList, handleClose, handleDelete }) {

    return (
        <ul>
            {issuesList.map(function (issue, index) {
                return (
                    <div key = {index} className ={issue.severity}>
                        {console.log(issue)}
                        <Button className = {issue.status}>{issue.status}</Button>
                      <li>ID: {issue.id}</li>  
                    <li>Issue: {issue.issue}</li>
                    <li>Severity: {issue.severity}</li>
                    <li>Responsible: {issue.person}</li>
                    <ButtonToolbar>
                    <Button bsStyle='warning' onClick = {(e)=>handleClose(e, issue.id)}>Close Issue</Button>
                    <Button  bsStyle = 'danger'onClick = {(e)=>handleDelete(e, issue.id)}>Delete Issue</Button>
                    </ButtonToolbar>
                    </div>       
           )
            })
            }     
    </ul>
    )

}

export default List_issue