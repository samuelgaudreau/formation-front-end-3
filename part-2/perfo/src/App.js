import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BasicComponent } from "./Exos/Exos1/exos1-page";

const Index = () => <h2>Formation Performance React</h2>;

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="flex flex-row">
                        <Link to="/" className="mh2">
                            Home
                        </Link>
                        <Link to="/exos1/" className="mh2">
                            Exos #1
                        </Link>
                    </nav>

                    <div className="flex items-center justify-center">
                        <Route path="/" exact component={Index} />
                        <Route
                            path="/exos1/"
                            exact
                            component={BasicComponent}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
