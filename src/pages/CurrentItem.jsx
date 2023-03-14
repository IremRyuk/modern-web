import React from 'react'
import { Link } from 'react-router-dom'

export default function CurrentItem({main}) {
  return (
    <Link className='currentItem' to={`/selectedItem/${main.id}`}>
        <img src={main.image} className='cur-img' alt='ShopMaster' />
        <div className='cur-descr'>
        <p className='cur-descr-par'><b>Name</b>: {main.title}</p>
        <br />
        <p className='cur-descr-par'><b>Categories</b>: {main.category}</p>
        <br />
        <p className='cur-descr-par'><b>Price</b>: {main.price} $</p>
        </div>
    </Link>
  )
}
