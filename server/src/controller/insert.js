export const insert = async (req, res) => {
  try {
    const response = await authSerivce.insertService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed to insert data" + error.message,
    });
  }
};
