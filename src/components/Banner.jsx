
const Banner = () => {
    return (
        <section className="bg-banner-img bg-cover bg-center py-10 md:py-28 lg:py-32 xl:py-64">
            <div className="max-w-7xl mx-auto flex justify-end p-5">
                <div className="max-w-2xl space-y-5 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white font-Rancho ">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="md:w-11/12 text-white font-Raleway">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="px-6 py-2 bg-[#E3B577] font-Rancho text-2xl font-medium">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;