const { createContext, useReducer } = require("react");

export const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const storeReducer = (state, action) => {
    switch (action.type) {
      case "SET_LAT_LONG": {
        return { ...state, latLong: action.payload.latLong };
      }
      case "SET_RES_DATA": {
        return { ...state, resData: action.payload.resData };
      }
      default:
        throw new Error("Unhandled action type");
    }
  };

  const initialState = {
    latLong: "",
    resData: [],
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <LocationContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
