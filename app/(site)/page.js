
import Blogs from './home/Blogs'
import Hero from './home/Hero'
import Product from './home/Products'
import Services from './home/Service'
const page = () => {
  return (
    <div className=' font-poppins '>
      <Hero />
      <Services />
      <Product />
      <Blogs />
      
    </div>
  )
}

export default page