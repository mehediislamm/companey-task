import { FaFacebook, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



const SignIn = () => {
    return (
        <div className="ml-14 md:ml-0">
            <div className=" flex gap-5 mb-5 mt-5 ">
                <div role="tablist" className="tabs tabs-bordered">
                    <a role="tab" className="tab">Sign In</a>
                    <a role="tab" className="tab tab-active">Join In</a>

                </div>
            </div>
            {/* google  */}
            <div className="flex justify-center gap-3 items-center border border-[#8162A2] w-96 rounded-md mb-5">
                <div>
                    <FcGoogle />
                </div>
                <div>
                    <h1>Continus with Google</h1>
                </div>
            </div>
            {/* Factbook  */}
            <div className="flex mb-5 justify-center gap-3 items-center border border-[#8162A2] w-96 rounded-md">
                <div>
                    <FaFacebook />
                </div>
                <div>
                    <h1>Continus with Fookbook</h1>
                </div>
            </div>

            {/* divider */}
            <div className="w-96">
                <div className="divider">Or connect with</div>
            </div>

            {/* from  */}

            <form action="">
                <div className="mb-4">
                    <input className="pl-5 border border-[#8162A2] w-96 rounded-md" placeholder="Email" type="email" name="" id="" />
                </div>
                <div>
                    <input className=" pl-5 border border-[#8162A2] w-96 rounded-md" placeholder="Password" type="password" name="" id="" />
                </div>
                {/* check book  */}
                <div className="flex justify-between mt-5 w-96">
                    {/* 1st div  */}
                    <div className="flex items-center gap-2">
                        <div className="">
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <h3>Remember me</h3>
                        </div>


                    </div>
                    {/* 2nd div  */}
                    <div className="flex items-center gap-2">
                        <FaLock />
                        <h3>Forget me</h3>
                    </div>
                </div>

            </form>
            <div className="w-96">
                <button className="btn btn-sm w-full mt-5  bg-[#8162A2]">Continue</button>

            </div>
        </div>
    );
};

export default SignIn;