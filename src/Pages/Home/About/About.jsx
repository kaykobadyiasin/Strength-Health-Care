import { Icon } from '@iconify/react';
import heroBg from '../../../assets/home/hero_images/hero-image.png'
import about from '../../../assets/home/About/medical.png'
import list1 from '../../../assets/home/About/list/list1.png'
import list2 from '../../../assets/home/About/list/list2.png'
import list3 from '../../../assets/home/About/list/list3.png'
import list4 from '../../../assets/home/About/list/list4.png'
import ceo from '../../../assets/home/About/ceo.png'

import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const About = () => {
    return (
        <div>
            <div className="lg:bg-left sm:bg-contain bg-bottom h-[100%] bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="container mx-auto lg:py-28 py-5">
                    <div className='flex lg:flex-row flex-col-reverse justify-between items-center place-content-center lg:mx-0 mx-5 lg:gap-0 gap-12'>
                        <div className='lg:w-[30%] w-10/12 mx-auto relative lg:top-auto -top-72 z-10 py-5 lg:mt-0 mt-72'>
                            <img src={about} className='rounded-xl w-full ml-5' alt="" />
                            <div className='bg-[#4589F4] w-full h-full top-0 -z-10 absolute rounded-xl'></div>
                        </div>

                        <div className='lg:w-[60%]'>
                            <div className="mb-8">
                                <div className="flex flex-col lg:w-7/12 lg:text-left text-center">
                                    <SectionTitle section={'About Us'} title={'We are Lanced Most Powerful System.That are making Beautifully.'} />
                                </div>
                                <p className='lg:pr-60 text-[#111111] lg:text-left text-center opacity-70'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
                                    veniam consec adipiscing.
                                </p>
                            </div>
                            <div className='lg:w-8/12'>
                                <ul className='grid md:grid-cols-2 justify-center gap-5'>
                                    <li className='flex items-center gap-3'><img src={list1} alt="" />
                                        <span className='montserrat-alternates-semibold'>100% Expert Doctor</span>
                                    </li>
                                    <li className='flex items-center gap-3'><img src={list2} alt="" />
                                        <span className='montserrat-alternates-semibold'>Instant Service</span>
                                    </li>
                                    <li className='flex items-center gap-3'><img src={list3} alt="" />
                                        <span className='montserrat-alternates-semibold'>Instant Medicine</span>
                                    </li>
                                    <li className='flex items-center gap-3'><img src={list4} alt="" />
                                        <span className='montserrat-alternates-semibold'>Always Doctor</span>
                                    </li>
                                </ul>
                                <hr className='my-5 w-full' />
                                <div className='flex items-center justify-center gap-3'>
                                    <img src={ceo} alt="" />
                                    <div className=''>
                                        <h4 className='font-bold text-xl'>Harry Robart</h4>
                                        <p className=''>Founder CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;