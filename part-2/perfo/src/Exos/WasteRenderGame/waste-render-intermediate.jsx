import React, { Component, PureComponent } from "react";

// TODO: Fixer l'app (quand je click sur les boutons j'ai de quoi qui change à l'écran)
// TODO: Faire que le LifeManagementPanel ne s'update pas à chaque fois
export class WasteRenderIntermediate extends Component {
    state = {
        profile: {
            name: "John",
            profession: "Coyboy",
            age: 20,
            salary: 1000
        },
        catchedCows: [{ name: "Cow #0" }]
    };

    shouldComponentUpdate() {
        return false;
    }

    // Condition: Do not change this method
    increaseSalary = () => {
        const { profile } = this.state;
        profile.salary = profile.salary + 10;

        this.setState({ profile: profile });
    };

    addCow = () => {
        const { catchedCows } = this.state;
        const count = catchedCows.length;
        catchedCows.push({ name: `Cow #${count}` });

        this.setState({ catchedCows: catchedCows });
    };

    render() {
        const { age, profile, catchedCows } = this.state;

        return (
            <div className="ba pa3">
                <h1>Level Intermediate</h1>
                <button onClick={this.increaseSalary}>Increase Salary</button>
                <button onClick={this.addCow}>Add cow</button>
                <LifeManagementPanel
                    currentAge={age}
                    onIncreaseAge={newAge => this.setState({ age: newAge })}
                />
                <Profile profile={profile} />
                <CowTrophyList catchedCows={catchedCows} />
            </div>
        );
    }
}

class LifeManagementPanel extends PureComponent {
    render() {
        const { onIncreaseAge, currentAge } = this.props;

        return (
            <div className="mv2">
                Life Control:
                <button onClick={() => onIncreaseAge(currentAge + 1)}>
                    Grow old!
                </button>
            </div>
        );
    }
}

class Profile extends PureComponent {
    render() {
        const { name, profession, salary } = this.props.profile;

        return (
            <div className="mv3">
                <div>Name: {name}</div>
                <div>Profession: {profession}</div>
                <div>Salary: {salary}</div>
            </div>
        );
    }
}

// Condition: Must stay PureComponent
class CowTrophyList extends PureComponent {
    render() {
        const { catchedCows } = this.props;

        return (
            <div>
                {catchedCows.map(x => (
                    <div>{x.name}</div>
                ))}
            </div>
        );
    }
}
