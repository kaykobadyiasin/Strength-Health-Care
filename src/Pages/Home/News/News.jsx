import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import news1 from '../../../assets/home/news/news1.png'
import news2 from '../../../assets/home/news/news2.png'
import news3 from '../../../assets/home/news/news3.png'
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";


const news = [
    { _id: 1, news: news1, title: 'Telehealth Services Are Ready To Help Your Family', description: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incidid unt ut labore magna aliqua.' },
    { _id: 2, news: news2, title: '12 Top To Lead A Healthy And Happy Life', description: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incidid unt ut labore magna aliqua.' },
    { _id: 3, news: news3, title: 'The Day I’d Spent At Square Medical Center', description: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incidid unt ut labore magna aliqua.' }
]


const News = () => {
    return (
        <div className="bg-[#F1F9FB]">
            <div className="container mx-auto py-20">
                <div className="flex justify-center text-center">
                    <SectionTitle section={'Our newss'} title={'Our Specialized newss'} />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-0 gap-5 py-10 lg:mx-0 mx-5">
                    {news.map((item, index) => (
                        <div key={index} className="xl:w-5/6 mx-auto border-2 border-[#111111] hover:border-primary-100 duration-300 border-opacity-10 rounded-2xl">
                            <img src={item?.news} alt="" className="w-full" />
                            <div className="py-8 px-8">
                                <div className="flex gap-5 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Icon icon="solar:user-circle-linear" className="text-primary-100 text-2xl" />
                                        <span className="text-[#111111] opacity-70">Admin</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon icon="clarity:date-solid" className="text-primary-100 text-2xl" />
                                        <span className="text-[#111111] opacity-70">22 June 2022</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold montserrat-alternates-semibold">{item?.title}</h3>
                                    <p className="text-[#111111] opacity-70 my-4">{item?.description}</p>
                                    <Link className="text-primary-100 border-b border-primary-100">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default News;