import React from 'react'

const Filter = ({filter, setFilter}) => {
  return (
    <div div className='filtros sombra contenedor'>
        <form >
            <div className="campo">
                <label >Spents Filter</label>
                <select 
                value={filter} onChange={e=>setFilter(e.target.value)}
                >
                    <option value="">--All Categories--</option>
                    <option value="savings">Savings</option>
                    <option value="food">Food</option>
                    <option value="home">Home</option>
                    <option value="spends">Spends</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filter