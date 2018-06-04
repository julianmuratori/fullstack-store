import React, { Component } from 'react'
import axios from 'axios'
import { Box, Columns } from 'bloomer'

import NewInventoryItem from './NewInventoryItem'
import InventoryCard from './InventoryCard';

import './css/BackendStore.css'

class BackendStore extends Component {

    state = {
        inventory: {},
        save: false
    }

    componentDidMount() {
        this.refresh()
    }

    refresh = () => {
        const store = this.props.location.state.info.slug


        axios.get(`/stores/${store}`).then(res => {
            if (res.data) {
                this.setState({ inventory: res.data })
            }
        })

    }
    addToInventory = e => {
        const { category, format, name, price, quantity } = e
        const store = this.props.location.state.info.slug
        const storeId = this.state.inventory.id
        
        axios.post(`/stores/${store}/inventory`, {
            category,
            format,
            name,
            price,
            quantity,
            storeId
        })
    }

    removeFromInventory = e => {
        console.log("remove from inventory function in backendstore")
    }
    
    renderInventory = e => {
        const { inventory } = this.state

        return (
            <InventoryCard 
                inventory={inventory[e]}
                removeFromInventory={this.removeFromInventory}
                delete={this.state.delete}
                save={this.state.save}
                key={e} />
        )
    }

    render() {
        
        const { info } = this.props.location.state
        const { inventory } = this.state

        return (
            <div>
                <Box 
                    className="BackendStore--header"
                    hasTextAlign="centered">
                    <h1>{info.storeName}</h1>
                    <h3>"{info.storeDesc}"</h3>
                </Box>

                <Box hasTextAlign="centered">
                    <h4>Enter a new inventory item or click below to edit your existing inventory</h4>
                    <NewInventoryItem addToInventory={this.addToInventory}/>
                </Box>

                <Box>
                    <Columns className="inventory-columns">
                    {/* {
                        Object.keys(inventory)
                            .map(this.renderInventory)
                    } */}
                    </Columns>
                </Box>
            </div>
        )
    }
}

export default BackendStore