const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places Index</h1>
                <p>You can do index stuff here! Wow!</p>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index