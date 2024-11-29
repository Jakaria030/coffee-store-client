
const Form = () => {
    return (
        <div className="bg-[#F4F3F0] rounded-md py-8 md:py-16 p-5">
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-5">
                <h2 className="text-3xl sm:text-4xl text-[#374151] font-Rancho font-bold">Add New Coffee</h2>
                <p className="font-Raleway text-[#1B1A1A]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <div className="max-w-5xl mx-auto">
                <form className="space-y-3">
                    {/* name and chef row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter coffee name" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" placeholder="Enter coffee chef" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                    </div>

                    {/* supplier and taste row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" placeholder="Enter coffee supplier" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" placeholder="Enter coffee taste" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                    </div>

                    {/* category and details row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Enter coffee category" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Enter coffee details" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                    </div>

                    {/* photo url row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control">
                            <label className="label text-[#1B1A1A]">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Enter photo URL" className="input input-ghost w-full rounded-sm bg-white font-Raleway" />
                        </div>
                    </div>

                    {/* submit button row */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow form-control mt-2">
                            <button className="py-2 rounded-sm font-semibold text-lg text-[#331A15] bg-[#D2B48C] font-Raleway">Add Coffee</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Form;