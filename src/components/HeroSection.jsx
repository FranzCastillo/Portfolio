"use client";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";


export default function HeroSection() {
    const t = useTranslations('Hero');

    return (
        <section>
            <div className={"grid mt-2 grid-cols-1 sm:grid-cols-12"}>
                <div className={"col-span-7 place-self-center text-center sm:text-left"}>
                    <h1 className={"text-white mb-4 text-4xl lg:text-6xl font-extrabold"}>
                        <span className={"text-[#89e219]"}>{t("title")}</span><br/>
                        <TypeAnimation
                            sequence={[
                                'Francisco',
                                4000,
                                t("roles.student"),
                                2500,
                                t("roles.software-engineer"),
                                2500,
                                t("roles.ai-enthusiast"),
                                2500,
                                t("roles.tech-lover"),
                                2500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            preRenderFirstString={true}
                        />
                    </h1>
                    <p className={"text-[#A1AFAC] text-base sm:text-lg lg:text-xl mb-6"}>
                        {t.rich("description",{
                            age: () => new Date().getFullYear() - 2002,
                        })}
                    </p>
                    <div>
                        <button className={"text-black font-semibold px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#89e219] hover:bg-[#58cc02]"}>
                            {t("more-button")}
                        </button>
                        <button
                            className={"px-6 py-3 w-full font-semibold sm:w-fit rounded-full bg-transparent hover:bg-[#1f333b] text-[#A1AFAC] border border-[#A1AFAC] mt-3"}>
                            {t("cv-button")}
                        </button>
                    </div>
                </div>
                <div className={"col-span-5 place-self-center mt-4 lg:mt-0"}>
                    <div className={"bg-[#1f333b] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative overflow-hidden"}>
                        <Image
                            src={"/images/DuolingoAvatar.png"}
                            alt={"hero image"}
                            className={"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-none lg:w-[650px]"}
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
