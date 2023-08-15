import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/animation_llbtaaxw.json";
const Contact = () => {
      return (
            <div>
                  <div>

                        <p className="font-bold italic text-emerald-600 mt-10 text-3xl text-center">Get in touch</p>

                        <div className="my-10 flex gap-5">
                              <div
                                    className="mt-10 w-1/2 flex md:flex-row flex-col
                                             gap-6 bg-blue-200 md:p-6 p-2 rounded-lg mx-auto"
                              >
                                    <form className="flex flex-col flex-1 gap-5">
                                          <input type="text" name="from_name" placeholder="Your Name" className="px-2 py-3 text-black" />
                                          <input type="Email" name="email" className="px-2 py-3 text-black"
                                                placeholder="Your Email Address" />
                                          <textarea placeholder="Your Message" name="message" className="px-2 py-1 text-black" rows={10}></textarea>
                                          <input type="submit" className="flex group justify-center items-center mx-auto w-fit my-2 py-3 px-6 rounded-md bg-green-300 font-semibold cursor-pointer" value="Let's Talk" />
                                    </form>

                              </div>

                              <div>
                              <Lottie className="w-full mr-10" animationData={groovyWalkAnimation} loop={true} />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Contact;