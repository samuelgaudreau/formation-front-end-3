import React, { Component } from "react";

// Change other exos
// const { whyDidYouUpdate } = require("why-did-you-update");
// whyDidYouUpdate(React);

export class StateInstanceReconciliationParadox extends Component {
    state = {
        counter: "A"
    };

    toggleCounter = () => {
        const { counter } = this.state;

        if (counter === "A") {
            this.setState({ counter: "B" });
        } else {
            this.setState({ counter: "A" });
        }
    };

    renderCounter = () => {
        const { counter } = this.state;

        if (counter === "A") {
            return this.renderCounterA();
        } else {
            return this.renderCounterB();
        }
    };

    renderCounter_ = () => {
        const { counter } = this.state;

        return (
            <>
                {counter === "A" && this.renderCounterA()}
                {counter === "B" && this.renderCounterB()}
            </>
        );
    };

    renderCounterA = () => {
        return <Counter name="A" />;
    };

    renderCounterB = () => {
        return <Counter name="B" />;
    };

    render() {
        const { counter } = this.state;

        return (
            <div className="pa3">
                <button onClick={this.toggleCounter}>
                    Toggle Counter {counter}
                </button>
                {this.renderCounter()}
            </div>
        );
    }
}

class Counter extends Component {
    state = {
        count: 1
    };

    render() {
        return (
            <div>
                <span>Counter Name {this.props.name}</span>
                <span> Current count: {this.state.count}</span>
                <button
                    onClick={() =>
                        this.setState(state => ({ count: state.count + 1 }))
                    }
                >
                    +
                </button>
            </div>
        );
    }
}
