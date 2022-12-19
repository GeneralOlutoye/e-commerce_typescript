/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, List, Rate, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import { error } from "console";
import React, { useCallback, useEffect, useState } from "react";
import { Notify } from "../../Components/notification";
import { EcommerceLayout } from "../../Layout/ecommerce-layout";
import { Props } from "../../Props/props";
import { Products } from "./products";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const LandingPage: React.FC = () => {
    const [products, setProducts] = useState<Props.Product>([] as any);
    
    const fetchProduct = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((error) => Notify(error as string, false));
        return response
    };

    useEffect(() => {
        fetchProduct()
    }, [])


    return (
        <EcommerceLayout pageTitle="Home">
            <Products products={Array.isArray(products) ? products : []} renderItem={(item: any) =>
                <List.Item>
                    <Card
                        bordered
                        className="h-[20rem] w-full flex flex-col justify-center hover:shadow-2xl"
                    >
                        <Skeleton loading={item.processing} avatar active>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{ height: 150, width: "80%" }}
                            />
                            <Rate
                                className="mb-3"
                                disabled
                                value=
                                {item.rating?.rate}
                            />
                            <Meta title={item.title} />
                            <b className="text-lg">₦ {item.price?.toFixed(2)}</b>
                            <Button
                                type="primary"
                                className="bg-[#1677ff] w-full mt-5 mb-5 py-5 flex items-center justify-center"
                            //   onClick={() => AddCart(item)}
                            >
                                <ShoppingCartOutlined /> Shop Now
                            </Button>
                        </Skeleton>
                    </Card>
                </List.Item>
            } />
        </EcommerceLayout>
    );
};
