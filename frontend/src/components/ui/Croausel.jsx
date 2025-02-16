import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Croausel = () => {
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
      <SplideSlide>
        <img
          className="w-full h-full object-top"
          src="https://assets.weforum.org/article/image/0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg"
          alt="Image 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          className="w-full h-full object-top"
          src="https://st.depositphotos.com/1899425/1763/i/450/depositphotos_17634969-stock-photo-rockey-peak-in-yoho-national.jpg"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          className="w-full h-full object-top"
          src="https://media.istockphoto.com/id/1301592082/photo/beautiful-meadow-field-with-fresh-grass-and-yellow-dandelion-flowers-in-nature.jpg?s=612x612&w=0&k=20&c=fbTwYcoItgf2lc6fMx6d53s7qxW8CNVKr_RXVaVbnZM="
          alt="Image 2"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Croausel;
