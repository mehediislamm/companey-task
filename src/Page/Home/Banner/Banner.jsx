
import onepic from '../../../assets/1st.png'
import SignIn from '../../Sign in/SignIn';
const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F7F5F9] mb-10 '>
            {/* 1st div  */}
            <div className=' mt-5 p-5'>
                <h1 className='font-bold text-2xl  '>Explore your <span className='text-[#449ECC]'>hobby</span>  or <span className='text-[#8162A2]'>passion</span> </h1>
                <p className="pt-5">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                    <br />
                    <br />
                    If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride
                </p>
                {/* img */}
                <img src={onepic} alt="" />
            </div>
            {/* 2nd div */}
            <div className='md:ml-28'>
                <SignIn></SignIn>
            </div>
        </div>
    );
};

export default Banner;