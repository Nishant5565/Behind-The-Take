export const fetchCategories = async () => {
     const response = await fetch("http://localhost:3000/api/categories");
     return response.json();
   };
   
   export const fetchJobs = async (category: string) => {
     const response = await fetch(
       `http://localhost:3000/api/jobs/featured?category=${category}`
     );
     return response.json();
   };
   