import React, { Component } from "react";
import moviesDB from "./movies.json";
import { generatePrime } from "./primer-calculator.js";

// const { whyDidYouUpdate } = require("why-did-you-update");
// whyDidYouUpdate(React);

export class ProfilingToolsPage extends Component {
    state = {
        movies: moviesDB.slice(0, 10),
        useExpensiveRender: false
    };

    sortByArea = () => {
        const newArr = [...this.state.movies];
        newArr.sort(function(a, b) {
            return a.year - b.year;
        });

        this.setState({ movies: newArr });
    };

    sortByName = () => {
        const newArr = [...this.state.movies];
        newArr.sort(function(a, b) {
            return a.title.localeCompare(b.title);
        });

        this.setState({ movies: newArr });
    };

    toggleExpensiveRender = () => {
        this.setState(x => ({ useExpensiveRender: !x.useExpensiveRender }));
    };

    makeRemake = index => {
        const newArr = [...this.state.movies];
        newArr[index] = { ...newArr[index], year: 2019 };

        this.setState({ movies: newArr });
    };

    render() {
        const { movies, useExpensiveRender } = this.state;

        return (
            <div>
                <h1>Profiling Tools Page</h1>
                <button onClick={this.sortByArea}>Sort by year</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.toggleExpensiveRender}>
                    Toggle expensive render, now {useExpensiveRender.toString()}
                </button>
                {movies.map((x, i) => (
                    <div key={`${x.title}_${x.year}_${i}`} className="ba ma2">
                        <Movie
                            movie={x}
                            useExpensiveRender={useExpensiveRender}
                            makeRemake={() => this.makeRemake(i)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

class Movie extends Component {
    componentDidUpdate() {
        if (this.props.title === "The Cowboy and the Lady") {
            generatePrime(50000);
        }
    }

    render() {
        const { title, year } = this.props.movie;

        if (this.props.useExpensiveRender && title === "Pocahontas") {
            generatePrime(50000);
        }

        return (
            <div>
                <div>Name: {title}</div>
                <div>year: {year}</div>
                <button onClick={this.props.makeRemake}>Create remake</button>
            </div>
        );
    }
}
