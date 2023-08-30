import * as authSerivce from "../services/auth";

export const register = async (req, res) => {
  try {
    const response = await authSerivce.registerService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: error.message,
    });
  }
};
