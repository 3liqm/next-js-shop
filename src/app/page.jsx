import Hero from '@/components/Hero/Hero'
import PopularProducts from '@/components/PopularProducts/PopularProducts'
import Brand from '@/components/Brand/Brand'
import Service from '@/components/Service/Service'
export default function Home() {
  return (
    <div>
     <Hero/>
     <Service/>
     <PopularProducts/>
     <Brand/>
    </div>
  )
}
