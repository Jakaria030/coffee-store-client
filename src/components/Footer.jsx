import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            {/* footer top */}
            <section className="bg-[#F5F5F5] pt-8 sm:pt-10 lg:pt-12 mt-8 md:mt-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 p-5">
                    {/* left side */}
                    <div className="basis-1/2 space-y-5">
                        <div className="space-y-3">
                            <img className="size-14 sm:size-16 lg:size-20" src={logo} alt="Logo" />
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Rancho text-[#331A15]">Espresso Emporium</h2>
                            <p className="font-Raleway text-[#1B1A1A] w-3/4">Always ready to be your friend. Come & Contact with to share your memorable memories to share with your best companion.</p>
                        </div>

                        <div className="flex items-center gap-5">
                            <FaFacebook className="text-2xl text-[#331A15]"></FaFacebook>
                            <FaTwitter className="text-2xl text-[#331A15]"></FaTwitter>
                            <FaInstagram className="text-2xl text-[#331A15]"></FaInstagram>
                            <FaLinkedin className="text-2xl text-[#331A15]"></FaLinkedin>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-Rancho font-semibold text-[#331A15]">Get in Touch</h3>
                            <div className="flex items-center gap-3">
                                <IoCall className="text-lg text-[#331A15]"></IoCall>
                                <p className="text-[#1B1A1A]">+8801533 333 333</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdEmail className="text-lg text-[#331A15]"></MdEmail>
                                <p className="text-[#1B1A1A]">info@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaLocationDot className="text-lg text-[#331A15]"></FaLocationDot>
                                <p className="text-[#1B1A1A]">72, Wall Streat, Daka</p>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="basis-1/2 flex flex-col justify-center space-y-3">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-Rancho font-semibold text-[#331A15]">Connect with Us</h2>
                        <form className="space-y-3">
                            <input type="text" placeholder="Name" className="input input-ghost w-full bg-white font-Raleway" />
                            <input type="email" placeholder="Email" className="input input-ghost w-full bg-white font-Raleway" />
                            <textarea className="textarea textarea-ghost w-full bg-white font-Raleway" placeholder="Message"></textarea>
                            <button className="px-4 py-2 rounded-full border border-[#331A15] text-[#331A15] font-semibold font-Raleway">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* footer bottom */}
            <section className="bg-footer-img bg-cover bg-center p-5">
                <p className="text-center text-xl font-Rancho py-2 text-white">Copyright Espresso Emporium! All Right Reserved</p>
            </section>
        </footer>
    );
};

export default Footer;