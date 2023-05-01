import Image from "next/image";
import Link from "next/link";
import Img from "../../public/pizza.avif";

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "@/hooks/locationContext";
import { isEmpty } from "@/utils";
import fetchResData from "@/lib/fetchResData";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;

  const resData = await fetchResData();

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

const RestroPage = (initialProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="max-w-full min-h-full flex justify-center items-center text-3xl font-bold text-yellow">
        Loading...
      </div>
    );
  }

  const id = router.query.id;

  const [newResData, setNewResData] = useState(initialProps.resData);
  const { state } = useContext(LocationContext);
  const { resData } = state;

  useEffect(() => {
    if (isEmpty(initialProps.resData)) {
      if (resData.length > 0) {
        const findResDataById = resData.find((data) => {
          return data.fsq_id.toString() === id;
        });
        setNewResData(findResDataById);
      }
    }
  }, [id]);

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
          className="object-cover mx-auto my-0 rounded-md h-[400px]"
          src={newResData.imgUrl || Img}
          alt="Image"
          width={400}
          height={0}
        />

        <div className="flex flex-col py-5 mx-auto my-0">
          <h1 className="font-semibold text-3xl text-yellow">
            {newResData.name}
          </h1>
          {newResData.location?.address && (
            <h1 className="font-semibold text-xl text-yellow mx-auto my-0">
              {newResData.location.address}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default RestroPage;
