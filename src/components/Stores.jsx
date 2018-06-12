import React, { Component } from 'react'
// import { Card } from 'bloomer'
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
    // refresh = () => {
    //     axios.get("/stores").then(res => {
    //         if (res.data.payload) {
    //             this.setState({ stores: res.data.payload }); 
    //         }
    //     })
    // }

    refresh = () => {
        const { user } = this.props;
        
        axios.get(`/${user}/stores`).then(res => {
            if (res.data.payload) {
                this.setState({ stores: res.data.payload })
            }
        })
    }

    renderStores = (i) => {
        return <StoresCard info={i} key={i._id} />
    }

    render() {
        return (
            <div>
                <h2>Please Select from a Store Below to Learn More:</h2>
                {
                    this.state.stores.map(this.renderStores)
                }
            </div>
        )
    }
}

export default Stores;