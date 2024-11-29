import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../features/products/productSlice'
import { useEffect, useState } from 'react'
import { fetchAllProducts } from '../features/products/productsActions'
import ProductCard from '../components/ProductCard'

const Home = () => {

  
    

    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    
    useEffect(() => {
       
        
        dispatch(fetchAllProducts()).unwrap()
            .then(res => {
              
                setProducts(res)
            })
       
    },[])
     
    
    
     
  return (
       <section>
          <div className='container '>
              <div className='flex'> 
                  {
                     products && (
                          products.map((product, i) => (
                              <div key={i}>
                                  <ProductCard item={product} />
                              </div>
                          ))
                      )
                  }
              </div>
          </div>
      </section>
  )
}

export default Home