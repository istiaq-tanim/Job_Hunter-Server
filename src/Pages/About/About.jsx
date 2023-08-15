import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import image from "../../assets/istiaq.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  easing: 'ease-in-out',
            });


      }, []);
      return (
            <div name="about" className="max-w-screen-xl mx-auto h-screen">
                        <div className="pb-8">
                              <Fade className="text-4xl text-slate-600 font-bold inline mt-20 border-b-4 border-zinc-500 text-center" delay={1e3} cascade damping={1e-1}>
                                    About
                              </Fade>
                        </div>

                        <div className="flex justify-between gap-10">
                              <p className="text-lg pb-8 text-justify w-1/2">I am Kazi Istiaq Mahamud, a highly motivated MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a deep passion for web development. With one year of experience in the field, I have honed my skills and expertise to deliver outstanding results. I am committed to creating robust and scalable applications while ensuring exceptional user experiences.As a MERN stack developer, I possess a comprehensive understanding of each component of the stack. I am proficient in MongoDB, a NoSQL database, which allows me to design efficient and flexible data structures for web applications. Additionally, I am skilled in using Express.js to develop scalable server-side applications and RESTful APIs, ensuring smooth communication between the front-end and back-end.In terms of front-end development, I am proficient in React.js, a popular JavaScript library for building dynamic user interfaces. Leveraging React.js, I create interactive and responsive UI components that deliver seamless user experiences.
                              </p>
                              <div data-aos="fade-up" className="basis-1/2 sm:overflow-x-hidden">
                                          <img src={image} className="h-96 mx-auto object-contain rounded-2xl" alt="my-image" />
                              </div>
                        </div>
                  </div>
           
      );
};

export default About;
//