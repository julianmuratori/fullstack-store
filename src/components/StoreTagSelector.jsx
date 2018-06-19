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
        return <div>
            <input type="checkbox" id={this.props.name} onClick={this.handleChange} />
            <label for={this.props.name} className="new-store-tag">
              {this.props.name}
            </label>
          </div>;
    }
}

export default StoreTagSelector;