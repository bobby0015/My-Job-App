import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import AnimatedContent from "../animations/AnimatedContent";

const Croausel = () => {
  const SlideData = [
    {
      title: "Smart Job Search",
      desc: `Easily find jobs that match your skills and preferences with advanced <br/> filters, AI recommendations, and real-time updates.`,
    },
    {
      title: "Seamless Application Tracking",
      desc: `Job seekers can track their applications, receive interview invites, and <br/> get real-time status updates from employers.`,
    },
    {
      title: "All-in-One HR Dashboard",
      desc: `Employers and HR teams can manage job postings, applications, interviews, and <br/> employee records from a single dashboard.`,
    },
    {
      title: "Automated Interview Scheduling",
      desc: `Integrated scheduling system that allows employers to set up interviews and <br/> send reminders, reducing hiring delays.`,
    },
    {
      title: "Secure & Role-Based Access",
      desc: `Robust authentication with role-based permissions ensures data security <br/> for job seekers, recruiters, and admins.`,
    },
  ];
  return (
    <Splide
      options={{
        autoplay: true,
        type: "loop",
        rewind: true,
        gap: "1rem",
      }}
      className="w-full h-[100%] overflow-hidden"
      aria-label="My Favorite Images"
    >
      {SlideData.map((slide, index) => (
        <SplideSlide key={index} className="relative">
          <img
            className="w-full h-full"
            src="https://4kwallpapers.com/images/walls/thumbs_2t/11027.jpg"
            alt="Image 1"
          />
          <div className="absolute px-10 py-4 sm:py-10 md:py-20 top-0 space-y-4 md:space-y-8 text-center w-full h-full bg-[rgba(0,0,0,0.4)]">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <h1 className="text-xl sm:text-2xl md:text-4xl mt-6 text-white font-cursive">
                {slide.title}
              </h1>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
            <p
              className="text-zinc-300 text-sm sm:text-xl md:text-2xl"
              dangerouslySetInnerHTML={{ __html: slide.desc }}
            ></p>
            </AnimatedContent>
            <button className="md:py-3 py-2 px-3 md:px-5 font-semibold rounded-md text-sm bg-white hover:bg-black hover:text-white transition-all ease-in-out">
              Discover Now
            </button>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Croausel;
