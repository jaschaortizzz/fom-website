import React from 'react'

function About() {
  return (
    <div>
        <section className="relative pt-12 bg-black">

                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-white">
                                About Us
                            </h2>
                        </div>
                    </div>
                </div>

            <div className="items-center flex flex-wrap p-6">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." className="max-w-full rounded-lg shadow-lg" src="/images/team-img.jpg"/>
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                        <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-media-500 mt-8">
                            <i className="fas fa-rocket text-xl" />
                        </div>
                        <h3 className="text-3xl text-white font-semibold">A growing company</h3>
                        <p className="mt-4 text-lg leading-relaxed text-white">
                            The extension comes with three pre-built pages to help you get
                            started faster. You can change the text and images and you're
                            good to go.
                        </p>
                        <ul className="list-none mt-6">

                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-media-500 mr-3"><i className="fas fa-fingerprint" /></span>
                                    </div>
                                    <div>
                                        <h4 className="text-white">
                                            Carefully crafted components
                                        </h4>
                                    </div>
                                </div>
                            </li>

                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-media-500 mr-3"><i className="fab fa-html5" /></span>
                                    </div>
                                    <div>
                                        <h4 className="text-white">Amazing page examples</h4>
                                    </div>
                                </div>
                            </li>

                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-media-500 mr-3"><i className="far fa-paper-plane" /></span>
                                    </div>
                                    <div>
                                        <h4 className="text-white">Dynamic components</h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About