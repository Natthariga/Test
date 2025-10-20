import React from 'react'
import Link from 'next/link';

function ProductCard({ probs }) {
    return (
        <div className='grid grid-cols-3 gap-3'>
            {probs.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                    <div className='cursor-pointer'>
                        <p>name: {product.title}</p>
                        <p>price: {product.price}</p>
                        <img src={product.image} />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default function ProductPage() {
    const products = [
        { id: 1, title: 'Product 1', price: 290, image: 'https://placehold.co/600x400/png' },
        { id: 2, title: 'Product 2', price: 590, image: 'https://placehold.co/600x400/png' },
        { id: 3, title: 'Product 3', price: 1200, image: 'https://placehold.co/600x400/png' },
    ];

    return (
        <div className="p-10">
            <ProductCard probs={products}/>
        </div>
    );
}