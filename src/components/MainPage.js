import Header from '../components/Header';
import Footer from './Footer';
const MainPage = () => {
    return (
        <div className=''>
            <Header />
            <br/>
            <br/>
            <p className='max-w-md text-left mx-auto text-lg md:text-xl lg:text-2xl font-bold'>Portfolio</p>
            <br/>
            <p className='max-w-md text-left mx-auto'>
                I'm a sophomore at Stony Brook University with a passion for building — from full-stack applications to machine learning models. I aspire to become an engineer who identifies real user pain points and creates impactful products that truly help people.
                </p>
            <Footer/>
        </div>
    );
};

export default MainPage;