import React, { Component } from 'react'
import { Container } from 'bloomer'
import axios from 'axios'
import StoresCard from './StoresCard'

class Stores extends Component {

    state = {
        stores: []
    }

    componentDidMount() {
        this.refresh()
    }
    
    // makes a call to the API to retrieve stores
    refresh = () => {
        axios.get("/stores").then(res => {
            if (res.data.payload) {
                this.setState({ stores: res.data.payload }); 
            }
        })
    }

    renderStores = (i) => {
        return (
            <StoresCard 
            info={i}
            key={i} />
        )
    }

    render() {
        return (
            <Container>
                <h2>Please Select from a Store Below to Learn More:</h2>
                {
                    this.state.stores.map(this.renderStores)
                }
            </Container>
        )
    }
}

export default Stores;