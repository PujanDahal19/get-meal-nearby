import Image from "next/image";
import Img from "../public/pizza.avif";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <Link href={`restaurant/${data.fsq_id}`} className="shadow-md">
      <div className="flex flex-col justify-center items-center bg-yellow rounded-md h-full">
        <Image
          className="object-cover mx-auto my-0 rounded-md h-[300px]"
          src={data.imgUrl || Img}
          alt="Image"
          width={400}
          height={0}
        />

        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="font-bold text-2xl text-primary">{data.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
