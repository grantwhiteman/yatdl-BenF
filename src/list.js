import React from "react";

class List extends React.Component {
    constructor () {
        super()
        this.list = [];
    }
    handleClick = () => {
        this.list.push('Take bins out')
        return this.list
    }

    render () {
        return (
            <div>
                <input type='text' id='list'/>
                <button type='submit' id='submit' onClick={this.handleClick}>Submit</button>

            </div>
        )
    }
}

export default List;