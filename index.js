const saveChanges = () => {
   const taskData = {
       id: `${Date.now()}`, // unique number for cards /* 7981346971356 */
       imageUrl: document.getElementById(imageurl).value,
       taskTitle: document.getElementById(tasktitle).value,
       tasKtype: document.getElementById(tasktype).value,
       tasKDescription: document.getElementById(taskdescription).value,
   };

   console.log(taskData);
};