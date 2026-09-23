import { socialLinks, quickLinks, sitemapLinks } from "../data/data";
import Animated from "../components/Animated";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative mt-44 overflow-hidden px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* Main Footer Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-10">

                    {/* Column 1 - Brand */}
                    <div className="flex flex-col items-start">

                        <Animated>
                            <img
                                src="/assets/logo.svg"
                                alt="Restro"
                                className="w-32 h-auto"
                            />
                        </Animated>

                        <Animated delay={0.2}>
                            <p className="mt-5 text-sm leading-6 text-zinc-600 max-w-xs">
                                Serving freshly prepared dishes with authentic
                                flavors, premium ingredients and exceptional
                                hospitality every day.
                            </p>
                        </Animated>

                        {/* Social Links */}
                        <div className="flex items-center gap-2 mt-6">

                            {socialLinks.map((item, index) => (
                                <Animated
                                    key={index}
                                    delay={index * 0.05}
                                >
                                    <a
                                        href={item.href}
                                        className="size-8 rounded-full border border-slate-300
                                        grid place-content-center
                                        hover:bg-slate-100
                                        transition-colors"
                                    >
                                        {item.icon}
                                    </a>
                                </Animated>
                            ))}

                        </div>

                    </div>


                    {/* Column 2 - Quick Links */}
                    <div>

                        <p className="font-medium mb-5">
                            Quick Links
                        </p>

                        <div className="flex flex-col gap-2.5">

                            {quickLinks.map((link, index) => (
                                <Animated
                                    key={link.name}
                                    delay={index * 0.05}
                                >
                                    <a
                                        href={link.href}
                                        className="text-sm text-zinc-600
                                        hover:text-orange-500
                                        transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </Animated>
                            ))}

                        </div>

                    </div>


                    {/* Column 3 - Get in Touch */}
                    <div>

                        <p className="font-medium mb-5">
                            Get in Touch
                        </p>

                        <div className="space-y-3">

                            <Animated>
                                <a
                                    href="mailto:hello@example.com"
                                    className="flex items-center gap-2
                                    text-sm text-zinc-600
                                    hover:text-orange-500
                                    transition-colors"
                                >
                                    <Mail
                                        size={16}
                                        className="shrink-0"
                                    />

                                    <span>
                                        hello@example.com
                                    </span>
                                </a>
                            </Animated>


                            <Animated delay={0.2}>
                                <a
                                    href="tel:866-856-8268"
                                    className="flex items-center gap-2
                                    text-sm text-zinc-600
                                    hover:text-orange-500
                                    transition-colors"
                                >
                                    <Phone
                                        size={16}
                                        className="shrink-0"
                                    />

                                    <span>
                                        866-856-8268
                                    </span>
                                </a>
                            </Animated>

                        </div>

                    </div>


                    {/* Column 4 - Sitemap */}
                    <div>

                        <p className="font-medium mb-5">
                            Sitemap
                        </p>

                        <div className="flex flex-col gap-2.5">

                            {sitemapLinks.map((link, index) => (
                                <Animated
                                    key={link.name}
                                    delay={index * 0.05}
                                >
                                    <a
                                        href={link.href}
                                        className="text-sm text-zinc-600
                                        hover:text-orange-500
                                        transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </Animated>
                            ))}

                        </div>

                    </div>

                </div>


                {/* Bottom Bar */}
                <div
                    className="border-t border-slate-200
                    py-4
                    flex flex-col sm:flex-row
                    justify-between
                    items-center
                    gap-3
                    text-sm
                    text-zinc-500"
                >

                    <p>
                        &copy; 2026. All Right Reserved
                    </p>

                    <p>
                        Designed by{" "}
                        <a
                            href="#"
                            className="hover:text-orange-500 transition-colors"
                        >
                            GreatStack
                        </a>
                    </p>

                </div>

            </div>


            {/* Watermark */}
            <div
                className="absolute inset-0
                flex justify-center
                items-end
                select-none
                -z-10
                pointer-events-none
                overflow-hidden"
            >
                <span
                    className="text-[180px] sm:text-[220px] lg:text-[300px] leading-none tracking-wide
                    font-urbanists font-semibold text-zinc-100/70"
                >
                    Restro
                </span>
            </div>

        </footer>
    );
};

export default Footer;