import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.200.202:3003/",
  headers: {
    "Content-Type": "application/json",
  },
});

const tokenLocal = localStorage.getItem("token") as string;
api.defaults.headers.common.Authorization = `Bearer ${tokenLocal}`;
