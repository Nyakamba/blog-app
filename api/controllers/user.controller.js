export const test = (req, res) => {
  res.json({ message: "API is working" });
};

export const updateUser = async (req, res, next) => {
  console.log(req.user);
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    next(401, "Please fill all the details");
  }
};
