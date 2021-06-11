import React, { Component} from 'react';

class Counter extends Component {

    state = {
        count:0
    };

    styles = {
        color: 'black'
    }

    render() {

        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';

        return (
            <div>
                <span style = {this.styles} className ={classes}>{this.formatCount()}</span>
                <button className = 'btn btn-secondary btn-sm'>Increment</button>
            </div>
        );

    }

    formatCount(){
        const {count} = this.state; // destructuring the this.state object to reduce extra of code
        console.log(count)
        return count === 0 ? <h1>Zero</h1> : count
    }
}

export default Counter;
// only one component can be returned by return function of a render
// state: object that includes any data that a component would need
// in between curly braces, we can include any valid JS code
// jsx expression are just like normal js objects