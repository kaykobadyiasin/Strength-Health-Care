// import Image from "next/image";
import { Empty } from "keep-react";

const Error = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Empty>
                <Empty.Image>
                    <img
                        src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
                        height={234}
                        width={350}
                        alt="404"
                    />
                </Empty.Image>
                <Empty.Title>Oops! This page is not found</Empty.Title>
                <Empty.Description className="my-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                </Empty.Description>
                <Empty.Redirect className="bg-[#4589F4]" buttonText="Go to Home" redirectUrl="/" />
            </Empty>
        </div>
    );
};

export default Error;