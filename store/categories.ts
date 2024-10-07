import { defineStore } from "pinia";
import { useCookie } from "#app";
import axios from "axios";

const url = process.env.VITE_URL;

interface Category {
  id: number;
  name: string;
  description: string;
  parent_id: number | null;
  children: Category[];
}

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: [] as Category[],
  }),

  actions: {
    async getCategories() {
      const token = useCookie("token").value;
      try {
        const response = await axios.get(`${url}categories/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.categories = response.data.data;
      } catch (error: any) {
        console.log(error);
      } finally {
      }
    },
  },
});
