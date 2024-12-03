import { useEffect, useState } from "react";
import PopularProduct from "./PopularProduct";
import { Link } from "react-router-dom";
import { PiCoffee } from "react-icons/pi";

const PopularProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/coffee")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    return (
        <section className="max-w-7xl mx-auto p-5 my-10 sm:my-16">

            <div className="text-center space-y-3 mb-10">
                <p className="sip-savor font-Raleway text-[#1B1A1A]">Sip & Savor</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#331A15] font-Rancho font-semibold">Our Popular Products</h2>
                <Link to="/addCoffee" className="inline-block">
                    <button className="px-4 py-1 bg-[#E3B577] border-2 border-[#331A15] text-white font-Rancho text-xl rounded-md flex items-center gap-1"> <p>Add Coffe</p> <PiCoffee className="text-[#331A15]"/></button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                products.map(product => <PopularProduct
                    key={product._id}
                    product={product}
                ></PopularProduct>)
            }
            </div>           
        </section>
    );
};

export default PopularProducts;