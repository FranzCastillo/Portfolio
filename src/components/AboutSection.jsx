"use client";
import React, {useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {useTranslations} from "next-intl";
import SkillDisplay from "@/components/SkillDisplay";
import CertificationDisplay from "@/components/CertificationDisplay";

const AboutSection = () => {
    const t = useTranslations("About");

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const TAB_DATA = [
        {
            id: "skills",
            content: (
                <div className={"flex flex-col gap-2"}>
                    <div className="collapse collapse-arrow bg-[#1f333b]">
                        <input type="radio" name="my-accordion-2"/>
                        <div className="collapse-title font-base text-white">
                            {t("skills.languages")}
                        </div>
                        <div className="collapse-content flex flex-row flex-wrap gap-4 w-full justify-center">
                            <SkillDisplay name={"Python"} imgPath={"/images/Python.jpg"}/>
                            <SkillDisplay name={"Java"} imgPath={"/images/Java.png"}/>
                            <SkillDisplay name={"JavaScript"} imgPath={"/images/JavaScript.png"}/>
                            <SkillDisplay name={"C#"} imgPath={"/images/CSharp.png"}/>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#1f333b]">
                        <input type="radio" name="my-accordion-2"/>
                        <div className="collapse-title font-base text-white">
                            {t("skills.web")}
                        </div>
                        <div className="collapse-content flex flex-row flex-wrap gap-4 w-full justify-center">
                            <SkillDisplay name={"NodeJS"} imgPath={"/images/Node.jpg"}/>
                            <SkillDisplay name={"React"} imgPath={"/images/React.png"}/>
                            <SkillDisplay name={"NextJS"} imgPath={"/images/Next.png"}/>
                            <SkillDisplay name={"Sass"} imgPath={"/images/Sass.png"}/>
                            <SkillDisplay name={"Bootstrap"} imgPath={"/images/Bootstrap.png"}/>
                            <SkillDisplay name={"Tailwind"} imgPath={"/images/Tailwind.png"}/>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#1f333b]">
                        <input type="radio" name="my-accordion-2"/>
                        <div className="collapse-title font-base text-white">
                            {t("skills.data")}
                        </div>
                        <div className="collapse-content flex flex-row flex-wrap gap-4 w-full justify-center">
                            <SkillDisplay name={"Python"} imgPath={"/images/Python.jpg"}/>
                            <SkillDisplay name={"PowerBI"} imgPath={"/images/PowerBI.png"}/>
                            <SkillDisplay name={"Tableau"} imgPath={"/images/Tableau.png"}/>
                            <SkillDisplay name={"Excel"} imgPath={"/images/Excel.png"}/>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#1f333b]">
                        <input type="radio" name="my-accordion-2"/>
                        <div className="collapse-title font-base text-white">
                            {t("skills.mlAI")}
                        </div>
                        <div className="collapse-content flex flex-row flex-wrap gap-4 w-full justify-center">
                            <SkillDisplay name={"SciKit Learn"} imgPath={"/images/Scikit.png"}/>
                            <SkillDisplay name={"PyTorch"} imgPath={"/images/Pytorch.png"}/>
                            <SkillDisplay name={"TensorFlow"} imgPath={"/images/Tensorflow.png"}/>
                            <SkillDisplay name={"R"} imgPath={"/images/R.png"}/>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "education",
            content: (
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#89e219"
                                 className="h-5 w-5">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                        <div className="timeline-start md:text-end mb-2">
                            <time className="font-mono italic text-[#89e219]">2003-2020</time>
                            <div className="text-lg font-black text-white">{t("education.suizo.title")}</div>
                            {t("education.suizo.description")}
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr/>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ce82ff"
                                 className="h-5 w-5">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                        <div className="timeline-end mb-2">
                            <time className="font-mono italic text-[#ce82ff]">2021-2025</time>
                            <div className="text-lg font-black text-white">{t("education.uvg.title")}</div>
                            {t.rich("education.uvg.description", {
                                bold: (chunks) => (<span className="font-bold">{chunks}</span>),
                            })}
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr/>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3fd9b5"
                                 className="h-5 w-5">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                        <div className="timeline-start md:text-end mb-2">
                            <time className="font-mono italic text-[#3fd9b5]">2024</time>
                            <div className="text-lg font-black text-white">{t("education.usask.title")}</div>
                            {t.rich("education.usask.description", {
                                bold: (chunks) => (<span className="font-bold">{chunks}</span>),
                            })}
                        </div>
                        <hr/>
                    </li>
                </ul>
            ),
        },
        {
            id: "certifications",
            content: (
                <div className={"flex flex-row flex-wrap w-full justify-center gap-2"}>
                    <CertificationDisplay
                        title={t("certifications.guatemaltek.title")}
                        issuer={t("certifications.guatemaltek.issuer")}
                        date={t("certifications.guatemaltek.date")}
                    />
                    <CertificationDisplay
                        title={t("certifications.aws-101.title")}
                        issuer={t("certifications.aws-101.issuer")}
                        date={t("certifications.aws-101.date")}
                    />
                </div>
            ),
        },
    ];


    return (
        <section className="text-[#A1AFAC]">
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
            <Image src="/images/coding.png" width={500} height={500} className={"rounded-box"}/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">{t("title")}</h2>
                    <p className="texxt-base md:text-lg">
                    {t("description")}
                    </p>
                    <div className="flex flex-row flex-wrap justify-between mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {t("skills.title")}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {t("education.title")}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {t("certifications.title")}
                        </TabButton>
                    </div>
                    <div className="mt-4">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
