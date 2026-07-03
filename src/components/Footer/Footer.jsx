import { useState } from 'react'
import { ChevronDown } from "lucide-react";

function Footer() {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("English");

    const links = [
        ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
        ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"],
        ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
        ["Media Centre", "Terms of Use", "Contact Us"]
    ];

    return (
        <footer className="bg-black text-gray-400 px-10 py-12">

            {/* Email Section */}
            <div className="text-center mb-16">

                <h3 className="text-xl text-white mb-6">
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>

                <div className="flex justify-center gap-3 flex-col md:flex-row">

                    <input
                        type="email"
                        placeholder="Email address"
                        className="bg-zinc-900 border border-gray-600 px-5 py-4 w-full md:w-[45%] rounded text-white"
                    />

                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-xl">
                        Get Started 〉
                    </button>

                </div>

            </div>


            {/* Call */}
            <p className="mb-10">
                Questions? Call{" "}
                <u>000-800-919-1743</u>
            </p>


            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {links.map((column, index) => (
                    <div key={index}>

                        {column.map((item, i) => (
                            <p
                                key={i}
                                className="underline mb-5 cursor-pointer hover:text-white"
                            >
                                {item}
                            </p>
                        ))}

                    </div>
                ))}

            </div>


            {/* Language Button */}
            <div className="flex items-center">
                <select className="bg-black text-white border border-white rounded px-4 py-2">
                    <option>English</option>
                    <option>Hindi</option>
                </select>

            </div>


            {/* Country */}
            <p className="mt-8">
                Netflix India
            </p>
            <p> This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

        </footer>
    );
}

export default Footer;