import React from 'react'

function PersonList(props) {
    const filter = props.users.sort((a, b) => a.parti.localeCompare(b.parti))
    const person = filter.map(person => {
        return (
            <div key={person.hangar_id} className="col-lg-4 col-md-6 col-sm-12">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={person.bild_url_192} className="card-img" alt={person.tilltalsnamn}></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{person.tilltalsnamn} {person.efternamn}</h5>
                                <p className="card-text">{person.parti}</p>
                                <span className="card-text"><small className="text-muted">{person.status}</small></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    });
    return person
}

export default PersonList