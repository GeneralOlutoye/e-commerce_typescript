import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Props } from '../Props/props'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Badge } from 'antd'
import Input from 'antd/es/input'
import { CartDrawer } from '../Components/cartDrawer'

export const EcommerceLayout: React.FC<Props.LayoutProps> = (prop: any) => {

  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const filterProducts = (searchValue: any) => {
    prop.children.props.products.filter((x: any) => x === searchValue)

  }

  return (
    <div>
      <header className='w-full h-[70px] shadow-lg flex items-center justify-between px-36 py-5'>
        <Link to='/'
          className='font-extrabold text-[1.5rem]'
        >
          OLUTOYE STORES
        </Link>
        <ul className="flex gap-10 ">
          <NavLink to={"discover"}>Category</NavLink>
          <NavLink to={"discover"}>Product</NavLink>
          <NavLink to={"discover"}>About us</NavLink>
          <NavLink to={"discover"}>Contact us</NavLink>
        </ul>
        <div>
          <Input
            onChange={(e) => filterProducts(e.target.value)}
            placeholder='Search product'
          />
        </div>
        <div>
          <Badge count={0} showZero >
            <AiOutlineShoppingCart
              onClick={() => setOpenDrawer(!openDrawer)}
              className='text-[2rem]' />
          </Badge>
          <CartDrawer showDrawer={openDrawer} closeDrawer={() => setOpenDrawer(!openDrawer)} />
        </div>
      </header>
      <main className='px-20 py-20'>{prop.children}</main>
    </div>
  )
}
