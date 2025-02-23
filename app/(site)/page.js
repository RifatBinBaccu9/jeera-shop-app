
import { Suspense } from 'react'
import Blogs from './home/Blogs'
import Hero from './home/Hero'
import Product from './home/Products'
import Services from './home/Service'
import Loading from './loading'
const page = () => {
  return (
    <div className=' font-poppins '>
     <Suspense fallback={<Loading />}>
      <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
      <Services />
      </Suspense>
      <Suspense fallback={<Loading />}>
      <Product />
      </Suspense>
      <Suspense fallback={<Loading />}>
      <Blogs />
      </Suspense>
      
    </div>
  )
}

export default page