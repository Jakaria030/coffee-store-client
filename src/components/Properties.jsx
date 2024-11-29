import coffee from "../assets/4.png";
import badge from "../assets/5.png";
import grades from "../assets/6.png";
import roasting from "../assets/7.png";

const Properties = () => {
    return (
        <section className="bg-[#ECEAE3] py-5 sm:py-8">
            <div className="max-w-7xl mx-auto p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-2 text-center sm:text-left">
                        <img className="mx-auto sm:mx-0" src={coffee} alt="Coffee" />
                        <h3 className="text-2xl sm:text-3xl font-Rancho font-semibold text-[#331A15]">Awesome Aroma</h3>
                        <p className="font-Raleway text-[#1B1A1A]">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>

                    <div className="space-y-2 text-center sm:text-left">
                        <img className="mx-auto sm:mx-0" src={badge} alt="Badge" />
                        <h3 className="text-2xl sm:text-3xl font-Rancho font-semibold text-[#331A15]">High Quality</h3>
                        <p className="font-Raleway text-[#1B1A1A]">We served the coffee to you maintaining the best quality</p>
                    </div>

                    <div className="space-y-2 text-center sm:text-left">
                        <img className="mx-auto sm:mx-0" src={grades} alt="Grades" />
                        <h3 className="text-2xl sm:text-3xl font-Rancho font-semibold text-[#331A15]">Pure Grades</h3>
                        <p className="font-Raleway text-[#1B1A1A]">The coffee is made of the green coffee beans which you will love</p>
                    </div>

                    <div className="space-y-2 text-center sm:text-left">
                        <img className="mx-auto sm:mx-0" src={roasting} alt="Roasting" />
                        <h3 className="text-2xl sm:text-3xl font-Rancho font-semibold text-[#331A15]">Proper Roasting</h3>
                        <p className="font-Raleway text-[#1B1A1A]">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Properties;