import { useState } from "react";
import { FaMinus,FaPlus} from "react-icons/fa";


const Question = ({ques}) => {
      const {question,answer}=ques
      const [toggle, setToggle] = useState(false);
      return (
            <article className="faq w-full">
                  <div className="upper">
                        <h3>{question}</h3>
                        <button
                              onClick={() => {
                                    setToggle(!toggle);
                              }}>
                              {toggle ? (
                                    <FaMinus className="icon"></FaMinus>
                              ) : (
                                    <FaPlus className="icon"></FaPlus>
                              )}
                        </button>
                  </div>
                  {toggle && <p>{answer}</p>}
            </article>
      );
      
};

export default Question;