import '../styles/MainPage.css'
import Header from './Header';
import Home from './Home';
import Hobbies from './Hobbies';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

function MainPage(){
    return (
        <main className="portfolio-page min-h-screen px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <section className="mx-auto max-w-7xl">
                <Header />
            </section>
            <section className="mx-auto max-w-7xl">
                <Home />
            </section>
            <section className="mx-auto max-w-7xl">
                <Hobbies />
            </section>
            <section className="mx-auto max-w-7xl">
                <Projects />
            </section>
            <section className="mx-auto max-w-7xl">
                <Experience />
            </section>
            <section className="mx-auto max-w-7xl">
                <Skills />
            </section>
            <section className="mx-auto max-w-7xl">
                <Contact />
            </section>
            <section className="mx-auto mt-6 max-w-7xl">
                <Footer />
            </section>
        </main>
    );
};

export default MainPage;
