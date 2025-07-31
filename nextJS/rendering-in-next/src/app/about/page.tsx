import { cookies } from "next/headers";

/** For dynamic rendering */
// const AboutPage = async () => {
// 	const cookieStore = await cookies();
// 	const theme = cookieStore.get('theme');
// 	console.log(`Theme in About server component`, theme);
// 	return <h1>About page {new Date().toLocaleTimeString()}</h1>;
// };

/** Initial component */
const AboutPage = () => {
    console.log(`About server component`);
    return <h1>About page {new Date().toLocaleTimeString()}</h1>;
};

export default AboutPage;
