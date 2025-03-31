import { create } from "zustand";
import axiosInstance from "@/utils/axios";

const useUserStore = create((set) => ({
  users: [],
  user: null,
  admin: null,
  token: null,
  loading: false,
  error: null,


  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get("/admin/users");
      const data = response.data;
      set({ users: data.users, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch users",
        loading: false,
      });
    }
  },

  signupUser: async ({ data }) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post("/signup", data);
      set({
        user: response.data.user,
        token: response.data.token,
        loading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Signup failed",
        loading: false,
      });
      throw error;
    }
  },

  loginUser: async ({ data }) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post("/login", data);
      if (response.data.token) {
        set({
          user: response.data.user,
          token: response.data.token,
          loading: false,
        });
        console.log(response.data);
      } else {
        set({
          error: response.data.message || "Login failed",
          loading: false,
        });
      }
      return response.data;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Login failed",
        loading: false,
      });
      throw error;
    }
  },

  logoutUser: () => {
    set({ user: null, token: null });
  },
}));

export default useUserStore;
