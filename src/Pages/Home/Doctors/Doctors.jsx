import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import doctor1 from '../../../assets/home/doctors/doctor1.png'
import doctor2 from '../../../assets/home/doctors/doctor2.png'
import doctor3 from '../../../assets/home/doctors/doctor3.png'
import doctor4 from '../../../assets/home/doctors/doctor4.png'
import doctor5 from '../../../assets/home/doctors/doctor5.png'
import doctor6 from '../../../assets/home/doctors/doctor6.png'
import doctor7 from '../../../assets/home/doctors/doctor7.png'
import { Link } from "react-router-dom";


const doctors = [
    { _id: 1, doctor: doctor1, name: 'Dr. James Jur', position: 'cancer special' },
    { _id: 2, doctor: doctor2, name: 'Jonshon Robart', position: 'Internal Medicine' },
    { _id: 3, doctor: doctor3, name: 'Dr. Joseph Joe', position: 'Cancer Special' },
    { _id: 4, doctor: doctor4, name: 'Dr. Sophia Ava', position: 'Internal Medicine' },
    { _id: 5, doctor: doctor5, name: 'Dr. Robart Smith', position: 'Internal Medicine' },
    { _id: 6, doctor: doctor6, name: 'Dr. Samson Sanis', position: 'cancer special' },
    { _id: 7, doctor: doctor7, name: 'Dr. Handri Rodar', position: 'Internal Medicine' }
]


const Doctors = () => {
    return (
        <div className="container mx-auto py-20">
            <div className="flex justify-center text-center">
                <SectionTitle section={'Our Doctors'} title={'Our Specialized Doctors'} />
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-8 justify-center text-center py-10 xl:mx-0 mx-5">
                {doctors.map((item, index) => (
                    <Link key={index}>
                        <div className="border-2 border-[#111111] hover:border-primary-100 duration-300 cursor-pointer border-opacity-10 rounded-2xl">
                            <img src={item?.doctor} alt="" className="w-full" />
                            <div className="py-8">
                                <h3 className="text-xl font-semibold">{item?.name}</h3>
                                <h5 className="text-[#111111] opacity-70 mt-1">{item?.position}</h5>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>
    );
};

export default Doctors;