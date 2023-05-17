import React from 'react'

function HeroSection() {
  return (
    <div>
        <section className="flex items-center min-h-screen justify-center bg-cover bg-no-repeat bg-center bg-hero-section">
            <div className="mx-auto max-w-[43rem]">
                <div className="text-center">
                    <p className="text-lg font-medium leading-8 text-media-500">Growth your business with us</p>
                    <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">We are the complete solution for your brand</h1>
                    <p className="mt-3 text-lg leading-relaxed text-slate-400">Give us your trust, we give you growth in your business. Like any great digital marketing we are only as good as the result of our recent work.</p>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                    <a href="/" className="rounded-md bg-media-500 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Get Started</a>
                    <a href="/" className="rounded-md border border-slate-200 px-5 py-3 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black">Learn More</a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection