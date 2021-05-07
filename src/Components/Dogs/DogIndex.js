import React from 'react'

export default class DogIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img: ''
        }
    }

    getPhoto(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            this.setState({img: data.message})
        })
        .catch(console.log)
    }
    
    render(){
        return (
            <div>
                <h1>Random Dog Photo</h1>
                <RandomDog url={this.state.img}/>
                <button onClick={(e) => this.getPhoto()}>New Photo</button>
            </div>
        )
    }
}

const RandomDog = (props) => {
    return(
        <div>
            <img src={props.url} alt="Random Dog" />
        </div>
    )
}