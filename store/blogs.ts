import { defineStore } from "pinia";
import { useCookie } from "#app";
import axios from "axios";

const config = useRuntimeConfig();
const url = config.apiUrl;

interface Category {
  id: number;
  name: string;
  description: string;
  parent_id: number | null;
  children: Category[];
}

export const useBlogsStore = defineStore("blogs", {
  state: () => ({
    blogs: [] as Category[],
  }),

  actions: {
    async getBlogs() {
      const token = useCookie("token").value;
      try {
        const response = await axios.get(`${url}blogs/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.blogs = response.data.data;
      } catch (error: any) {
        console.log(error);
      } finally {
      }
    },
  },
});
