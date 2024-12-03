import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {

    const coffee = useLoaderData();

    return (
        <section className="max-w-7xl mx-auto">

            <div className="inline-block py-8">
                <Link to="/" className="flex items-center gap-2">
                    <GoArrowLeft className="text-2xl font-Rancho font-bold"></GoArrowLeft>
                    <h3 className="text-xl font-Rancho font-bold">Back to home</h3>
                </Link>
            </div>

            <div className="bg-[#F4F3F0] flex items-center rounded-md p-5 py-20">
                <div className="basis-1/2">
                    <img className="mx-auto" src={coffee.photoURL} alt="Coffee Image" />
                </div>
                <div className="basis-1/2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#331A15] font-Rancho font-semibold">NiceTies</h3>
                    <p className="font-Raleway">
                        <span className="text-[#1B1A1A] font-medium">Name: </span>
                        <span className="text-[#5C5B5B]">{coffee.name}</span>
                    </p>
                    <p className="font-Raleway">
                        <span className="text-[#1B1A1A] font-medium">Chef: </span>
                        <span className="text-[#5C5B5B]">{coffee.chef}</span>
                    </p>
                    <p className="font-Raleway">
                        <span className="text-[#1B1A1A] font-medium">Supplier: </span>
                        <span className="text-[#5C5B5B]">{coffee.supplier}</span>
                    </p>
                    <p className="font-Raleway">
                        <span className="text-[#1B1A1A] font-medium">Taste: </span>
                        <span className="text-[#5C5B5B]">{coffee.taste}</span>
                    </p>
                    <p className="font-Raleway">
                        <span className="text-[#1B1A1A] font-medium">Category: </span>
                        <span className="text-[#5C5B5B]">{coffee.category}</span>
                    </p>
                    <p className="font-Raleway">
                        <span className="text-[#1B1A1A] font-medium">Details: </span>
                        <span className="text-[#5C5B5B]">{coffee.details}</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Details;