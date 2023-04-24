import React from "react";
import Card from "./Card";

const RestroInfo = ({ resData }) => {
  return (
    <>
      <div className="text-yellow text-4xl font-bold mx-auto my-0 py-10">
        {resData[0].location.locality} Restaurants
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center px-20 my-5">
        {resData.map((data) => {
          return <Card key={data.fsq_id} data={data} />;
        })}
      </div>
    </>
  );
};

export default RestroInfo;
