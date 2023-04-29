import Image from "next/image";
import Img from "../public/pizza.avif";
import useLocation from "@/hooks/getLocation";

const HomePage = () => {
  const { loading, errMsg, handleGetLocation } = useLocation();
  return (
    <>
      <div className="grid md:grid-cols-2 items-center px-16 max-w-full min-h-full gap-10 my-20">
        <div className="w-full text-center justify-center items-center gap-20 mt-10">
          <div className="text-secondary flex justify-center text-4xl font-bold w-full">
            <h1>Grab a Meal</h1>
          </div>

          <div className="h-[3px] max-w-full bg-yellow m-3"></div>
          <div className="flex-col items-center justify-center max-w-full">
            <p className="text-secondary text-md font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium voluptate doloremque rerum asperiores ipsa ipsum.
            </p>
          </div>
          <button
            className="bg-yellow text-lg font-bold mt-8 px-3 py-2 rounded-sm text-primary"
            onClick={handleGetLocation}
          >
            {loading ? "Loading..." : "Meal Near You"}
          </button>

          {errMsg && (
            <div className="text-lg text-yellow font-bold max-w-full pt-5">
              {errMsg}
            </div>
          )}
        </div>

        <Image
          className="object-cover opacity-80 rounded-lg mx-auto my-0"
          src={Img}
          alt="image"
        />
      </div>
    </>
  );
};

export default HomePage;
