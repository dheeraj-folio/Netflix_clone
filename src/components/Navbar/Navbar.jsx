import React from 'react'
import { useState } from 'react'
import { ChevronDown } from "lucide-react";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("English");
    return (
        <>
            <section className=' w-full h-screen '>
                <div
                    className="relative h-screen w-full bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/bg_img.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>

                    {/* Header */}
                    <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-5">
                        {/* Logo */}
                        <h1 className="text-red-600 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
                            NETFLIX
                        </h1>

                        {/* Right Side */}
                        <div className="flex items-center gap-2 sm:gap-4">

                            {/* Language Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border border-gray-400 rounded-md bg-black/40 text-white text-sm sm:text-base"
                                >
                                    <i className="fa-solid fa-language"></i>
                                    <span>{language}</span>
                                    <ChevronDown size={16} />
                                </button>

                                {open && (
                                    <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-md overflow-hidden shadow-lg z-50">
                                        <button
                                            onClick={() => {
                                                setLanguage("English");
                                                setOpen(false);
                                            }}
                                            className="w-full py-2 hover:bg-blue-600 hover:text-white"
                                        >
                                            English
                                        </button>

                                        <button
                                            onClick={() => {
                                                setLanguage("हिन्दी");
                                                setOpen(false);
                                            }}
                                            className="w-full py-2 hover:bg-blue-600 hover:text-white"
                                        >
                                            हिन्दी
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Sign In */}
                            <button className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-5 py-2 rounded-md font-semibold text-sm sm:text-base">
                                Sign In
                            </button>
                        </div>
                    </header>

                    {/* Hero Content */}
                    <main className="relative z-10 flex flex-col items-center justify-center text-center min-h-[85vh] px-4 sm:px-6">
                        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Unlimited movies,
                            <br />
                            shows, and more
                        </h1>

                        <p className="text-white text-lg sm:text-xl md:text-2xl mt-6">
                            Starts at ₹149. Cancel at any time.
                        </p>

                        <p className="text-white text-sm sm:text-base mt-6 max-w-2xl">
                            Ready to watch? Enter your email to create or restart your
                            membership.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full max-w-2xl">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-black/50 border border-gray-500 text-white px-5 py-4 rounded-md outline-none"
                            />

                            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md text-lg sm:text-xl font-semibold">
                                Get Started →
                            </button>
                        </div>
                    </main>

                </div>



            </section>
        </>
    )
}

export default Navbar
