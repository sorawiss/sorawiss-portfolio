'use client'
import { useEffect, useState } from "react";


const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#projects" },
    { name: "Contact", href: "#contact" },
]


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);


    return (
        <nav className="fixed top-0 w-screen z-50 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className=" container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-ball-primary">
                        sorawiss
                    </a>

                    <div
                        className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-ball-primary"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? "\u2715" : "\u2630"}
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-ball-primary hover:opacity-50 transition-opacity duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center transition-all duration-300 ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"
                    }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl font-bold text-white my-4 hover:opacity-50 transition-opacity duration-300"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};
