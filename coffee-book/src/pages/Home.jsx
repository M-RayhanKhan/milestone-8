import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
    const categories = useLoaderData();
   
    return (
        <div>
            {/* baner section */}
            <Banner></Banner>
            <Heading title="Browser Coffee by category" subTitle='choose your category to browser through specific coffee that fit in your taste.'></Heading>
            {/* category tab section */}
            <Categories categories={categories}/>
            <Outlet></Outlet>
            {/* Dynamic nested component */}
        </div>
    );
};

export default Home;