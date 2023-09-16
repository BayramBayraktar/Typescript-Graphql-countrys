import React from 'react'
import { Spinner } from 'reactstrap'

const Spiner = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Spinner
                color="info"
                size="30"
                type="border"
            >
                Loading...
            </Spinner>
        </div>
    )
}

export default Spiner