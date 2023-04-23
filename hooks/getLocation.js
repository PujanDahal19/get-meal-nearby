import { useState } from "react";

const useLocation = () => {
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setErrMsg("");
    setLoading(false);
  }

  function error() {
    setLoading(false);
    setErrMsg("Unable to retrieve your location");
  }

  const handleLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      setErrMsg("Geolocation is not supported by your browser");
      setLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    errMsg,
    loading,
    handleLocation,
  };
};

export default useLocation;
