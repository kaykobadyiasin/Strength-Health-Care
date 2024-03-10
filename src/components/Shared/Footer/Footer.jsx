 
import footerImage from '../../../assets/Footer/01.png';
import logoImage from '../../../assets/Footer/logo.png';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import CommonButton from '../../CommonButton/CommonButton';

const Footer = () => {
    return (
        <div className='flex lg:flex-row flex-col'>
            {/* Left Section */}
            <div className='bg-[#051729] xl:w-4/6 w-full py-10'>
                <div className='grid xl:grid-cols-2 lg:grid-cols grid-cols-1'>
                    <div className='xl:block lg:hidden'></div>
                    <div className='mx-5'>
                        <img src={footerImage} alt="Medical Healthcare Service" className='xl:w-[70%] lg:[50%] lg:mx-0 mb-20' />
                        <div className='text-white flex flex-col gap-5 lg:text-left '>
                            <img src={logoImage} alt="Medical Healthcare Service" className='w-40 lg:mx-0 ' />
                            <p className='opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                            <p><span>Contact:</span> <span className='text-[#4589F4]'>company@gmail.com</span></p>
                            <div className='flex lg:justify-start  items-center gap-5'>
                                <span>Follow:</span>
                                {socialMediaLinks.map((link) => (
                                    <Link key={link.url} to={link.url} target='_blank'>
                                        <Icon icon={link.icon} className={`text-${link.color} ${link.size} hover:scale-110 duration-300`} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='bg-[#031D36] w-full'>
                <div className='lg:px-8 px-5 pt-10'>
                    <h2 className='text-4xl montserrat-alternates-semibold text-white leading-snug mb-10'> We're Always Ready For Your Health</h2>
                    <CommonButton name={'Get Appointment'} />
                    <div className='grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 text-sm xl:mt-12 lg:mt-0'>
                        {footerSections.map((section) => (
                            <div key={section.title} className='mt-20 flex flex-col gap-8'>
                                <h4 className='text-white montserrat-alternates-bold'>{section.title}</h4>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    {section.links.map((link) => (
                                        <li key={link.url} className="mb-4">
                                            <Link to={link.url} className="hover:underline">{link.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const socialMediaLinks = [
    { url: 'https://facebook.com', icon: 'ri:facebook-fill', size: 'text-lg', color: 'white' },
    { url: 'https://twitter.com', icon: 'mdi:twitter', size: 'text-xl', color: 'white' },
    { url: 'https://instagram.com', icon: 'mdi:instagram', size: 'text-xl', color: 'white' },
    { url: 'https://youtube.com', icon: 'mdi:youtube', size: 'text-xl', color: 'white' },
    { url: 'https://pinterest.com', icon: 'jam:pinterest', size: 'text-xl', color: 'white' },
];

const footerSections = [
    {
        title: 'Company',
        links: [
            { url: '/', text: 'About Us' },
            { url: '/', text: 'Our Services' },
            { url: '/', text: 'Our Team' },
            { url: '/', text: 'Contact Us' },
        ],
    },
    {
        title: 'Important',
        links: [
            { url: '/', text: 'Portfolio' },
            { url: '/', text: 'Appointment' },
            { url: '/', text: 'FAQ' },
            { url: '/', text: 'Privacy Policy' },
            { url: '/', text: 'Terms & Conditions' },
        ],
    },
    {
        title: 'Quick Link',
        links: [
            { url: '/', text: 'Why Choose Us' },
            { url: '/', text: 'Pricing Plan' },
            { url: '/', text: 'News & Articles' },
            { url: '/', text: 'Login' },
            { url: '/', text: 'Subscribe' },
        ],
    },
    {
        title: 'Official Info',
        links: [
            { url: '/', text: <><Icon icon="carbon:location" className='text-2xl text-[#4589F4]' />  2767 Sunrise Street, NY 1002, USA</> },
            { url: '/', text: <><Icon icon="fontisto:email" className='text-xl text-[#4589F4]' />  company@gmail.com</> },
            { url: '/', text: <><Icon icon="ph:phone" className='text-xl text-[#4589F4]' />  +880 1234-569856</> },
        ],
    },
];

export default Footer;
