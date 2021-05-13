import React from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: 'Denis'
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.clock(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    clock = () => this.setState({ date: new Date() })
    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleDateString()}</h1>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}
export default Time;