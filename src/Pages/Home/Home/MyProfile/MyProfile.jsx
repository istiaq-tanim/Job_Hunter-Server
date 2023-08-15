import Projects from "./Projects";

const MyProfile = () => {
      
      return (
            <div>
                  <section className="pt-6 pb-10">
                        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                              <h3 className="text-3xl my-10 text-center text-blue-400 font-bold">My Profile</h3>
                              <div className="lg:grid grid-cols-2 gap-2 lg:gap-8">
                                    <div className="w-full px-5 lg:px-0 space-y-8">
                                          
                                          <iframe width="100%" height="380" src="https://player.vimeo.com/video/854599457?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="WIN_20230815_13_41_11_Pro"></iframe>

                                    </div>

                                    <div>
                                          <Projects></Projects>
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default MyProfile;



