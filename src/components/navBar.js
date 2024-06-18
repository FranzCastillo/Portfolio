import React from 'react';
import {useTranslations} from "next-intl";


export default function Home() {
    const t = useTranslations('Navigation');

    const links = [
        {
            path: "#",
            title: t("home")
        },
        {
            path: "#about",
            title: t("about")
        },
        {
            path: "#skills",
            title: t("experience")
        },
        {
            path: "#projects",
            title: t("projects")
        },
        {
            path: "#contact",
            title: t("contact")
        },
    ]

    return (
        <div className="navbar bg-[#131f24] border-b-2 border-[#1f333b]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1f333b] rounded-box w-52 text-white">
                        <li><a href={"#home"}>{t("home")}</a></li>
                        <li>
                            <a>{t("about")}</a>
                            <ul className="p-2">
                                <li><a href={"#who-am-i"}>{t("description")}</a></li>
                                <li><a href={"experience"}>{t("experience")}</a></li>
                            </ul>
                        </li>
                        <li><a href={"skills"}>{t("skills")}</a></li>
                        <li><a href={"projects"}>{t("projects")}</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white">{"</> Franz"}</a>
            </div>
            <div className="navbar-center hidden text-white lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href={"#home"}>{t("home")}</a></li>
                    <li>
                        <details>
                            <summary>{t("about")}</summary>
                            <ul className="p-2">
                                <li><a href={"#who-am-i"}>{t("description")}</a></li>
                                <li><a href={"experience"}>{t("experience")}</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href={"skills"}>{t("skills")}</a></li>
                    <li><a href={"projects"}>{t("projects")}</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#ce82ff] text-white font-bold hover:bg-[#a568cc]">{t("contact")}</a>
            </div>
        </div>
    );
}