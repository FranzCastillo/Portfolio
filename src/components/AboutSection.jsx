"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {useTranslations} from "next-intl";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const t = useTranslations("About");

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
                <Image src="/images/coding.png" width={500} height={500} className={"rounded-box"}/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">{t("title")}</h2>
                    <p className="text-white texxt-base md:text-lg">
                        {t("description")}
                    </p>
                    <div className="flex flex-row justify-between mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {t("skills")}
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
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;