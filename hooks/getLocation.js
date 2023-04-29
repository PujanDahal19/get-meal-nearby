import { useContext, useState } from "react";
import { LocationContext } from "./locationContext";

const useLocation = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  // const [latLong, setLatLong] = useState("");

  const { dispatch } = useContext(LocationContext);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // setLatLong(`${latitude},${longitude}`);
    dispatch({
      type: "SET_LAT_LONG",
      payload: { latLong: `${latitude},${longitude}` },
    });
    setLoading(false);
    setErrMsg("");
  };

  const error = () => {
    setErrMsg("Unable to retrieve your location.");
    setLoading(false);
  };

  const handleGetLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      setErrMsg("Geolocation is not supported by your browser.");
      setLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    errMsg,
    loading,
    handleGetLocation,
  };
};

export default useLocation;
