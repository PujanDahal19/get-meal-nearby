const ILoveDogs = (req, res) => {
  console.log({ req, res });
  req.query = {
    breed: "gs",
  };
  const query = req.query.breed;

  res.status(200).json({ message: `I love ${query}` });
};

export default ILoveDogs;
