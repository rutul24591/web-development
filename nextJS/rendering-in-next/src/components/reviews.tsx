/** This delay will work or mimic like fetching data */
const Reviews = async () => {
	await new Promise((resolve) => setTimeout(resolve, 4000));
	return <h1>Reviews Page</h1>;
};

export default Reviews;
