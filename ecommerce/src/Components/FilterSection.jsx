import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import { FormatPrice } from '../help/help'
import { Button } from '../Styles/Button'
import { FilterSectionStyles } from '../Styles/FilterSection'

const FilterSection = () => {

    const { filter: { text, color, price, maxPrice, minPrice }, toggleSearch, all_products, clearFilter } = useFilterContext()



    const uniqueData = (data, unique) => {

        let newVal = data.map((el) => {
            return el[unique]
        })

        if (unique === "colors") {
            newVal = newVal.flat()
        }
        return (newVal = ["All", ...new Set(newVal)])
    }

    const categoryData = uniqueData(all_products, "category")
    const companyData = uniqueData(all_products, "company")
    const colorData = uniqueData(all_products, "colors")


    return (
        <FilterSectionStyles>

            <div className="filter-search" >
                <form onSubmit={
                    (e) => e.preventDefault()
                } >
                    <input type="text"
                        name="text"
                        value={text}
                        onChange={toggleSearch}
                        placeholder="Search" />

                </ form>

            </ div>

            <div className="filter-category" >


                <h3 > Category </h3>

                <div > {
                    categoryData.map((el, index) => {
                        return (
                            <button type='button'
                                name='category'
                                value={el}
                                key={index}
                                onClick={toggleSearch} >

                                {el}
                            </ button>
                        )
                    })
                }
                </ div>
            </ div >

            <div className="filter-company" >
                <h3> Company  </h3>

                <form action="#" >

                    <select
                        name="company"
                        id="company"
                        className='filter-comapny--select'
                        onChange={toggleSearch} >

                        {
                            companyData.map((el, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={el}
                                        name="company">
                                        {el}
                                    </ option>


                                )
                            })
                        }


                    </ select>
                </ form>

            </ div>

            <div className="filter-colors colors">
                <h3>Colors</h3>

                <div className="filter-color-style" style={{ marginLeft: "0" }}>
                    {
                        colorData.map((el, index) => {

                            return (
                                <button
                                    key={index}
                                    type='button'
                                    className='btnStyle'
                                    style={{ backgroundColor: el }}

                                >
                                    {color === el ? "" : null}
                                </button>
                            )
                        })
                    }

                </div>




            </div>



            <div className="filter_price">
                <h3>Price</h3>
                <p><FormatPrice price={price} /></p>
                <input
                    type="range"
                    step="10"
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    name="price"
                    onChange={toggleSearch}

                />

            </div>

            <div className="filter-clear">

                <Button className='btn' onClick={clearFilter}>
                    Clear Filters

                </Button>
            </div>
        </ FilterSectionStyles>
    )
}

export default FilterSection