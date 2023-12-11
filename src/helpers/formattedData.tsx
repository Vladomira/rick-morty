export const formattedDate = (data: string) => {
   let date = new Date(data);
   let day = date.getDate();
   let month = date.getMonth() + 1;
   let year = date.getFullYear();

   return `${day}-${month}-${year}`;
};
