import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { cn } from "@/lib/utils";
import { getDictionary } from "../dictionaries";

const Home = async ({ params }: { params: { locale: string } }) => {

  const dict = await getDictionary(params.locale)

  return (
    <main dir={params?.locale} className={cn(params.locale === 'fa' ? 'font-vazir' : 'font-vazir', "flex bg-black-100 justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-hidden")}>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={dict.navbar} locale={params?.locale} />
        <Hero locale={params?.locale} dict={dict} />
        <Grid locale={params?.locale} dict={dict} />
        <RecentProjects locale={params?.locale} dict={dict} />
        {/* <Clients /> */}
        <Experience locale={params?.locale} dict={dict} />
        {/* <Approach /> */}
        <Footer locale={params?.locale} dict={dict} />
      </div>
    </main>
  );
};

export default Home;
