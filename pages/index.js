import React from 'react'
import { HeroBanner, Product, FooterBanner } from '@/components'
import { client } from '@/sanity/client'

const Home = ({ products, banner }) => {
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]} />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variants</p>
      </div>
      <div className='products-container'>
        {
          products?.map((product => <Product key={product._id} product={product} />))
        }
      </div>
      <FooterBanner footerBanner={banner.length && banner[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  return {
    props: { products, banner }
  }
}

export default Home