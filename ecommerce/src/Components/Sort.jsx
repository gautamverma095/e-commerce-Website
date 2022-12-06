import React from 'react'
import { SortStyles } from '../Styles/Sort'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/FilterContext';

const Sort = () => {
  const {grid_view,setGrid,filter_products,toggleSort} = useFilterContext()

  return (
    <SortStyles className='sort-section'>

    <div className="sorting-list--grid">
    <button onClick={setGrid}  className={grid_view ? "active sort-btn" : "sort-btn"} ><BsFillGridFill className='icon'/></button>
    <button onClick={setGrid} className={grid_view ? "sort-btn" : "active sort-btn"}> <BsList className='icon'/></button>
    </div>
    <div className="product-data">
     <p>{`${filter_products.length} total products.`}</p> 
   
    
     </div>

    <div className="sort-selection">
    
    <form action="#">
    <select name="sort" id="sort" className='sort-selection--style' onChange={toggleSort}>
    
   <option value="htl">Price(high to low)</option>
    <option value="#"  disabled></option>

           
              <option value="lth">Price(low to high)</option>
    <option value="#" disabled></option>

    <option value="a-z">Price(a to z)</option>
    <option value="#" disabled></option>

    <option value="z-a">Price(z to a)</option>
    </select>
    
    
    </form>
    
    </div>

    
    
     </SortStyles>
  )
}

export default Sort