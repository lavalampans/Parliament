import React from 'react'

function Header(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
            </div>
            <div className="card-body">
                <h5 className="card-title">Parties and members of the Swedish parliament</h5>
                <p className="card-text">Press the party you want to filter for:</p>
                <button type="button" disabled={props.disabled} className="btn btn-dark justify-content-center mb-2" onClick={() => props.reset()}>All Parties</button>
                <hr />
                <div className="input-group mb-3 mt-4 justify-content-center">
                    {/* XL-MD buttons only */}
                    <div className="btn-group d-none d-md-block mb-2" role="group" aria-label="Basic example">
                        <button type="button" disabled={props.disabled} className="btn btn-danger justify-content-center" onClick={() => props.handleChange("V")}>Vänsterpartiet (V)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-danger justify-content-center" onClick={() => props.handleChange("S")}>Socialdemokraterna (S)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-success justify-content-center" onClick={() => props.handleChange("C")}>Centerpartiet (C)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-success justify-content-center" onClick={() => props.handleChange("MP")}>Miljöpartiet (MP)</button>
                    </div>
                    <div className="btn-group d-none d-md-block" role="group" aria-label="Basic example">
                        <button type="button" disabled={props.disabled} className="btn btn-info justify-content-center" onClick={() => props.handleChange("L")}>Liberalerna (L)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-info justify-content-center" onClick={() => props.handleChange("KD")}>Kristdemokraterna (KD)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-info justify-content-center" onClick={() => props.handleChange("M")}>Moderata (M)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-info justify-content-center" onClick={() => props.handleChange("SD")}>Sverigedemokraterna (SD)</button>
                    </div>
                    {/* Mobile buttons only */}
                    <div className="btn-group-vertical w-100 d-md-none" role="group" aria-label="Basic example">
                        <button type="button" disabled={props.disabled} className="btn btn-danger justify-content-center" onClick={() => props.handleChange("V")}>Vänsterpartiet (V)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-danger justify-content-center" onClick={() => props.handleChange("S")}>Socialdemokraterna (S)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-success justify-content-center" onClick={() => props.handleChange("C")}>Centerpartiet (C)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-success justify-content-center" onClick={() => props.handleChange("MP")}>Miljöpartiet (MP)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-info justify-content-center" onClick={() => props.handleChange("L")}>Liberalerna (L)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-info justify-content-center" onClick={() => props.handleChange("KD")}>Kristdemokraterna (KD)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-info justify-content-center" onClick={() => props.handleChange("M")}>Moderata (M)</button>
                        <button type="button" disabled={props.disabled} className="btn btn-info justify-content-center" onClick={() => props.handleChange("SD")}>Sverigedemokraterna (SD)</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header