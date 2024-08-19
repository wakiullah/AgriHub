import React from 'react'
import Products from '../../components/Products.jsx/Products'
import Button from '../../components/SmallComponents/Button'
import Input from '../../components/SmallComponents/Button'
import InputButton from '../../components/SmallComponents/Button'

export default function ProductDetails() {
    return (
        <>
            <div className='w-full px-10 mx-auto grid grid-cols-2 gap-4 mt-32'>
                <div className='pr-20 mt-10'>
                    <p className='text-gray-500 mb-5'>Travel / Backpack</p>
                    <h2 className='font-bold text-4xl'>Everyday Ruck Snack</h2>
                    <div className='flex mt-5 mb-5'>
                        <h4 className='mr-4'>$3oo    </h4>
                        {/* <Rating value={4} readonly /> */}
                    </div>
                    <p className='text-gray-700 mb-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam libero error necessitatibus blanditiis repudiandae vero? Molestiae eligendi qui minima ducimus soluta, at quidem quos iusto suscipit reiciendis nostrum cum. Facere.</p>
                    <div className='flex '>
                        <svg className="of si uw ayd w-5 text-custom-primary  mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" bis_size="{&quot;x&quot;:34,&quot;y&quot;:328,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:66,&quot;abs_y&quot;:5208}"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" bis_size="{&quot;x&quot;:37,&quot;y&quot;:332,&quot;w&quot;:13,&quot;h&quot;:11,&quot;abs_x&quot;:69,&quot;abs_y&quot;:5212}"></path></svg>
                        <p>In stock and ready to ship</p>
                    </div>
                    <h4 className='mt-5 text-xl font-medium'>Size:</h4>
                    <div className='flex gap-5 mt-3 mb-6'>
                        <p className='rounded border px-2 py-1'>Small</p>
                        <p className='rounded border px-2 py-1'>Medium</p>
                        <p className='rounded border px-2 py-1'>Large</p>
                        <p className='rounded border px-2 py-1'>Upper</p>
                    </div>
                    <InputButton text={"Add to Cart!"} />
                </div>
                <div>
                    <img className='rounded-lg' src="https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg" alt="" />
                </div>
            </div>
            <div className='mt-32'>
                <h2 className='text-center mb-8 text-3xl font-semibold'>More Products</h2>
                <Products />
            </div>
        </>
    )
}