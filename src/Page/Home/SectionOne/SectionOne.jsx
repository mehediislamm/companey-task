 import pictwo from '../../../assets/2nd.png'
const SectionOne = () => {
    return (
        <div>
             <div className=' mt-5 p-5'>
                <h1 className='font-bold text-2xl mb-5 '>  your <span className='text-[#449ECC]'>hobby</span>  Your <span className='text-[#8162A2]'>Community...</span> </h1>
                <button className='btn btn-xs bg-[#8162A2]'>Get started</button>
                {/* img */}
                <img src={pictwo} alt="" />
            </div>
        </div>
    );
};

export default SectionOne;