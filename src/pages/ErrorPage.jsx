import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import image404 from "../assets/404.gif";

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <section className="max-w-7xl mx-auto">
                <div className="w-32 mx-auto py-8">
                    <Link to="/" className="flex items-center justify-center gap-2 ">
                        <GoArrowLeft className="text-2xl font-Rancho font-bold"></GoArrowLeft>
                        <h3 className="text-xl font-Rancho font-bold">Back to home</h3>
                    </Link>
                </div>

                <div className="max-w-4xl mx-auto">
                    <img className="w-full" src={image404} alt="Image 404" />
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;