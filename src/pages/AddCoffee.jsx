import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const AddCoffee = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <Link to="/" className="flex items-center gap-2 py-8">
                <GoArrowLeft className="text-2xl font-Rancho font-bold"></GoArrowLeft>
                <h3 className="text-xl font-Rancho font-bold">Back to home</h3>
            </Link>

            <Form></Form>
        </section>
    );
};

export default AddCoffee;