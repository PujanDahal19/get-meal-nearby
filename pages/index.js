import HomePage from "@/components/HomePage";
import RestroInfo from "@/components/RestroInfo";
import { LocationContext } from "@/hooks/locationContext";
import fetchResData from "@/lib/fetchResData";
import { useContext, useEffect } from "react";

export async function getStaticProps() {
  const restroData = await fetchResData();
  return {
    props: {
      restroData,
    },
  };
}

export default function Home({ restroData }) {
  const { state, dispatch } = useContext(LocationContext);

  const { resData } = state;

  useEffect(() => {
    async function getMealLocation() {
      if (state.latLong) {
        try {
          const response = await fetch(
            `/api/getDataByLocation?latLong=${state.latLong}&limit=6`
          );

          const newResData = await response.json();

          console.log(newResData);

          dispatch({
            type: "SET_RES_DATA",
            payload: { resData: newResData },
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
    getMealLocation();
  }, [state.latLong]);

  return (
    <div className="flex flex-col justify-between min-h-full max-w-full">
      <HomePage />
      {resData.length > 0 && (
        <>
          <div className="text-yellow text-4xl font-bold mx-auto my-0 py-10">
            Restaurants Near You
          </div>
          <RestroInfo resData={resData} />
        </>
      )}

      <div className="text-yellow text-4xl font-bold mx-auto my-0 py-10">
        {resData[0]?.location.locality} Restaurants
      </div>
      <RestroInfo resData={restroData} />
    </div>
  );
}
