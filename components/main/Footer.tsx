import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://github.com/Gunturaa" target="_blank" rel="noopener noreferrer">
                                <RxGithubLogo />
                            </a>
                            <span className="text-[15px] ml-[6px]">Gunturaa</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">_atmaaja</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaLinkedin />
                            <span className="text-[15px] ml-[6px]">Guntur Tri Atmaja</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">
                                I am a junior web developer and also a student at Amikom University.
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text
                            -[15px] ml-[6px]">I am currently learning about web development.</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">gunturhanabi222@gmail.com</span>
                        </p>

                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Genoss 2025 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;