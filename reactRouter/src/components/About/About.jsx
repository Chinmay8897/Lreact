import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.pinimg.com/474x/e8/39/d8/e839d8ec6345fb9091f592b881882784.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers trying very hard to be corporate slaves in the tech industry
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Now that learning react has become very easy for beginners the tech industry has decided to give close to negative
                            opportunites to fresher by....
                        </p>
                        <p className="mt-4 text-gray-600">
                            ....stopping the use React in the applications and hiring those people who can type at 150+ WPM and can crack firewalls using "GO"
                            while also mass producing ML algos in their meantime.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}