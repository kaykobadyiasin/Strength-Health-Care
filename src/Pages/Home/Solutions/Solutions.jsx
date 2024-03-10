import { useState } from 'react';
import { Icon } from '@iconify/react';
import patternBg from '../../../assets/home/Solution/pattern.png'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const SolutionCard = ({ icon, icoBg, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`shadow-lg p-8 rounded-xl w-72 lg:mx-0 mx-auto duration-300 transition-all ${isHovered ? 'bg-[#4589F4] text-white' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`px-3 py-3 rounded-xl inline-block duration-300 transition-all ${isHovered ? 'bg-white' : icoBg}`}>
                <Icon icon={icon} className={`text-2xl duration-300 transition-all ${isHovered ? 'text-[#4589F4]' : 'text-white'}`} />
            </div>
            <h3 className="montserrat-alternates-semibold text-lg my-3">{title}</h3>
            <p className={`text-[#111111] opacity-70 duration-300 transition-all ${isHovered ? 'text-white' : ''}`}>
                {description}
            </p>
        </div>
    );
};

const Solutions = () => {
    return (
        <div className="container mx-auto py-20">
            <div className="text-center lg:w-3/12 mx-auto">
                <SectionTitle section={'Fast Solutions'} title={'Step by Step to get your Solution'} />
            </div>

            <div className="grid lg:grid-cols-4 gap-5 my-20">
                {[
                    { icon: 'mingcute:search-line', icoBg: 'bg-[#ED4E83]', title: 'Find A Doctor', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit she eiusmod tempor incd.' },
                    { icon: 'mingcute:user-4-line', icoBg: 'bg-[#FE4144]', title: 'Choose Doctor', description: 'Lorem ipsum dolor sit amet she eiusmod tempor incd.' },
                    { icon: 'clarity:date-solid', icoBg: 'bg-[#12BC8F]', title: 'Make An Application', description: 'Lorem ipsum dolor sit amet consectetur she eiusmod tempor incd.' },
                    { icon: 'ic:round-star', icoBg: 'bg-[#4589F4]', title: 'Get Your Solutions', description: 'Lorem ipsum consectetur adipiscing elit she eiusmod tempor incd.' },
                ].map((card, index) => (
                    <SolutionCard key={index} icoBg={card.icoBg} icon={card.icon} title={card.title} description={card.description} />
                ))}
            </div>

            <div className="lg:bg-center p-16 bg-no-repeat bg-secondary-100 lg:rounded-xl mt-28" style={{ backgroundImage: `url(${patternBg})` }}>

                <div className='grid lg:grid-cols-4 gap-10'>
                    <div className='bg-white rounded-xl px-5 py-10  h-full text-center'>
                        <h2 className='text-4xl font-bold text-[#4589F4]'>145+</h2>
                        <h4 className='text-secondary-100 font-medium mt-2'>World Awards</h4>
                    </div>
                    <div className='bg-white rounded-xl px-5 py-10  h-full text-center'>
                        <h2 className='text-4xl font-bold text-[#ED4E83]'>145+</h2>
                        <h4 className='text-secondary-100 font-medium mt-2'>World Awards</h4>
                    </div>
                    <div className='bg-white rounded-xl px-5 py-10  h-full text-center'>
                        <h2 className='text-4xl font-bold text-[#12BC8F]'>145+</h2>
                        <h4 className='text-secondary-100 font-medium mt-2'>World Awards</h4>
                    </div>
                    <div className='bg-white rounded-xl px-5 py-10  h-full text-center'>
                        <h2 className='text-4xl font-bold text-[#FE4144]'>145+</h2>
                        <h4 className='text-secondary-100 font-medium mt-2'>World Awards</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
