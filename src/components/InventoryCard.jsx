import React, { Component } from 'react'
import { Container, Box, Column, Button } from 'bloomer'

class InventoryCard extends Component {

    state = {
        delete: false,
        confirm: false
    }

    verifyDelete = e => {
        console.log('inventorycard component')
    }
    
    render() {
        
        const { inventory, removeFromInventory } = this.props
        const deletion = this.state.delete

        return (
            <Column isSize={3}>
                <Box hasTextAlign="centered">
                    <h4>{inventory.name}</h4>
                    <span>
                        <h5>${inventory.price} per {inventory.format}</h5>
                    </span>
                    <h5>{inventory.quantity} available</h5>

                    <span className="inventory-edit-buttons-container">
                        <Button 
                            className="inventory-edit-buttons">Edit</Button>
                        <Button 
                            className="inventory-edit-buttons"
                            onClick={this.verifyDelete}>Delete?</Button>
                    </span>
                </Box>
            </Column>
        )
    }
}

export default InventoryCard