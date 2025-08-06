import { Typography } from "@material-tailwind/react";
import icon from "../assets/icon.png";

export default function Footer() {
    return (
        <>
            <Slogan />
            <footer className="w-full bg-gray-900 p-8 fade-in">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-900 text-center md:justify-between">
                    <img src={icon} alt="logo-ct" className="w-25" />
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <Typography
                                as="a"
                                href="/about"
                                color="white"
                                className="font-normal transition-colors hover:text-jmi-green focus:text-jmi-green hover-glow font-sans"
                            >
                                About Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="/contact"
                                color="white"
                                className="font-normal transition-colors hover:text-jmi-green focus:text-jmi-green hover-glow font-sans"
                            >
                                Contact Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="https://www.linkedin.com/company/soarx-jmi/"
                                color="white"
                                className="font-normal transition-colors hover:text-jmi-green focus:text-jmi-green hover-glow font-sans"
                            >
                                LinkedIn
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="https://www.instagram.com/soarxjmi/"
                                color="white"
                                className="font-normal transition-colors hover:text-jmi-green focus:text-jmi-green hover-glow font-sans"
                            >
                                Instagram
                            </Typography>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <Typography className="text-center font-normal text-jmi-green font-sans">
                    &copy; 2025 Soar JMI
                </Typography>
            </footer>
        </>
    );
}

function Slogan() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 fade-in">
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#58AF89] to-[#58AF89] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#58AF89] to-[#58AF89] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto w-full lg:mx-0 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-mono">Rise Together,Soar Higher</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
                    Empowering innovation, where ideas spark and technology ignites, defining the essence of Soar JMI's mission.
                    </p>
                </div>
            </div>
        </div>
    )
}
