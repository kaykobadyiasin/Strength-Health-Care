import testimonial1 from '../../../assets/home/testimonials/testimonial1.png'
import testimonial2 from '../../../assets/home/testimonials/testimonial2.png'
import testimonial3 from '../../../assets/home/testimonials/testimonial3.png'
import question from '../../../assets/home/testimonials/Icon.png'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Icon } from "@iconify/react";


const testimonials = [
    {
        _id: 1,
        image: testimonial1,
        name: 'Junayed Robart',
        position: 'CEO JS_Theme',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        _id: 2,
        image: testimonial2,
        name: 'Jesika Hedrin',
        position: 'CEO JS_Theme',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        _id: 3,
        image: testimonial3,
        name: 'Jim Morison',
        position: 'CEO JS_Theme',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        _id: 4,
        image: testimonial3,
        name: 'Jim Morison',
        position: 'CEO JS_Theme',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        _id: 5,
        image: testimonial3,
        name: 'Jim Morison',
        position: 'CEO JS_Theme',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
]

const Testimonials = () => {
    return (
        <div className="container mx-auto py-20">
            <div className="flex justify-center text-center">
                <SectionTitle section={'Testimonials'} title={'What Our Client Says'} />
            </div>
            <div className='xl:mx-0 mx-5'>
                <Swiper
                    spaceBetween={30}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 1024px
                        1440: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}
                            className='shadow-md p-5 sm:my-14 lg:my-20 my-10 transition-all duration-300 hover:bg-primary-100 hover:text-white rounded-lg'
                        >
                            <ul className="flex items-center text-[#FFC422]">
                                <li><Icon icon="ic:round-star" width="24" height="24" /></li>
                                <li><Icon icon="ic:round-star" width="24" height="24" /></li>
                                <li><Icon icon="ic:round-star" width="24" height="24" /></li>
                                <li><Icon icon="ic:round-star" width="24" height="24" /></li>
                                <li><Icon icon="ic:round-star" width="24" height="24" /></li>
                            </ul>
                            <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <div className=" flex items-center justify-between gap-5">
                                <div className='flex items-center gap-5'>
                                    <div>
                                        <img src={item?.image} alt="" className='w-12 h-12 rounded-full' />
                                    </div>
                                    <div className='text-left'>
                                        <h3 className="text-xl font-semibold montserrat-alternates-semibold">{item?.name}</h3>
                                        <h5>{item?.position}</h5>
                                    </div>
                                </div>
                                <div>
                                    <img src={question} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </div >
    );
};

export default Testimonials;