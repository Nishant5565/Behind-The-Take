import { API_URL } from "../constants/ApiURL";

export const fetchCategories = async () => {
     const response = await fetch(API_URL+"/api/categories");
     return response.json();
   };
   
export const fetchJobs = async (category: string) => {
     const response = await fetch( API_URL+"/api/jobs/featured", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category }),
        }
      );
      return response.json();
    }
