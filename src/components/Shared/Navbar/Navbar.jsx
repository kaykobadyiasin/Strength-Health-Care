import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/home/logo.png';
import CommonButton from '../../CommonButton/CommonButton';


const Navbar = () => {
    const [topNav, setTopNav] = useState(true);
    const [mainNav, setMainNav] = useState(true);

    const toggleTopNav = () => {
        setTopNav(!topNav);
    };


    useEffect(() => {
        const handleScroll = () => {
            // Check the scroll position and update the topNav state accordingly
            if (window.scrollY > 0) {
                setTopNav(false);
            } else {
                setTopNav(true);
            }
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures that the effect runs only once during mount and cleans up during unmount



    return (
        <div className={topNav ? `lg:mb-20 animate__animated animate__facInDown` : ''}>
            {topNav && (
                <div className='top-nav bg-[#031D36] text-white py-3 text-sm lg:block hidden animate__animated animate__slideInDown'>
                    <div className='container mx-auto flex justify-evenly'>
                        <div className='flex xl:gap-10 gap-5 '>
                            {[
                                {
                                    to: 'https://wa.me/1719943497',
                                    icon: 'ph:phone',
                                    text: '+1 (700) 230-0035',
                                },
                                {
                                    to: 'mailto:strength@gmail.com',
                                    icon: 'fontisto:email',
                                    text: 'strength@gmail.com',
                                },
                                {
                                    to: 'https://maps.app.goo.gl/SzhTMHvtqE7SuVfGA',
                                    icon: 'carbon:location',
                                    text: '12/3 Mirpur Dhaka Bangladesh',
                                },
                            ].map((item, index) => (
                                <Link key={index} to={item.to} className='flex gap-2 items-center' target='_blank'>
                                    <Icon icon={item.icon} className='text-xl' />
                                    <span className='xl:block hidden'>{item.text}</span>
                                </Link>
                            ))}
                        </div>
                        <div className='flex items-center gap-10'>
                            {[
                                { to: 'https://facebook.com', icon: 'ri:facebook-fill' },
                                { to: 'https://twitter.com', icon: 'mdi:twitter' },
                                { to: 'https://instagram.com', icon: 'ri:instagram-fill' },
                                { to: 'https://google.com', icon: 'entypo-social:google' },
                            ].map((link, index) => (
                                <Link key={index} to={link.to} target='_blank'>
                                    <Icon icon={`${link.icon}`} className='text-lg' />
                                </Link>
                            ))}
                        </div>
                        <div onClick={toggleTopNav} className='hover:bg-white duration-300 hover:bg-opacity-10 cursor-pointer absolute right-2 top-2 p-2 rounded-full flex justify-center items-center'>
                            <Icon icon='iconamoon:close-bold' className='' />
                        </div>
                    </div>
                </div>
            )}
            <div className='py-5 xl:px-0 px-5 bg-white w-full fixed z-50 shadow-md'>
                <div className='container mx-auto flex justify-between items-center relative'>
                    <div>
                        <Link to='/'>
                            <img src={logo} alt='Medical Healthcare Service' className='md:w-40 w-28' />
                        </Link>
                    </div>
                    <div className='xl:block hidden navMenu'>
                        <ul className='flex gap-8'>
                            <li>
                                <NavLink to={`/`}>Home</NavLink>
                            </li>
                            {['About', 'Services', 'Doctors', 'Blogs', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${!mainNav ? 'block' : 'hidden'} fixed z-50 left-0 top-0 sm:w-72 w-8/12 h-[100%] bg-white animate__animated animate__slideInLeft shadow-xl xl:hidden navMenu`}>
                        <ul className='flex flex-col py-3 mobileMenu'>
                            <NavLink to={`/`}>
                                <li className='hover:bg-[#F1F9FB] hover:text-[#4589F4] px-5 py-2 duration-300 rounded'>
                                    Home
                                </li>
                            </NavLink>
                            {['About', 'Services', 'Doctors', 'Blogs', 'Contact'].map((item, index) => (
                                <NavLink key={index} to={`/${item.toLowerCase()}`}>
                                    <li className='hover:bg-[#F1F9FB] hover:text-[#4589F4] px-5 py-2 duration-300 rounded'>
                                        {item}
                                    </li>
                                </NavLink>
                            ))}
                            <div className='block md:hidden pl-5 mt-10'>
                                <CommonButton name='Appointment' />
                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center gap-8'>
                        <button>
                            <Icon icon='ic:baseline-search' className='text-2xl' />
                        </button>
                        <div className='relative'>
                            <Icon icon='icon-park-outline:shopping-cart' className='text-2xl' />
                            <span className='absolute -top-3 -right-3 text-white bg-[#4589F4] w-2 h-2 rounded-full p-[12px] flex justify-center items-center text-sm'>10</span>
                        </div>
                        <div className='md:block hidden'>
                            <CommonButton name='Appointment' />
                        </div>
                        <button onClick={() => setMainNav(!mainNav)} className='xl:hidden block text-[#031D36]'><Icon icon={`${!mainNav ? 'ci:close-square' : 'fluent:navigation-unread-20-filled'}`} className='text-2xl text-[#031D36]' /></button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;
