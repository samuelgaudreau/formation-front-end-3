import React, { Component, PureComponent } from "react";

// Change other exos
const { whyDidYouUpdate } = require("why-did-you-update");
whyDidYouUpdate(React);

export class BasicComponent extends Component {
    state = {
        count: 0
    };

    handleIncrementCounter = () => {
        this.setState(state => ({ count: state.count + 1 }));
    };

    render() {
        const { count } = this.state;

        return (
            <div className="pa3">
                <Counter
                    count={count}
                    onIncrementCounter={this.handleIncrementCounter}
                />
                <StaticImage />
                <StaticText />
            </div>
        );
    }
}

class Counter extends Component {
    render() {
        const { count, onIncrementCounter } = this.props;
        return (
            <div>
                <span> Current count: {count}</span>
                <button onClick={onIncrementCounter}>+</button>
            </div>
        );
    }
}

class StaticImage extends Component {
    render() {
        return (
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/41CPGXoKbgL._SY355_.jpg"
                alt="Deprecated and irrelevant player"
            />
        );
    }
}

const StaticText = () => {
    return <div>Allo!</div>;
};
