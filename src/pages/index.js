import React from 'react'
import { URL } from 'whatwg-url'

class IndexPage extends React.Component {
    state = {
        url: ``
    }

    componentDidMount() {
        let u = new URL("http://example.com/foo.html");
        u.search = "bar=baz";

        this.setState({
            url: u.toString()
        })
    }

    render() {
        return <h1>{this.state.url}</h1>
    }
}

export default IndexPage
