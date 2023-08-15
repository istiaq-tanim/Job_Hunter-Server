import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/animation_llbs7ltv.json";
import Question from "./Question";

const Questions = () => {
      const [questions,setQuestions]=useState([])
      useEffect(() => {
            fetch("https://job-portal-server-istiaq-tanim.vercel.app/questions")
                  .then(res => res.json())
                  .then(data => {
                       setQuestions(data)
                  })
      }, [])
      
      return (
            <div className="max-w-screen-xl px-2 mx-auto my-10">
                  <h2 className=" text-sky-500 my-5 font-bold text-3xl text-center">Blog Section</h2>
                  <div className="lg:flex gap-10">
                  <section className="faqs lg:w-3/5">
                        {questions.map((question) => (
                              <Question key={question._id} ques={question} />
                        ))}
                  </section>
                  <Lottie className="h-96 ml-10" animationData={groovyWalkAnimation} loop={true} />
                  </div>
            </div>
      );
};

export default Questions;