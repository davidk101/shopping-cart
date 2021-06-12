import React, { Component} from 'react';

class Counter extends Component {

    state = {
        count:0
    };

    handleIncrement = () => {

        console.log('button clicked', this);
    }

    render() {

        return (
            <div>
                <button onClick = {this.handleIncrement}>Increment </button>

            </div>
        );

    }
}

export default Counter;

// only one component can be returned by return function of a render
// state: object that includes any data that a component would need
// in between curly braces, we can include any valid JS code
// jsx expression are just like normal js objects
// // {} -> passing js object

// RENDERING LISTS
// jsx is not a templating engine hence it cannot have conditionals
// {this.state.tags.map(tag => <li key = {tag}>{tag}</li>)} -> rendering array of items into a list
// To use the map() function, attach it to an array you want to iterate over.
// The map() function expects a callback as the argument and executes it once for each element in the array


// CONDITIONAL RENDERING
// {this.state.tags.length === 0 && "Please create a new tag."}

// HANDLING EVENTS
// <button onClick = {this.handleIncrement}>Increment </button>
// we're not calling the method, we're only passing a reference

// BINDING EVENT HANDLERS
// 'this' can reference different objects based on how it's called and can sometimes return 'undefined'
// therefore, we must bind event handlers to 'this'
// functions in js are objects, hence they have properties and methods
//     constructor(props){
//         super(props); // must call constructor of parent class
//         this.handleIncrement = this.handleIncrement.bind(this); // returns current instance of the Counter method
//     }
// arrow functions don't rebind 'this', they inherit it, hence it's better to use it than adding constructor
// and rebinding everything manually
