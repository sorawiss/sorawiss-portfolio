'use client'
import { useEffect, useState } from "react";


const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#projects" },
    { name: "Personal Projects", href: "#design" },
    { name: "Contact", href: "#contact" },
]


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);


    return (
        <nav className="fixed top-0 w-full z-50 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-ball-primary">
                        sorawiss
                    </a>

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
        </nav>
    );
};
