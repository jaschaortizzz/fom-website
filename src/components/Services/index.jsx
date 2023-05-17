import React from 'react'

function Services() {
  return (
    <div>
        <div className="p-20 bg-black">  
        <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               <span className="font-semibold text-lg text-media-500 mb-4 block">
               Our Services
               </span>
               <h2
                  className="font-bold text-3xl sm:text-4xl md:text-[40px] text-white">
                  What We Offer
               </h2>
            </div>
         </div>
      </div>
            <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">

                    <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-media-500">Social Media Marketing</h3>
                            <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                            <a href="/" className="block font-medium text-media-400">Know more</a>
                        </div>
                        <img src="/images/smm-img.jpg" className="ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-media-500">Web Development</h3>
                            <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                            <a href="/" className="block font-medium text-media-400">Know more</a>
                        </div>
                        <img src="/images/web-dev-img.jpg" className="ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-media-500">Email Marketing</h3>
                            <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                            <a href="/" className="block font-medium text-media-400">Know more</a>
                        </div>
                        <img src="/images/email-marketing-img.jpg" className="ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-media-500">Book Keeping</h3>
                            <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                            <a href="/" className="block font-medium text-media-400">Know more</a>
                        </div>
                        <img src="/images/book-keeping-img.jpg" className="ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Services