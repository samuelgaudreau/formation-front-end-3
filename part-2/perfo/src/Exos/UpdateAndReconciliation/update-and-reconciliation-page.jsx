import React, { Component } from "react";

export default class UpdateAndReconciliationPage extends Component {
    render() {
        return (
            <div>
                <h1>
                    Will it <span className="strike">blend</span> diff
                </h1>
                <UpdateOnly />
                <RenderSameReactElement />
                <SameTypeButDifferentKey />
                <DifferentTypeSameChildren />
                <UpdatePropVersion1 />
                <UpdatePropVersion2 />
                <SameTypeButMeaninglessProps />
            </div>
        );
    }
}

class UpdateOnly extends Component {
    state = {
        counter: 0
    };

    increaseCounter = () => {
        this.setState(x => ({ counter: x.counter + 1 }));
    };

    render() {
        return (
            <div className="ma3 pa3">
                <div className="underline mb3">
                    #1 React update the virtual dom but nothing change
                </div>
                <span onClick={this.increaseCounter}>Click me please!</span>
            </div>
        );
    }
}

class RenderSameReactElement extends Component {
    state = {};

    renderA = () => {
        return <div>Hello World</div>;
    };

    renderB = () => {
        return <div>Hello World</div>;
    };

    render() {
        return (
            <div>
                <div className="underline mb3">
                    #2 The 2 render method return the same reactElement
                </div>
                <ComponentToggler
                    componentA={this.renderA()}
                    componentB={this.renderB()}
                />
            </div>
        );
    }
}

class SameTypeButDifferentKey extends Component {
    state = {};

    renderA = () => {
        return (
            <div key="A">
                <h1> Hello World</h1>
                <p>Something something</p>
            </div>
        );
    };

    renderB = () => {
        return (
            <div key="B">
                <h1> Hello World</h1>
                <p>Something something</p>
            </div>
        );
    };

    render() {
        return (
            <div>
                <div className="underline mb3">
                    #3 The 2 render method return almost the same reactElement
                    (the key is different)
                </div>
                <ComponentToggler
                    componentA={this.renderA()}
                    componentB={this.renderB()}
                />
            </div>
        );
    }
}

class DifferentTypeSameChildren extends Component {
    state = {};

    renderA = () => {
        return (
            <section>
                <h1> Hello World</h1>
                <p>Something something</p>
            </section>
        );
    };

    renderB = () => {
        return (
            <div>
                <h1> Hello World</h1>
                <p>Something something</p>
            </div>
        );
    };

    render() {
        return (
            <div>
                <div className="underline mb3">
                    #3.5 The parent node is not the same type, but the children
                    are the same
                </div>
                <ComponentToggler
                    componentA={this.renderA()}
                    componentB={this.renderB()}
                />
            </div>
        );
    }
}

class UpdatePropVersion1 extends Component {
    state = {
        currentColor: "hot-pink"
    };

    toggleCounter = () => {
        const { currentColor } = this.state;

        if (currentColor === "hot-pink") {
            this.setState({ currentColor: "black" });
        } else {
            this.setState({ currentColor: "hot-pink" });
        }
    };

    render() {
        const { currentColor } = this.state;

        return (
            <div>
                <div className="underline mb3">
                    #4 Change props (alternative #1)
                </div>
                <button onClick={this.toggleCounter}>Toggle color</button>
                <span>Current document: {currentColor}</span>
                <div className="ba ma3 pa3">
                    <div>
                        <h1 className={currentColor}> Hello World</h1>
                        <p>Something something</p>
                    </div>
                </div>
            </div>
        );
    }
}

// It seems different but under the hood it return the exact same reactElement as alternative #1
class UpdatePropVersion2 extends Component {
    state = {
        currentColor: "hot-pink"
    };

    toggleCounter = () => {
        const { currentColor } = this.state;

        if (currentColor === "hot-pink") {
            this.setState({ currentColor: "black" });
        } else {
            this.setState({ currentColor: "hot-pink" });
        }
    };

    renderComponent = () => {
        const { currentColor } = this.state;

        if (currentColor === "hot-pink") {
            return this.renderPink();
        } else {
            return this.renderBlack();
        }
    };

    renderPink = () => {
        return (
            <div>
                <h1 className="hot-pink"> Hello World</h1>
                <p>Something something</p>
            </div>
        );
    };

    renderBlack = () => {
        return (
            <div>
                <h1 className="black"> Hello World</h1>
                <p>Something something</p>
            </div>
        );
    };

    render() {
        const { currentColor } = this.state;

        return (
            <div>
                <div className="underline mb3">
                    #5 Change props (alternative #2)
                </div>
                <button onClick={this.toggleCounter}>Toggle color</button>
                <span>Current document: {currentColor}</span>
                <div className="ba ma3 pa3">{this.renderComponent()}</div>
            </div>
        );
    }
}

class SameTypeButMeaninglessProps extends Component {
    state = {};

    renderA = () => {
        return <div data-random="A">Hello World</div>;
    };

    renderB = () => {
        return <div data-random="B">Hello World</div>;
    };

    render() {
        return (
            <div>
                <div className="underline mb3">
                    #6 Same type but update props that do not affect UI
                </div>
                <ComponentToggler
                    componentA={this.renderA()}
                    componentB={this.renderB()}
                />
            </div>
        );
    }
}

class ComponentToggler extends Component {
    state = {
        currentComponent: "A"
    };

    toggleCounter = () => {
        const { currentComponent } = this.state;

        if (currentComponent === "A") {
            this.setState({ currentComponent: "B" });
        } else {
            this.setState({ currentComponent: "A" });
        }
    };

    renderComponent = () => {
        const { currentComponent } = this.state;
        const { componentA, componentB } = this.props;

        if (currentComponent === "A") {
            return <>{componentA}</>;
        } else {
            return <>{componentB}</>;
        }
    };

    render() {
        const { currentComponent } = this.state;

        return (
            <>
                <button onClick={this.toggleCounter}>Toggle Component</button>
                <span>Current document: {currentComponent}</span>
                <div className="ba ma3 pa3">{this.renderComponent()}</div>
            </>
        );
    }
}
