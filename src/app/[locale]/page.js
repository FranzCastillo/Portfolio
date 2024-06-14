import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('Hero');

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                     className="max-w-sm rounded-lg shadow-2xl"/>
                <div>
                    <h1 className="text-5xl font-bold">{t("title")}</h1>
                    <p className="py-6">{t("description")}</p>
                    <button className="btn btn-primary mr-3">{t("cv-button")}</button>
                    <button className="btn btn-secondary">{t("more-button")}</button>
                </div>
            </div>
        </div>
    );
}
