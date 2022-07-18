const React = require ('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Uh Oh! Sorry, we can't find this page! Not POG!</p>
            </main>
        </Def>
    )
}

module.exports = error404