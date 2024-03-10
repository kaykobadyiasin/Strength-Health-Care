import About from './About/About';
import Doctors from './Doctors/Doctors';
import Hero from './Hero/Hero';
import News from './News/News';
import Services from './Services/Services';
import Solutions from './Solutions/Solutions';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {

    return (
        <>
            <Hero />
            <Services />
            <About />
            <Solutions />
            <Doctors />
            <Testimonials />
            <News />
        </>
    );
};

export default Home;