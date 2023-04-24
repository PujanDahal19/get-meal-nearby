import Image from "next/image";
import Link from "next/link";
import Img from "../../public/pizza.avif";
import fetchResData from "../api/fetchResData";

export async function getStaticProps(staticProps) {
  const resData = await fetchResData();

  const params = staticProps.params;

  const newResData = resData.find((data) => {
    return data.fsq_id.toString() === params.id;
  });
  return {
    props: {
      resData: newResData ? newResData : {},
    },
  };
}

export async function getStaticPaths() {
  const resData = await fetchResData();
  const paths = resData.map((data) => {
    return {
      params: {
        id: data.fsq_id.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
}

const RestroPage = ({ resData }) => {
  return (
    <div className="flex flex-col justify-center items-start min-h-screen max-w-ful gap-10">
      <Link
        href={"/"}
        className="flex cursor-pointer text-xl font-bold text-secondary underline px-20"
      >
        Back to Home
      </Link>
      <div className="flex flex-col justify-start items-start md:flex-row max-w-ful gap-10 px-20">
        <Image
          className="object-cover mx-auto my-0 rounded-md"
          src={resData.imgUrl || Img}
          alt="Image"
        />

        <div className="flex flex-col py-5 mx-auto my-0">
          <h1 className="font-semibold text-3xl text-yellow">{resData.name}</h1>
          <h1 className="font-semibold text-xl text-yellow mx-auto my-0">
            {resData.location.address}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default RestroPage;
