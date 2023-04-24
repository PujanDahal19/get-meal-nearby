import { useState } from "react";

const useLocation = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [latLong, setLatLong] = useState("");

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(`${latitude},${longitude}`);
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
    latLong,
    handleGetLocation,
  };
};

export default useLocation;
