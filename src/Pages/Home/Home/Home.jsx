import Banner from "../Banner/Banner";
import ExperienceJobs from "../ExperienceJobs/ExperienceJobs";
import FresherJob from "../FresherJob/FresherJob";
import Questions from "../QuestionSection/Questions";
import TopCompany from "../TopCompany/TopCompany";
import MyProfile from "./MyProfile/MyProfile";

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <FresherJob></FresherJob>
                  <ExperienceJobs></ExperienceJobs>
                  <TopCompany></TopCompany>
                  <MyProfile></MyProfile>
                  <Questions></Questions>
            </div>
      );
};

export default Home;