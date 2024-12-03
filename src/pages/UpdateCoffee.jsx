import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";
import Form from "../components/Form";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, chef, supplier, taste, category, details, price, photoURL} = coffee;
    const controlForm = {
        id: "updateCoffeeForm",
        title: "Update Coffee",
        button: "Update Coffee",
        _id, name, chef, supplier, taste, category, details, price, photoURL
    };
    return (
        <section className="max-w-7xl mx-auto">
            <div className="inline-block py-8">
                <Link to="/" className="flex items-center gap-2">
                    <GoArrowLeft className="text-2xl font-Rancho font-bold"></GoArrowLeft>
                    <h3 className="text-xl font-Rancho font-bold">Back to home</h3>
                </Link>
            </div>

            <Form 
                controlForm = {controlForm}
            ></Form>
        </section>
    );
};

export default UpdateCoffee;