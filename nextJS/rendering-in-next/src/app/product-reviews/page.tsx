import { Suspense } from "react";

import Product from "@/components/product";
import Reviews from "@/components/reviews";

/** Without Suspense it will load everything first and then only render
 * ie after 6sec (6000 is set for promise resolve in Reviews). Try commenting Suspense below */
const ProductReviews = () => {
    return (
        <div>
            <h1>Product reviews</h1>
            <Suspense fallback={<p>Loading product details..</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading reviews details..</p>}>
                <Reviews />
            </Suspense>
        </div>
    );
};

export default ProductReviews;
