
import { Button } from "keep-react";

const CommonButton = ({ name }) => {
    return (
        <div>
            <Button className='bg-[#4589F4] border-transparent hover:border-[#4589F4] rounded-lg text-white hover:text-[#4589F4] hover:bg-[#F1F9FB] duration-300 px-4' size="md" type="default">{name}</Button>
            {/* <button ></button> */}
        </div>
    );
};

export default CommonButton;