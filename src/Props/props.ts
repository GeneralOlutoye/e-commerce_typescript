export namespace Props {
    export class LayoutProps {
        children?: any;
        pageTitle?: string;
    }

    export class CartDrawerProps {
        showDrawer?: boolean
        closeDrawer?: any
    }
    export class Rating {
        rate?: number;
        count?: number;
    }

    export class Product {
        id?: number;
        title?: string;
        description?: string;
        price?: number;
        category?: string;
        image?: string;
        rating?: Rating;
        quantity?: number;
    }

    export class ProductProps {
        products?: Array<Product>
        renderItem?: any
    }
}