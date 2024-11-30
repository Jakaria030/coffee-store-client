import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const UpdateCoffee = () => {

    const controlForm = {
        id: "updateCoffeeForm",
        title: "Update Coffee",
        button: "Update Coffee"
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