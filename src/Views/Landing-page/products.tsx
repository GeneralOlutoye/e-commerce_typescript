import { List } from 'antd'
import React from 'react'
import { Props } from '../../Props/props'

export const Products: React.FC<Props.ProductProps> = (prop: Props.ProductProps) => {
    return (<div className="w-full px-10">
        <List
            className="w-full"
            grid={{
                gutter: 2,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 6,
            }}
            dataSource={prop.products}
            renderItem={prop.renderItem}
        />
    </div>
    )
}
