import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageNavigation from '../Components/PageNavigation'
import ProductImage from '../Components/ProductImage'
import { Appcontext } from '../context/ProductContext'
import { FormatPrice } from '../help/help'
import { SingleProductStyle } from '../Styles/SingleProduct'
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Stars from '../Components/Stars'
import Addtocart from '../Components/Addtocart'
const api = "https://enchanting-gray-housecoat.cyclic.app/products"



const SingleProduct = () => {
  const { id } = useParams()

  const { getSingleProduct, isSingleLoading, singleProduct } = useContext(Appcontext)


  useEffect(() => {
    getSingleProduct(`${api}?id=${id}`)

  }, [id])



  const { id: shh, name, company, stars, reviews, price, description, images, stock ,image} = singleProduct

console.log("object",images);
  if (isSingleLoading) {
    return <h1>...Loading</h1>
  }
  return (


    <SingleProductStyle>

      <PageNavigation name={name} />

      <div style={{ "width": "100%", "padding": "0rem 12rem" }} className="container">

        <div className='grid grid-two-column'>

          {/*  image of products */}
          <div className="product-images">

            <ProductImage images={images} image = {image} />

          </div>


          {/*  data of products */}
          <div className="product-data">
            <h2>{name}</h2>
<Stars stars = {stars} reviews  = {reviews} />
            
            <p className="product-data-price">
              MRP:
              {
                <del>
                  <FormatPrice price={price + 1500} />

                </del>
              }

            </p>

            <p className="product-data-price product-data-real-price ">
              Today's Price:
              {
                <FormatPrice price={price} />


              }

            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Vaishali Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">

              <p>Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"} </span>


              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>

            </div>

            <hr />

            {stock>0  && <Addtocart product = {singleProduct}/>}

          </div>
        </div>


      </div>

    </SingleProductStyle>

  )


}
export default SingleProduct




