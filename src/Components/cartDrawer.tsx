import { Drawer } from 'antd'
import React from 'react'
import { Props } from '../Props/props'

export const CartDrawer:React.FC<Props.CartDrawerProps> = (props: Props.CartDrawerProps) => {
  return (
    <Drawer open={props.showDrawer} closeIcon={null} onClose={props.closeDrawer}>

    </Drawer>
  )
}
