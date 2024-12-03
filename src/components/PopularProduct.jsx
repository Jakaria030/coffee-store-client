import { IoEyeOutline, IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PopularProduct = ({ product, products, setProducts }) => {

    const handleDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if(result.isConfirmed){
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffe has been deleted.",
                            icon: "success"
                        });
                        
                        const remainingCoffee = products.filter(coffee => coffee._id !== _id);

                        setProducts(remainingCoffee);
                    }
                })
            }
          });
    };

    return (
        <div className="flex flex-row gap-5 bg-[#F5F4F1] p-4 rounded-md">
            <div>
                <img src={product.photoURL} alt="Coffe Image" />
            </div>
            <div className="flex-grow flex flex-col justify-center">
                <p className="font-Raleway">
                    <span className="font-semibold text-[#1B1A1A]">Name: </span>
                    <span className="text-[#5C5B5B]">{product.name}</span>
                </p>
                <p className="font-Raleway">
                    <span className="font-semibold text-[#1B1A1A]">Chef: </span>
                    <span className="text-[#5C5B5B]">{product.chef}</span>
                </p>
                <p className="font-Raleway">
                    <span className="font-semibold text-[#1B1A1A]">Price: </span>
                    <span className="text-[#5C5B5B]">{product.price} Taka</span>
                </p>
            </div>
            <div className="flex flex-col justify-center mx-5 space-y-3">
                <Link to={`/details/${product._id}`}>
                    <button className="p-1 rounded-sm bg-[#D2B48C]"><IoEyeOutline className="text-lg text-white" /></button>
                </Link>
                <Link to={`/updateCoffee/${product._id}`}><button className="p-1 rounded-sm bg-[#3C393B]"><IoPencil className="text-lg text-white" /></button></Link>
                <button onClick={() => handleDelete(product._id)} className="p-1 rounded-sm bg-[#EA4744]"><MdDelete className="text-lg text-white" /></button>
            </div>
        </div>
    );
};

export default PopularProduct;