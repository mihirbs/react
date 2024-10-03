import React from "react";

class LifecycleDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString(),
        });
    }

    render() {
        return (
            <div>
                <h2>Current Time: {this.state.time}</h2>
            </div>
        );
    }
}

export default LifecycleDemo;