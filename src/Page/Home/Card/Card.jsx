import { CgMathPlus } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { FaBagShopping, FaQuoteLeft } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdPlace } from "react-icons/md";


const Card = () => {
    return (
        <div  className="p-5 md:p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {/* 1st div  */}
                <div className="border border-[#8162A2] rounded-md">
                    <div className="flex gap-2  items-center pt-4 pl-3 ">
                        <IoIosPeople className="text-[#8162A2]" />
                        <h3 className="font-bold">People</h3>
                    </div>
                    <p className="p-3 pb-3">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>

                    <button className="btn m-3 border btn-xs border-[#8162A2]">Connect</button>
                </div>
                {/* 2nd div  */}
                <div className="border border-[#8162A2] rounded-md">
                    <div className="flex  gap-2 items-center pt-4 pl-3 ">
                        <MdPlace className="text-[#77943D]" />
                        <h3 className="font-bold" >Place</h3>
                    </div>
                    <p className="p-3 pb-3">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>


                    <button className="btn m-3 border btn-xs border-[#8162A2]">Meet up</button>
                </div>
                {/* 3rd div  */}
                <div className="border border-[#8162A2] rounded-md">
                    <div className="flex gap-2  items-center pt-4 pl-3 ">
                        <FaBagShopping className="text-[#B8505D]" />
                        <h3 className="font-bold">Product</h3>
                    </div>
                    <p className="p-3 pb-3">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>

                    <button className="btn m-3 border btn-xs border-[#8162A2]">Connect</button>
                </div>
                {/* 4th div  */}
                <div className="border border-[#8162A2] rounded-md">
                    <div className="flex gap-2  items-center pt-4 pl-3 ">
                        <CiCalendarDate className="text-[#3C94C8]" />
                        <h3 className="font-bold">Program</h3>
                    </div>
                    <p className="p-3 pb-3">Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>

                    <button className="btn m-3 border btn-xs border-[#8162A2]">Attend</button>
                </div>

            </div>

            {/* 5th div  */}

            <div className="border bg-[F8FDFF] border-[#8162A2] rounded-md mt-16 mb-10">
                <div className="flex gap-2  items-center pt-4 pl-3 ">
                    <div className="bg-[#3C94C8] rounded-full p-2">
                        <CgMathPlus className="text-white font-bold" />
                    </div>

                    <h3 className="font-bold ">Add Your own</h3>
                </div>
                <p className="p-3 pb-3">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>

                <button className="btn m-3 border btn-xs border-[#8162A2]">Add new</button>
            </div>

            {/* 6th div  */}

            <div className="border bg-[#F7F5F9] border-[#8162A2] rounded-md mt-16 mb-10">
                <div className="flex gap-2  items-center pt-4 pl-3 ">
                    <div className="bg-[#8162A2] rounded-full p-2 ">
                        <FaQuoteLeft className="text-white" />
                    </div>
                    <h3 className="font-bold">Testimonials</h3>
                </div>
                <p className="p-3 pb-3">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>


            </div>

        </div>
    );
};

export default Card;