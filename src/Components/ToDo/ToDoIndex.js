import React from 'react';
import { Component } from 'react';

export default class ToDoIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tasks:[],
            newTask: '',
            bgColor: '',
        }
        this.addTask = this.addTask.bind(this)
    }

    addTask(event){
        event.preventDefault();
        this.setState({
            tasks: [...this.state.tasks, this.state.newTask],
            newTask: ''
        })
    }
    userInput(event){
        this.setState({newTask: event.target.value})
    }

    strikethrough =(e) => {
    //    this.setState({bgColor: 'yellow'})
    }

    render(){
        return(
            <div>
            <h1>My To Do List</h1>
            <form onSubmit={this.addTask}>
                <input type="text" value={this.state.newTask} onChange={(event) => this.userInput(event)}></input>
                <button type="submit">Add</button>
            </form>
            <MyTasks allTasks={this.state.tasks} strikethrough={this.strikethrough()}/>
            </div>
        )
    }
}

class MyTasks extends Component{
    render(){
        return(
            <div>
                {this.props.allTasks.map((x) => {
                    return <li style={{backgroundColor:this.state.bgColor}} onClick={this.props.strikethrough}>{x}</li>
                })}
            </div>
        )
    }
}