import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('Index');

    return (
        <button className="btn btn-primary">{t("title")}</button>
    );
}
