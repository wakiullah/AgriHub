import React from 'react'
import ProductItem from '../ProductItem/ProductItem'

export default function Products() {
    return (
        <div className='w-full px-4 pt-3.5 pb-16 lg:p-6 xl:p-8'>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}
