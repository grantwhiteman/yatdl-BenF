import React, {Component} from "react"

class List extends Component {
    constructor (props) {
        super(props)
        this.state = {list : [], item: ''};
    }

    handleChange = (event) => {
        this.setState({item: event.target.value})
    }

    handleClick = () => {
        this.setState({list: this.state.list.concat(this.state.item)})
    }

    handleClear = () => {
        this.setState({list: []})
    }

    strikethrough = (event) => {
        this.setState({list: this.state.list.map(item => (item === event.target.value)? <del>{item}</del> : item)})
    }

    render () {
        return (
            <div>
                <input type='text' id='input' onChange={this.handleChange}/>
                <button type='submit' id='submit' onClick={this.handleClick}>Submit</button>
                <button id='clear' onClick={this.handleClear}>Clear</button>
                <ol id='list'>{this.state.list.map((item, i) => (
                    <li key={i}><input type='checkbox' value={item} onChange={this.strikethrough}/>{item}</li>
                ))}</ol>
            </div>
        )
    }
}

export default List