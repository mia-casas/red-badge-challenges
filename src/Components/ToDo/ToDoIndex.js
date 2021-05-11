import React from 'react';
import { Component } from 'react';

export default class ToDoIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tasks:[],
            newTask: '',
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

    render(){
        return(
            <div>
            <h1>My To Do List</h1>
            <form onSubmit={this.addTask}>
                <input type="text" value={this.state.newTask}  onChange={(event) => this.userInput(event)}></input>
                <button type="submit">Add</button>
            </form>
            <MyTasks id="tasks" allTasks={this.state.tasks} />
            </div>
        )
    }
}



class MyTasks extends Component{

    render(){
        return(
            <div id="tasks">
                {this.props.allTasks.map((x) => {
                    return <li id="tasks">{x} </li> 
                })}
                <button onClick={(event) => document.getElementById('tasks').style.textDecorationLine = 'line-through'}>Click when all tasks are completed</button>
            </div>
        )
    }
}