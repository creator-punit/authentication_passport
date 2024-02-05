const login = (req, res) => {
  res.send("login");
};

const logout = (req, res) => {
  res.send("logout");
};

const loginWithGoogle = (req, res) => {
  res.send("loginWithGoogle");
};

export { login, logout, loginWithGoogle };
