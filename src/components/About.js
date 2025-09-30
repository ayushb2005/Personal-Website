import Footer from "./Footer";
import Header from "./Header";
import YouTubeShort from "./YoutubeUrl";

const About = () => {
    return (
        <div>
            <Header/>
            <br></br>
            <br></br>
            <p className='max-w-md text-left mx-auto text-lg md:text-xl lg:text-2xl font-bold'>Personal Interests</p>
            <br></br>
            <p className="max-w-md text-left mx-auto">Outside professional interests my hobbies include Muay Thai, driving, working out, and trading in the financial markets. </p>
            <br/>
            <div className='flex justify-center items-center gap-4 mb-8'>
                <YouTubeShort url = "https://www.youtube.com/shorts/6SvEt5DgwUg"/> 
                <YouTubeShort url="https://www.youtube.com/shorts/vKpCcrKTS3U"/>
            </div>
        
            <Footer/>
        </div>
    );
};

export default About;