/** This delay will work or mimic like fetching data */
const Product = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return <h1>Product Page</h1>;
};

export default Product;
