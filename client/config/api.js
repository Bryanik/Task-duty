import { connect } from "./connect";

export const login = async (username, password) => {
  return connect.post("/user/login", { username, password });
};
export const register = async (username, email, password) => {
  return connect.post("/user/register", { username, email, password });
};
export const authenticateUser = async (token) => {
  return connect.get("/user", {
    headers: { Authorization: `Bearer:${token}` },
  });
};
