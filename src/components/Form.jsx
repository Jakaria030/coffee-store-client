
const Form = ({ controlForm }) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;

        const newCoffee = { name, chef, supplier, taste, category, details, price, photoURL };

        // console.log(addnewCoffee);
        // console.log(controlForm.id);

        if(controlForm.id === "addCoffeeForm"){
            // send data to add
            fetch("http://localhost:5000/coffee", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newCoffee)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert("Insert Successfully.");
                    form.reset();
                }
            })
        }else{
            // send data to update
        }

    };

    return (
        <div className="bg-[#F4F3F0] rounded-md py-8 md:py-16 p-5">
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-5">
                <h2 className="text-3xl sm:text-4xl text-[#374151] font-Rancho font-bold">{controlForm.title}</h2>
                <p className="font-Raleway text-[#1B1A1A]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <div className="max-w-5xl mx-auto">
                <form onSubmit={handleFormSubmit} className="space-y-3">
                    {/* name and chef row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                    </div>

                    {/* supplier and taste row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                    </div>

                    {/* category and details row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                    </div>

                    {/* price and photo url row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter coffee price" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Enter photo URL" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                    </div>

                    {/* submit button row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control mt-2">
                            <button className="py-2 rounded-sm font-semibold text-lg text-[#331A15] bg-[#D2B48C] font-Raleway">{controlForm.button}</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Form;

// https://i.ibb.co.com/HCtgVsZ/1.png
// https://i.ibb.co.com/5T8BWQp/2.png
// https://i.ibb.co.com/qDBJt2n/3.png
// https://i.ibb.co.com/bgzSBfs/4.png
// https://i.ibb.co.com/N7Bpy0W/5.png
// https://i.ibb.co.com/mHjw5xN/6.png