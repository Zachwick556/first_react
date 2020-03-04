import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.last_name}, {props.first_name}</h1>
        <h4>Age: {props.age}</h4>
        <h4>Hair Color: {props.hair_color}</h4>
    </div>
);
class Person extends React.Component{
    render(){
        return(<Header first_name="Zach" last_name="Wick" age="1" hair_color="Black"/>)
    }
}
export default Person;