import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "../globals.css";
import NavBar from "@/components/navBar";


export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }
) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages}>
            {/*<NavBar/>*/}
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}