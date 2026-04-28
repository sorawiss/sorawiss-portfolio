'use client'

import { useEffect, useState } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#selected-work" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-ball-white/92 backdrop-blur-sm">
            <div className="page-shell">
                <div className="flex h-16 items-center justify-between">
                    <a href="#home" className="font-mono text-xs uppercase tracking-[0.28em] text-ball-primary">
                        Sorawiss
                    </a>

                    <button
                        type="button"
                        className="relative z-50 text-xs uppercase tracking-[0.28em] text-ball-primary md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? "Close" : "Menu"}
                    </button>

                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs uppercase tracking-[0.18em] text-ball-primary/60 transition-colors duration-300 hover:text-ball-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-ball-white transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="my-4 text-2xl tracking-[-0.04em] text-ball-primary transition-opacity duration-300 hover:opacity-55"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};
