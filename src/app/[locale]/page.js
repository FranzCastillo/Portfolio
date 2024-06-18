import HeroSection from "@/components/heroSection";

export default function Home() {
    return (
        <main className={"flex min-h-screen flex-col bg-[#131f24]"}>
            <div className={"container mx-auto px-12 py-4"}>
                <HeroSection/>
            </div>
        </main>
    );
}