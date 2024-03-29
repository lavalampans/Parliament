import React from 'react'

function Spinner() {
    return <div className="col-md-12 mx-auto d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}

export default Spinner