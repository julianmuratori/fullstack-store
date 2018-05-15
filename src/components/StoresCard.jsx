import React, { Component } from 'react'
import { Box } from 'bloomer'
import { Link } from 'react-router-dom'
import './css/StoresCard.css'

class StoresCard extends Component {
    
    render() {
        const { info } = this.props
        return (
            <Box className="storesCard">
                <div className="storesCard-title">
                    {/* sending all the props along to the BackendStore component */}
                    <Link to={{
                        pathname: `/stores/${info.slug}`,
                        state: {info}
                    }}>
                        <h4>{info.storeName}</h4>
                    </Link>
                </div>
            </Box>
        )
    }
}

export default StoresCard