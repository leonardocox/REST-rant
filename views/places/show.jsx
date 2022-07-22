const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='container text-center'>
                <div className='row'>
                    <h1>{ data.place.name }</h1>
                <div className='col'>
                    <h3>What's it All About?</h3>
                    <p>{ data.place.description }</p>
                    <h3>Reviews</h3>
                </div>
                <div className='col'>
                    <img src={ data.place.pic } alt={ data.place.name } />
                </div>
            </div>
            <div className='row'>
                <h3>Comments</h3>
            </div>
            </div>
            <div>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form> 
            </div>
          </main>
        </Def>
    )
}

module.exports = show
