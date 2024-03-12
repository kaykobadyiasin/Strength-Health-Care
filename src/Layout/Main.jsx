// import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
// import Scrollbar from 'smooth-scrollbar';
import 'animate.css';
import Navbar from '../components/Shared/Navbar/Navbar';

const Main = () => {
    // const scrollbarRef = useRef(null);

    // useEffect(() => {
    //     const initScrollbar = () => {
    //         if (scrollbarRef.current) {
    //             const scrollbar = Scrollbar.init(scrollbarRef.current, {
    //                 // Specify options if needed
    //             });

    //             // Optional: Add event listeners or customize the scrollbar further
    //             scrollbar.addListener((status) => {
    //                 console.log(status);
    //             });
    //         }
    //     };

    //     // Initialize the smooth-scrollbar when the component mounts
    //     initScrollbar();

    //     // Clean up and destroy the scrollbar when the component unmounts
    //     return () => {
    //         if (scrollbarRef.current) {
    //             const scrollbarInstance = Scrollbar.get(scrollbarRef.current);

    //             // Check if the scrollbar is still attached to the DOM before destroying
    //             if (scrollbarInstance && scrollbarInstance.containerElement.parentNode) {
    //                 Scrollbar.destroy(scrollbarInstance);
    //             }
    //         }
    //     };
    // }, []);

    return (
        <div
        // style={{ width: '100%', height: '100vh' }} ref={scrollbarRef}
        >
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
