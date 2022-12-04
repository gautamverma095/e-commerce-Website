import axios from 'axios';


const API = "https://enchanting-gray-housecoat.cyclic.app/products"

export const getProducts = async () => {
    return axios.get(API)
  
  }