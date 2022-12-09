import httpService from "./httpService";

const TOKEN_KEY = "token";

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function loginUser(credentials) {
  try {
    const { data } = await httpService.post("/auth", credentials);
    localStorage.setItem(TOKEN_KEY, data.token);
    return data.token
  } catch (e) {
    console.log(e)
  }
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

const usersService = {
  createUser,
  loginUser,
  logout,
};

export default usersService;
