import Image from "next/image";
import Img from "../public/pizza.avif";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <Link href={`restaurant/${data.fsq_id}`} className="shadow-md">
      <div className="flex flex-col justify-center items-center bg-yellow rounded-md">
        <Image
          className="object-cover mx-auto my-0 rounded-md"
          src={data.imgUrl || Img}
          alt="Image"
          width={400}
          height={400}
        />

        <div className="flex flex-col justify-center items-center py-5">
          <h1 className="font-bold text-2xl text-primary">{data.name}</h1>
          <h1 className="font-semibold text-lg text-primary">
            {data.location.address}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
