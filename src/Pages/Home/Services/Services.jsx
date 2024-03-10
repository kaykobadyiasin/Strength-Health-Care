import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import urology from '../../../assets/home/services/urology.png'
import dentist from '../../../assets/home/services/dentist.png'
import medicine from '../../../assets/home/services/medicine.png'
import child_care from '../../../assets/home/services/child_care.png'
import cancer from '../../../assets/home/services/cancer.png'



const services = [
    { _id: 1, image: urology, name: 'urology' },
    { _id: 2, image: dentist, name: 'dentist' },
    { _id: 3, image: medicine, name: 'medicine' },
    { _id: 4, image: child_care, name: 'child_care' },
    { _id: 5, image: cancer, name: 'cancer' },
]

const Services = () => {
    return (
        <div className="container mx-auto my-20">
            <div className="flex flex-col justify-center text-center">
                <SectionTitle section={'Our Services'} title={'Services For Your Health'} />
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between items-center gap-5 lg:mx-0 mx-5 mt-10'>
                {services?.map((item, index) => (
                    <div key={index} className="lg:px-10 px-6 lg:py-5 py-3 bg-[#F1F9FB] rounded-xl">
                        <div className="bg-white rounded-full w-14 h-14 mx-auto p-3">
                            <img src={item?.image} alt={''} className='w-full h-full' />
                        </div>
                        <h3 className="text-center lg:text-xl text-sm text-[#031D36] capitalize mt-3">{item?.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;