import heroBg from '../../../assets/home/hero_images/hero-map.png'
import heroimg from '../../../assets/home/hero_images/hero-image.png'
import partner1 from '../../../assets/home/partner/partner-1.png'
import partner2 from '../../../assets/home/partner/partner-2.png'
import partner3 from '../../../assets/home/partner/partner-3.png'
import partner4 from '../../../assets/home/partner/partner-4.png'
import partner5 from '../../../assets/home/partner/partner-5.png'
import { Icon } from '@iconify/react';
import CommonButton from '../../../components/CommonButton/CommonButton';


const partners = [
    { _id: 1, image: partner1 },
    { _id: 2, image: partner2 },
    { _id: 3, image: partner3 },
    { _id: 4, image: partner4 },
    { _id: 5, image: partner5 },
]


const Hero = () => {
    return (
        <>
            <div className="bg-[#F1F9FB] relative">
                <div className="lg:bg-right h-[100%] bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="container mx-auto lg:py-28 py-5">
                        <div className='flex lg:flex-row flex-col justify-between items-center place-content-center gap-8 lg:mx-0 mx-5'>

                            <div className='w-full flex-grow'>
                                <div className="mb-8">
                                    <h1 className="lg:text-6xl md:text-4xl text-3xl montserrat-alternates-bold leading-tight lg:text-[#031D36] text-white mb-5">We Provide Remote Health Care <span className='bg-[#4589F4] bg-opacity-20 secondaryColor px-2 rounded-tr-2xl'>Services</span></h1>
                                    <p className='lg:pr-60 lg:text-[#111111] opacity-70 text-white'>
                                        Appraisd is the dedicated performance management platform
                                        helps your business execute on strategic goals.
                                    </p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <CommonButton name={'Get Started'} />
                                    <button className="lg:primaryColor lg:text-[#031D36] text-white hover:text-primary-100 duration-300 font-semibold py-2 px-4 rounded flex items-center gap-2 ">
                                        <span className='bg-[#031D36] hover:bg-primary-100 p-3 rounded-full text-white lg:border-none border border-[#4589F4] duration-300 animate__animated animate__pulse animate__infinite animate__slow'><Icon icon="ph:play-fill" /></span>
                                        Watch Video</button>
                                </div>
                            </div>

                            <div className='w-full flex-grow-0'>
                                <img src={heroimg} className='rounded-xl md:w-8/12 w-full lg:mx-auto' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:block hidden'>
                    <span className='absolute top-40 left-32 rotate-45 animate__animated animate__pulse animate__infinite animate__fast'><Icon icon="jam:medical" className='text-5xl text-[#ED4E83]' /></span>
                    <span className='absolute top-20 right-1/2 animate__animated animate__heartBeat animate__infinite animate__slow'><Icon icon="streamline:good-health-and-well-being-solid" className='text-3xl text-[#FE4144]' /></span>
                    <span className='absolute bottom-28 right-2/3 animate__animated animate__pulse animate__infinite animate__fast'><Icon icon="mdi:health-potion" className='text-5xl text-[#12BC8F]' /></span>
                </div>
            </div>

            <div className='container mx-auto py-20'>
                <div className='flex flex-wrap justify-center items-center gap-32 lg:mx-0 mx-5'>
                    {partners?.map((item, index) => (
                        <div key={index}>
                            <img src={item?.image} alt={''} className='w-24' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;