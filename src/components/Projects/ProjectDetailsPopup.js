import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import {projectDetailsData} from "./projectCardData";


const ProjectDetailsPopup = ({handlePopupToggle, isPopupOpen}) => {
    return (
        <div className={`w-full fixed 
        py-8 px-10 bg-white dark:bg-gray-800 rounded-md dark:shadow-shadowOne shadow-shadowTwo transition-all duration-300 z-10
         ${isPopupOpen ? 'top-0 left-0 right-0' : '-top-[100%]'}`}>
            <div className="flex items-center justify-center flex-col relative">
                <h3 className="">Shown All Screenshot Here</h3>
                <div className="w-3 h-2 bg-blue-50 absolute top-0 right-0" onClick={() => handlePopupToggle()}></div>
                <div className="flex flex-col items-center justify-center w-full">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            autoPlay: true
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper w-full h-[700px]"
                    >
                        {
                            projectDetailsData.map(({id, img}) => (
                                <SwiperSlide key={id}>
                                    <img className="w-full h-[600px]" src={img} alt='card img'/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailsPopup