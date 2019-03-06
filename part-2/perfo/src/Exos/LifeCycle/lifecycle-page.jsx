import React, { Component } from "react";
import Hello from "./hello";

// Change other exos
// const { whyDidYouUpdate } = require("why-did-you-update");
// whyDidYouUpdate(React);

export class IHaveAFunLiveISwear extends React.Component {
    state = {
        show: false,
        count: 0
    };

    toggleComponent = () => {
        this.setState(state => ({
            show: !state.show
        }));
    };

    updateCount = () => {
        this.setState(state => ({ count: state.count + 1 }));
    };

    componentDidCatch(errorString, errorInfo) {
        console.log("Catching error");
    }

    render() {
        const { show } = this.state;
        return (
            <div style={styles.parentDiv}>
                <h3>Playing with Component Lifecycle methods</h3>
                <div style={styles.parentBorder}>
                    <div style={styles.parentMargin}>
                        <h4>Parent Component</h4>
                        <button onClick={this.toggleComponent}>
                            {show ? "Remove" : "Add"} Child Component
                        </button>
                        <button onClick={this.updateCount}>
                            Update Parent Component
                        </button>
                        {show && <Hello />}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    parentDiv: {
        fontFamily: "sans-serif",
        textAlign: "center"
    },
    parentBorder: {
        borderStyle: "outset",
        borderColor: "green"
    },
    parentMargin: {
        margin: "0.4em"
    }
};
