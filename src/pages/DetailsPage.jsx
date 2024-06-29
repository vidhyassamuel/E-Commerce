import { useEffect, useState } from "react";


const DetailsPage = () => {

    useEffect(() => {
        fetchSingleData();
      }, []);
    
      const fetchSingleData = async () => {
        try {
          const response = await axios.get(PRODUCT_API+id);
        //   setProducts(response.data);
        //   setFilteredProducts(response.data);
        } catch (error) {
          console.error(`Error in fetching product list`, error);
        }
      };

  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage