const { createContext } = require("react");

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const { latLong } = useLocation();
  const [newResData, setNewResData] = useState();

  useEffect(() => {
    const getLatLong = async () => {
      if (latLong) {
        const resData = await fetchResData(latLong);
        setNewResData(resData);
      }
    };

    getLatLong();
  }, [latLong]);
  return (
    <LocationContext.Provider value={{ newResData }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
