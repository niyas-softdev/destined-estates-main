import { Parallax } from 'react-parallax';


const WhoWeAre = () => {
    return (
        <>
            <div className="text-gray-800">
                {/* 1st Section */}
                <Parallax
                    bgImage="/static/WhoWeAre/building1.jpg"
                    strength={400}
                    className="md:h-screen flex items-center justify-center "
                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
                >

                    <div className="bg-white bg-opacity-75 py-10 px-5 mx-4 md:w-2/3 rounded-lg text-left my-10 font-opensans">
                        <h1 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4">
                            Destined Estates
                        </h1>
                        <p className="text-lg md:text-lg lg:text-xl text-left !leading-relaxed">
                            Destined Estates is a leader in communications for Luxury Real Estate solutions that
                            support connectivity throughout the Globe with a single intent to deliver your
                            Destined Home in your Destined Hands.
                            <br />
                            <br />
                            Destined estates is a leading real estate firm in India specializing in Luxury residential &
                            Commercial real estate. Our origin as operators of high&#8208;end real estate business, allows us
                            to leverage unique operational expertise to merge luxury properties as per client
                            satisfaction. We put our own professionalism to work alongside our clients in nearly every
                            transaction ensuring strong alignment of interests.
                        </p>
                    </div>
                </Parallax>

                {/* 2nd Section */}
                <Parallax
                    bgImage="static/WhoWeAre/building-drone-shot1.jpg"
                    strength={300}
                    className="md:h-screen flex items-center saturate-50"
                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
                >
                    <div className='flex justify-start items-center'>
                        <div className="bg-white bg-opacity-75 py-10 px-5 mx-4 md:w-2/3 rounded-lg text-left my-10 font-opensans">
                            <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4">
                                Leveraging the Destined Estates Property Ecosystem
                            </h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-left">
                                One of the keys to our success is the Destined Estates Property ecosystem. Our network of
                                sales professionals, field agents, and operating employees in our businesses around the
                                spectrum provide us valuable information and insights into the shape shifting world of
                                luxury Real estate, on where the world is going and how it&#39;s changing. This helps inform
                                our clients on the current market standards and add value to the business we own.
                            </p>
                        </div>
                    </div>
                </Parallax>

                {/* 3rd Section */}
                <Parallax
                    bgImage="static/Assets/business-to-client.jpg"
                    strength={300}
                    className="md:h-screen flex items-center justify-start "
                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
                >
                    <div className="bg-white bg-opacity-75 py-10 px-5 mx-4 md:w-2/3 rounded-lg text-left my-10 font-opensans">
                        <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4">
                            Gathering Operational Intelligence
                        </h2>
                        <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-left">
                            Our operations in strategic locations around the city of Chennai, provide us with
                            data and insights into trends and changes in the market. You can count on our
                            client centric teams to deliver an efficient and predictable experience. Our in&#8208;house
                            teams of sales managers and rental specialists support your journey with us from
                            start to finish.
                        </p>
                    </div>
                </Parallax>

                {/* 4th Section */}
                <Parallax
                    bgImage="static/Assets/home3.jpg"
                    strength={300}
                    className="md:h-screen flex items-center justify-end"
                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}
                >
                    <div className='flex justify-start items-center'>
                        <div className="bg-white bg-opacity-75 py-10 px-5 mx-4 md:w-2/3 rounded-lg text-left my-10 font-opensans">
                            <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4">
                                Turning Insights into Action
                            </h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-left">
                                We leverage this intelligence to source, execute, manage and realize Properties for
                                the benefit of our clients and partners. With seasoned professionals on our side, we
                                have the expertise and scale to support even the most ambitious Customer goals.
                            </p>
                        </div>
                    </div>

                </Parallax>

                {/* 5th Section */}
                <Parallax
                    bgImage="static/WhoWeAre/confidence.jpeg"
                    strength={300}
                    className="md:h-screen flex items-center justify-start"
                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
                >
                    <div className="bg-white bg-opacity-75 py-10 px-5 mx-4 md:w-2/3 rounded-lg text-left my-10 font-opensans">
                        <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4">
                            Connecting with Confidence
                        </h2>
                        <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-left">
                            The Destined Estates Ecosystem drives competitive advantages in sourcing,
                            executing, managing, and realizing Properties. With a focus of maximizing efficiency
                            and streamlining processes, we are committed to leveraging technology, such as
                            online real estate portals, digital marketing platforms, our site locater online makes
                            up for reliable real estate site information, so the clients can make informed
                            decisions about their investments, monetary coverage and capacity goals.
                        </p>
                    </div>
                </Parallax>
            </div>
        </>
    );
};

export default WhoWeAre;
