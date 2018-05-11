import React, { Component } from 'react'
import { Checkbox } from 'bloomer'

class StoreTagSelector extends Component {

    state = {
        checked: false,
        name: this.props.name
    }

    // event listener for checkbox that sets new state
    handleChange = () => {
        const { checked } = this.state
        this.setState({ checked: !checked })
    }

    // waits for component state to update and then kicks that up to NewStore
    componentDidUpdate() {
        const { name, checked } = this.state

        if (checked === true) {
            this.props.addTag(name)
        } else {
            this.props.removeTag(name)
        }
    }


    render() {
        return (
            <Checkbox onClick={this.handleChange}>{this.props.name}</Checkbox>
        )
    }
}

export default StoreTagSelector;