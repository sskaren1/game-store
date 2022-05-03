// Importing react-router-dom
import { Link } from 'react-router-dom'
// Importing styles
import './../styles/components/banner.scss'

const Banner = () => {
  return (
    <main className='banner'>
        <div className='banner__container py-10'>
          <div className='banner__content'>
            <h2> Let's dive in music world</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque quasi temporibus ipsum eaque perferendis suscipit, porro eos, non quisquam molestias accusantium, vero aliquam officia ipsam magni adipisci aspernatur fugit!</p>
            <Link to={'/product-store'} className='btn--banner'>Shop Now</Link>
          </div>
        </div>
    </main>
  )
}

export default Banner