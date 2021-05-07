import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props)
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchTerm: ""
   }
   console.log(this.state.searchTerm) //empty (good)
 }

 searchFunction = (event) => {
   this.setState({searchTerm: event.target.value})
   console.log(this.state.searchTerm) //user input (good)
 }


 display = (props) =>{
   if(this.state.searchTerm === ''){
     return <ul>{this.state.things.map(thing => <li>{thing}</li>)}</ul>
   } else {
    return <ul>{this.state.things.filter(thing => thing.includes(this.state.searchTerm)).map(thing => <li>{thing}</li>)}</ul> 
   }
 }

 render(){
   return(
     <div>
       <Input placeholder='Search Here' type="text" onChange={(event) => this.searchFunction(event)}/>
       <h3>Results:</h3>
       {this.display()}
     </div>
   )}
}
 
export default SearchIndex;
