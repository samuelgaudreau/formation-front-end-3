import React, { Component, PureComponent } from "react";

// TODO: If I add an item it doesn't render everything + the note stay with the appropriate cow
// TODO: Understand why it react like this (hint: reactElement)
export class WasteRenderList extends Component {
    state = {
        cows: [{ name: "Cow #0" }]
    };

    addCow = () => {
        const { cows } = this.state;
        const count = cows.length;

        this.setState({ cows: [{ name: `Cow #${count}` }, ...cows] });
    };

    render() {
        const { cows } = this.state;

        return (
            <div className="ba pa3">
                <h1>Level List</h1>
                <button onClick={this.addCow}>Add cow</button>
                <CowList cows={cows} />
            </div>
        );
    }
}

class CowList extends PureComponent {
    render() {
        const { cows } = this.props;

        return (
            <div>
                {cows.map((x, i) => (
                    <Cow key={i} name={x.name} />
                ))}
            </div>
        );
    }
}

class Cow extends Component {
    render() {
        const { name } = this.props;

        return (
            <div className="ma2">
                {name}, note <input type="text" />
            </div>
        );
    }
}
