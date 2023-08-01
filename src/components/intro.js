import React from "react";
import vid2 from "../stockvid/children hope acad.jpg"
import vid3 from "../stockvid/rajpet kids.webp"
import { Carousel } from "@material-tailwind/react";


function Intro()
 {
    


    
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row">

                <div className=" ml-10 mt-20 w-[500px]">
                    <img class=" h-[600px] " src={vid2} />
                </div>
                <div className=" mt-16 ml-18 w-[1000px] font-bold text-3xl flex flex-col ">
                    <p>
                        Total Number of Primary Schools in India is 0.664 million in latest years. Total Number of Upper Primary Schools in India is 0.219 million.
                        The Population in the age group of 6-14 years is 193 Million.
                        Total Secondary and Senior Secondary Schools is 0.133 million and Enrollment is 30.5 million respectively.
                    </p> 

                    <div className=" ml-20 mt-16 w-[800px]">
                        <Carousel className="rounded-xl">
                            <img
                                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>
                    </div>
                </div>


            </div>




        </div>
    );
}

export default Intro;