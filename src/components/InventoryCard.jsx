import React, { Component } from 'react'
import { Box, Column, Button } from 'bloomer'

class InventoryCard extends Component {

    state = {
        delete: false,
        confirm: false
    }

    removeItem = e => {
        const { inventory, removeFromInventory } = this.props
        const id = inventory._id

        removeFromInventory(id)
    }
    
    render() {
        
        const { inventory } = this.props
        // const deletion = this.state.delete

        return (
            <Column isSize={3}>
                <Box hasTextAlign="centered">
                    <h4>{inventory.name}</h4>
                    <span>
                        <h5>${inventory.price} per {inventory.format}</h5>
                    </span>
                    <h5>{inventory.quantity} available</h5>

                    <span className="inventory-edit-buttons-container">
                        {/* <Button 
                            className="inventory-edit-buttons">Edit</Button> */}
                        <Button 
                            className="inventory-edit-buttons"
                            onClick={this.removeItem}>Delete?</Button>
                    </span>
                </Box>
            </Column>
        )
    }
}

export default InventoryCard