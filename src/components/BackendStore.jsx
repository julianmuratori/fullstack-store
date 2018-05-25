import React, { Component } from 'react'
// import axios from 'axios'
import { Box } from 'bloomer'
import NewInventoryItem from './NewInventoryItem'
import './css/BackendStore.css'

class BackendStore extends Component {
    render() {
        
        const { info } = this.props.location.state
        
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
                    <NewInventoryItem />
                </Box>

                {/* <Columns>
                    <Column>
                        <Box isDisplay="flex">
                            
                        </Box>
                    </Column>
                    <Column>
                        <Box isDisplay="flex">
                            
                        </Box>
                    </Column>
                    <Column>
                        <Box isDisplay="flex">
                            
                        </Box>
                    </Column>
                </Columns> */}
                {/* <Box className="BackendStore--body">
                    <Columns>
                        <Column className="BackendStore--body__headings">
                            <h4>Product Name</h4>
                        </Column>
                        <Column className="BackendStore--body__headings">
                            <h4>Sale Format</h4>
                        </Column>
                        <Column className="BackendStore--body__headings">
                            <h4>Product Category</h4>
                        </Column>
                        <Column className="BackendStore--body__headings">
                            <h4>Quantity Available</h4>
                        </Column>
                    </Columns>
                </Box> */}
            </div>
        )
    }
}

export default BackendStore