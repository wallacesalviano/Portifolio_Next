import Tool from '@/components/landing/tool';
import About from '@/components/landing/about';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import Contact from '@/components/landing/contact';
import { ModeToggle } from '@/components/mode-toggle';
import Expertise from '@/components/landing/expertise';
import Portfolio from '@/components/landing/portfolio';
import Experience from '@/components/landing/experience';
import Qualification from '@/components/landing/qualification';
import Nav from '@/components/landing/nav';

export default function Home() {
  return (
    <>
      <div className='sticky z-30 top-5 w-full flex justify-end px-5'>
        <ModeToggle />
      </div>
      <Nav />
      <main className='container px-4 md:px-8 mx-auto relative -mt-14'>
        <Header />
        <About />
        <Experience />
        <Expertise />
        <Qualification />
        <Portfolio />
        <Tool />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
