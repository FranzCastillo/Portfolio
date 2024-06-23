import React from 'react';
import {useTranslations} from "next-intl";
import ProjectDisplay from "@/components/ProjectDisplay";

const ProjectsSection = () => {
    const t = useTranslations("Projects");

    return (
        <section id={"projects"}>
            <div className={"flex flex-col justify-center items-center py-10"}>
                <h2 className="text-4xl font-bold text-white mb-4">{t("title")}</h2>
                <div className={"flex flex-wrap flex-row gap-4 justify-center"}>
                    <ProjectDisplay
                        title={t("wordle.title")}
                        description={t("wordle.description")}
                        tags={[t("tags.mlAI")]}
                        repo={"https://github.com/FranzCastillo/AI-Wordle-Solver"}
                        image={"/images/Wordle.png"}
                    />
                    <ProjectDisplay
                        title={t("exchanges.title")}
                        description={t("exchanges.description")}
                        tags={[t("tags.web"), t("tags.db"),]}
                        repo={"https://github.com/FranzCastillo/UVG-Intercambios"}
                        image={"/images/Exchanges.png"}
                        center={false}
                    />
                    <ProjectDisplay
                        title={t("connect4.title")}
                        description={t("connect4.description")}
                        tags={[t("tags.mlAI")]}
                        repo={"https://github.com/FranzCastillo/AI-Connect4"}
                        image={"/images/Connect4.jpg"}
                    />

                    <ProjectDisplay
                        title={t("phishing.title")}
                        description={t("phishing.description")}
                        tags={[t("tags.mlAI")]}
                        repo={"https://github.com/FranzCastillo/IA-Phising-Website-Detection"}
                        image={"/images/Phishing.jpg"}
                    />
                    <ProjectDisplay
                        title={t("chat.title")}
                        description={t("chat.description")}
                        tags={[t("tags.sockets"), t("tags.os")]}
                        repo={"https://github.com/FranzCastillo/AI-Connect4"}
                        image={"/images/Chat.jpg"}
                    />
                    <ProjectDisplay
                        title={t("bliss.title")}
                        description={t("bliss.description")}
                        tags={[t("tags.web"), t("tags.db")]}
                        repo={"https://github.com/FranzCastillo/Bliss"}
                        image={"/images/Bliss.png"}
                        center={false}
                    />
                    <ProjectDisplay
                        title={t("twitter.title")}
                        description={t("twitter.description")}
                        tags={[t("tags.web"), t("tags.db")]}
                        repo={"https://github.com/FranzCastillo/DB2-Twitter-Clone"}
                        image={"/images/Twitter.png"}
                    />
                    <ProjectDisplay
                        title={t("medium.title")}
                        description={t("medium.description")}
                        tags={[t("tags.web"),]}
                        repo={"https://github.com/FranzCastillo/STW-Proyecto1-Medium-Website"}
                        image={"/images/Medium.png"}
                    />
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
