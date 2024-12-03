import Banner from "../components/Banner";
import FollowUs from "../components/FollowUs";
import PopularProducts from "../components/PopularProducts";
import Properties from "../components/Properties";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Properties></Properties>
            <PopularProducts></PopularProducts>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;