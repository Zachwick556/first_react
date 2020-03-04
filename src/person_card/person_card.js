import React from 'react';

class Person extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    render(){
        const Button = (props) => {
            return (
                <button onClick={this.handleClick}>Click to increase age</button>
            );
        }
        return(
            <div>
                <h1>{this.props.last_name}, {this.props.first_name}</h1>
                <h4>Age: {this.props.age + this.state.clickCount}</h4>
                <h4>Hair Color: {this.props.hair_color}</h4>
                <Button handleClick={this.handleClick}/>
            </div>)
    }
}
export default Person;