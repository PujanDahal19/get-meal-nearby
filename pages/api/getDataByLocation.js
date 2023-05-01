import fetchResData from "../../lib/fetchResData";

const getDataByLocation = async (req, res) => {
  try {
    const resData = await fetchResData();
    res.status(200);
    res.json(resData);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ ErrorMessage: err });
  }
};

export default getDataByLocation;
