import cup1 from "../assets/8.png";
import cup2 from "../assets/9.png";
import cup3 from "../assets/10.png";
import cup4 from "../assets/11.png";
import cup5 from "../assets/12.png";
import cup6 from "../assets/13.png";
import cup7 from "../assets/14.png";
import cup8 from "../assets/15.png";

const FollowUs = () => {
    return (
        <section className="max-w-7xl mx-auto p-5 py-10">
            <div className="text-center mb-5 sm:mb-10">
                <p className="font-Raleway text-[#1B1A1A]">Follow Us Now</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Rancho font-semibold text-[#331A15]">Follow on Instagram</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="max-w-lg mx-auto rounded-lg">
                    <img className="w-full rounded-lg" src={cup1} alt="Cup-1" />
                </div>
                <div className="max-w-lg mx-auto rounded-lg">
                    <img className="w-full rounded-lg" src={cup2} alt="Cup-2" />
                </div>
                <div className="max-w-lg mx-auto rounded-lg">
                    <img className="w-full rounded-lg" src={cup3} alt="Cup-3" />
                </div>
                <div className="max-w-lg mx-auto rounded-lg">
                    <img className="w-full rounded-lg" src={cup4} alt="Cup-4" />
                </div>
                <div className="max-w-lg mx-auto rounded-lg">
                    <img className="w-full rounded-lg" src={cup5} alt="Cup-5" />
                </div>
                <div className="max-w-lg mx-auto rounded-lg">
                    <img className="w-full rounded-lg" src={cup6} alt="Cup-6" />
                </div>
                <div className="max-w-lg mx-auto rounded-lg">
                    <img className="w-full rounded-lg" src={cup7} alt="Cup-7" />
                </div>
                <div className="max-w-lg mx-auto rounded-lg">
                    <img className="w-full rounded-lg" src={cup8} alt="Cup-8" />
                </div>
            </div>
        </section>
    );
};

export default FollowUs;