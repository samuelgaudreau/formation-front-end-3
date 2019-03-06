import React from "react";

const styles = {
    childBorder: {
        borderStyle: "dotted",
        borderColor: "blue",
        margin: "0.4em"
    }
};

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("Constructor from Child");
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps from Child");
        console.log(nextProps);
        console.log(prevState);
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount from Child");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ComponentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount from Child");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate from Child");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate from Child");
        return null;
    }
    render() {
        console.log("render from Child");
        return (
            <div style={styles.childBorder}>
                <h4>Child Component</h4>
                <div>
                    <button onClick={this.updateCount}>
                        Update Child Component
                    </button>
                </div>
            </div>
        );
    }

    updateCount = () => {
        console.log("----------- Update Child component------------------");
        this.setState(state => ({ count: state.count + 1 }));
    };
}
export default Hello;
