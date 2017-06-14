import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';
import List_issue from './components/list_issue';
import uuidV1 from 'uuid/v1';
import {FieldGroup} from 'react-bootstrap';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issue: '',
            severity: 'Low',
            person: '',
            status: '',
            issuesList: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this)

    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        e.preventDefault();
        this.setState({
            [name]: value
        });


    }

    handleSubmit(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
        var id = uuidV1();
        var issue = {
            issue: this.state.issue,
            severity: this.state.severity,
            person: this.state.person,
            id: id,
            status: 'Open'
        }

        var newList = this.state.issuesList.slice()
        newList.push(issue);
        this.setState({ issuesList: newList })
        return (this.state.issuesList)

    }


    handleClose(e, id) {
        e.preventDefault();

        console.log('handleClose called');
        var list = this.state.issuesList;
         var newIssueList = []
        for (var i = 0; i < list.length; i++) {
            var issue = list[i];
            if (issue.id === id) {
                console.log('if statement called')
                issue.status = 'Closed'
            }
            newIssueList.push(issue)

        }
        this.setState({
            issuesList: newIssueList
        })
    }


    handleDelete(e, id) {
        e.preventDefault();
        console.log(id);
        var list = this.state.issuesList;
        var newIssueList = []
        for (var i = 0; i < list.length; i++) {
            var issue = list[i];
            if (!(issue.id === id)) {
                newIssueList.push(issue)
            }
        }
        this.setState({
            issuesList: newIssueList
        })


    }
    render() {
        return (
            <div>
                {console.log('issuesList:', this.state.issuesList)}
                <Input handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
                <List_issue issuesList={this.state.issuesList} handleClose={this.handleClose} handleDelete={this.handleDelete} />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))