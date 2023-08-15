import ToggleButton from "../Togglebutton/Togglebutton";
const Banner = () => {
      return (
            <div className='md:flex my-container mb-10'>
                  <div className='mt-16 w-auto-fit ml-5'>
                        <h1 className='text-[#1A1919] text-7xl leading-snug text-left' >One Step <br /> Closer To Your <br /> <span className='text-[rgba(152,115,255,1)]'> Dream Job</span></h1>
                        <p className='text-[#757575] font-normal my-5 text-lg'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                        <ToggleButton></ToggleButton>
                  </div>
                  
                  <div>
                        <img className='h-fit w-fit' src="https://i.ibb.co/6g8PkbK/P3-OLGJ1-copy-1.png/>" />
                  </div>
            </div>
      );
};

export default Banner;