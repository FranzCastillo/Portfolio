import React from 'react';
import {useTranslations} from "next-intl";
import ProjectDisplay from "@/components/ProjectDisplay";

const ProjectsSection = () => {
    const t = useTranslations("Projects");

    return (
        <section>
            <div className={"flex flex-col flex-wrap justify-center items-center py-10"}>
                <h2 className="text-4xl font-bold text-white mb-4">{t("title")}</h2>
                <div>
                    <ProjectDisplay
                        title={t("exchanges.title")}
                        description={t("exchanges.description")}
                        tags={[t("tags.web"), t("tags.db"), t("tags.api")]}
                        repo={"https://github.com/FranzCastillo/UVG-Intercambios"}
                        image={"/images/Exchanges.png"}
                    />
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
