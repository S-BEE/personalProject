
import {FaPlay} from 'react-icons/fa'

const Home = ()=>{

    return(
        <>
        
        <main className="z-20 w-full">
            <section className=" w-full relative h-[100%] ">
                <div className=" ">
                    <video className="w-[100%] " muted autoPlay playsInline loop preload='none'>
                    <source src="https://www.uberfreight.com/wp-content/themes/uberfreight/video/UberFreight-Desktop.mp4" type="video/mp4" />
                    </video>
                    {/* <video className="w-[100%] lg:hidden" muted autoPlay playsInline loop preload='none'>
                    <source src="https://www.uberfreight.com/wp-content/themes/uberfreight/video/UberFreight-Mobile.mp4" type="video/mp4" />
                    </video>  */}
                </div>
                
                <div className="flex flex-col gap-[3rem] w-[40%] absolute top-[40%] text-[#fff] font-bold ml-[2rem]
                sm:w-full sm:top-[20%] md:w-[75%]  md:top-[30%] sm:gap-[1rem] ">
                    <h1 className="text-[4.5rem] leading-[2.7cm] sm:text-xl md:text-2xl sm:leading-none md:leading-normal">Move everything, forward</h1>
                    <p className="text-[1.8rem] font-light leading-[1cm] sm:leading-none md:leading-normal sm:text-base md:text-lg ">Taking logistics in a new direction with an advanced platform for both shippers and carriers.</p>
                    <div className="btn">
                        <button className="bg-[#000] text-[#fff] py-[1rem] px-[1.2rem] text-2xl sm:text-base md:py-1 md:px-2 md:text-lg ">Ship with us</button> 
                        <button className="bg-[#fff] text-[#000] py-[1rem] px-[1.2rem] text-2xl ml-[1.3rem]
                        sm:py-1 sm:px-2 sm:text-base md:text-lg md:py-1 md:px-2  ">Haul with us</button>
                    </div>
                </div>
            </section>
            <section className="w-full h-screen  fixed top-0 bottom-0 left-0 right-0 -z-10 flex flex-col gap-y-[6rem] bg-[#f2f2f2] p-[2rem] md:p-0 ">
                <div className="flex gap-[10%] mt-[6rem] md:flex-col-reverse">
                    <div className='flex flex-col gap-[15%] justify-center basis-2/5'>
                        <h2 className=' text-4xl md:text-xl'>Why Uber Freight?</h2>
                        <p className='text-2xl md:text-base'> Backed by innovative technology and a dedicated team of domain experts, 
                        Uber Freight is not just one of the largest logistics and transportation networks in the world. 
                        It’s a platform and service that helps shippers and carriers of all sizes take control of their
                        freight and deliver on their goals.</p>
                        <a href="https://www.uberfreight.com/about-us/" className='underline text-3xl md:text-lg '>Learn More</a>
                    </div>
                    <div className="">
                    <img src="src/assets/images/img-01@2x-778x606.jpg" alt="" className='object-fit h-[500px] w-[900px] md:object-top  md:h-[200px] md:w-full  ' />
                    </div>
            
                </div>
                <div className="flex gap-[40%] ">
                    <div className="cash-flow">
                        <h2 className='text-[#276ef1] text-6xl'>$17B</h2>
                        <h3 className='text-2xl font-normal text-[#5b5b5b]'>Freight Under Management</h3>
                    </div>
                    <div className="users">
                        <h2 className='text-[#276ef1] text-6xl' >200K+</h2>
                        <h3 className='text-2xl font-light text-[#5b5b5b] ' >Users on the platform</h3>
                    </div>
                </div>
            </section>
            <section className='h-screen'>
            </section>
            <section className="service-section">
               <h2>Ship or haul with Uber Freight</h2>
                <div className="service-list">
                    <div className="service-card">
                        <img src="images/img-05@2x-710x710.jpg" width="630px"/>
                        <div className="service-content">
                            <h2>Shippers</h2>
                            <p>With the technology and expertise to provide instant quotes, 
                                transparent pricing, actionable insights, and optimization strategies, 
                                the Uber Freight Platform gives you the tools to deliver for your 
                                customers.</p>
                                <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="images/img-04@2x-710x710.jpg" width="630px"/>
                        <div className="service-content">
                            <h2>Carriers</h2>
                            <p>
                                With upfront pricing, instant booking, free Quickpay, and facility ratings,
                                Uber Freight puts you in the driver’s seat.
                            </p>	
                            <a href="#">Learn More</a>			
                        </div>
                    </div>
                </div>
            </section>
            <section className="tile-section">
                <div>
                    <h2>Uber Freight Platform	</h2>
                    <p>In combining the largest network of digitally-enabled carriers with industry-leading 
                        logistics technology and transportation services, the Uber Freight Platform 
                        unlocks the best opportunities and options for shippers and carriers to move goods.
                    </p>
                    <a href="#">Request a demo</a>
                </div>
                <img src="images/img-03@2x-778x606.jpg" width="655px"/>
            </section>
            <section className="tile-section">
                <img src="images/Platform-TMS-1556x1212.png.webp" width="655px" height="500px"/>
                <div>
                    <h2>Managed Transportation</h2>
                    <p>As one of leading managed transportation providers in the world, 
                        Uber Freight combines advanced technology, a committed team of domain experts, 
                        and the industry’s broadest shipper-carrier network to increase agility, efficiency, 
                        and predictability, optimizing every aspect of your supply chain and logistics processes. 
                        The result is a highly flexible delivery model that enables nimble decision-making, 
                        drives process excellence, lowers your operational risks, and reduces costs.</p>
                    <button>Connect with our experts</button>
                </div>
            </section>
            <section className="tile-section">
                <div>
                    <h2>Instant Booking</h2>
                    <p>Find and book freight at a moment’s notice, without picking up the phone. Expand your 
                    capacity with access to a trusted network of carriers, booked online with just a few clicks, 
                    24/7.</p>
                    <a href="#">Learn More</a>
                </div>
                <img src="images/UF_Waking_Up-0046-1-scaled-1-1556x1212.jpg.webp" width="655px"/>
            </section>
            <section className="video-section">
                <div className="section-wrapper">
                    <div>
                        <h2>Uber Freight is trusted worldwide by industry leaders to meet their logistics needs.</h2>
                        <p>We’re opening new avenues for innovation and scale across the globe.</p>
                    </div>
                    <div><a href="https://www.youtube.com/watch?v=WM8DGjhdIGU">
                        <FaPlay/> Play video</a></div>
                        {/* <i className="fa fa-play" style="margin-right: 1rem;"  ></i> */}
                </div> 
            </section>
            <section className="cta-section"></section>
           
        </main>

        
        
        </>
    )
}

export default Home