import Card from "@/components/Card";
import HomePage from "@/components/HomePage";
import RestroInfo from "@/components/RestroInfo";
import useLocation from "@/hooks/getLocation";
import fetchResData from "@/pages/api/fetchResData";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const resData = await fetchResData();
  return {
    props: {
      resData,
    },
  };
}

export default function Home({ resData }) {
  const { loading, errMsg, handleGetLocation, latLong } = useLocation();
  const [item, setItem] = useState("");

  useEffect(() => {
    async function getMealLocation() {
      if (latLong) {
        try {
          const newResData = await fetchResData(latLong);
          console.log(newResData);
          setItem(newResData);
        } catch (err) {
          console.log(err);
        }
      }
    }
    getMealLocation();
  }, [latLong]);

  return (
    <div className="flex flex-col justify-between min-h-full max-w-full">
      <HomePage
        loading={loading}
        handleGetLocation={handleGetLocation}
        errMsg={errMsg}
      />

      {item.length > 0 && (
        <>
          <div className="text-yellow text-4xl font-bold mx-auto my-0 py-10">
            Restaurants Near You
          </div>
          <RestroInfo resData={item} />
        </>
      )}
      <div className="text-yellow text-4xl font-bold mx-auto my-0 py-10">
        {resData[0].location.locality} Restaurants
      </div>
      <RestroInfo resData={resData} />
    </div>
  );
}
