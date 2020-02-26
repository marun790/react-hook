import React, { Component } from 'react'

export default class FormEvents extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comment: '',
            topic:'Angular'

        }
    }
    handleUsernameChange = event => {
        this.setState(
            { userName: event.target.value }
        )
    }

    handleCommentChange = event => {
        this.setState({
            comment:event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault();  //--> will prevent from form default deload activity
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>username</label>
                    <input type='text'
                        value={this.state.userName}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea 
                        value={this.state.comment} 
                        onChange={this.handleCommentChange} 
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='View'>View</option>
                    </select>
                </div>
                <div><button type='submit'>Submit</button></div>
            </form>
        )
    }
}
