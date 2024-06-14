import React from 'react';
import {useTranslations} from "next-intl";


export default function Home() {
    const t = useTranslations('Navigation');

    return (
        <div className="navbar bg-base-100 position-fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>{t("about")}</a>
                            <ul className="p-2">
                                <li><a>{t("description")}</a></li>
                                <li><a>{t("experience")}</a></li>
                            </ul>
                        </li>
                        <li><a>{t("skills")}</a></li>
                        <li><a>{t("projects")}</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">{"</> Franz"}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>{t("about")}</summary>
                            <ul className="p-2">
                                <li><a>{t("description")}</a></li>
                                <li><a>{t("experience")}</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>{t("skills")}</a></li>
                    <li><a>{t("projects")}</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary">{t("contact")}</a>
            </div>
        </div>
    );
}