import React, { Component } from "react";

// TODO: S'assurer que StaticImage et StaticText ne se rerender pas lorsqu'on update le compteur
// TODO: S'assurer que le Counter ne s'update pas lorsque je click le random button
export class WasteRenderEasy extends Component {
    state = {
        randomNumber: 0,
        count: 0
    };

    generateRandomNumber = () => {
        this.setState({ randomNumber: Math.random() });
    };

    handleIncrementCounter = () => {
        this.setState(state => ({ count: state.count + 1 }));
    };

    render() {
        const { count, randomNumber } = this.state;

        return (
            <div className="ba pa3">
                <h1>Level Easy</h1>
                <button className="mv3" onClick={this.generateRandomNumber}>
                    Change my random number {randomNumber}
                </button>
                <Counter
                    count={count}
                    onIncrementCounter={this.handleIncrementCounter}
                />
                <StaticImage
                    src="https://images-na.ssl-images-amazon.com/images/I/41CPGXoKbgL._SY355_.jpg"
                    alt="Deprecated and irrelevant player"
                />
                <StaticText />
            </div>
        );
    }
}

// Condition: Need to stay Component
class Counter extends Component {
    render() {
        const { count, onIncrementCounter } = this.props;
        return (
            <div className="mv3">
                <span> Current count: {count}</span>
                <button onClick={onIncrementCounter}>+</button>
            </div>
        );
    }
}

// Condition: Need to stay a class
class StaticImage extends Component {
    render() {
        const { src, alt } = this.props;

        return <img src={src} alt={alt} />;
    }
}

// Condition: Need to stay a function
const StaticText = () => {
    return <div>Allo!</div>;
};
