const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/Tteokbokki.jpg" alt="Tteokbokki" />
                    <div>
                        Photo by <a href='https://www.istockphoto.com/portfolio/Urvashi9?mediatype=photography'>Urvashi9</a> on <a href='https://www.istockphoto.com/'>iStock</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home