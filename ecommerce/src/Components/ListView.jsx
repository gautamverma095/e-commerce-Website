import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormatPrice } from '../help/help'
import { Button } from '../Styles/Button'
import { ListViewStyles } from '../Styles/ListView'

const ListView = ({products}) => {



  return (

    <ListViewStyles className='section'>
    <div className='container grid'>

    {
        products.map((el,index) => {
            const {id,name,image,price,description} = el
            return (
               <div key={index} className='card grid grid-two-column'>
               <figure>
               <img src={image} alt={name} />
               
               </figure>

                <div className='card-data'>
                <h3>{name}</h3>
                <p><FormatPrice price={price}/></p>
                <p>{description.slice(0,99)}...</p>

                <NavLink to={`/singleproduct/${id}`}>
                <Button className='btn'>Read More</Button>
                </NavLink>
               
               </div>
               </div>
            )
        })
    }

    </div>
    
    </ListViewStyles>
  )
}

export default ListView