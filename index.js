const taskContainer = document.querySelector(".task__container");
console.log(taskContainer);

// global store

let globalstore = [];

const newCard = ({
    id,
    imageUrl,
    taskTitle,
    taskDescription,
    tasktype,
    } ) => `<div class="col-md-6 col-lg-4 " id=${id}>
<div class="card shadow ">
    <div class="card-header d-flex justify-content-end gap-3"> 
      <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
       <button type="button" id=${id} class="btn btn-outline-danger" id=${id} onlick="deletecard.apply(this, arguments)"><i class="fas fa-trash-alt" onlick="deletecard.apply(this, arguments)"></i></button>
    </div>          
        <img src=${imageUrl} alt="...">
        <div class="card-body">
        <h5 class="card-title">${taskTitle}</h5>
      <p class="card-text">${taskDescription}</p>
      <span class="badge bg-primary">${tasktype}</span>
    </div>
    <div class="card-footer text-muted">
       <button type="button" class="btn btn-outline-primary float-end">Primary</button>

    </div>
  </div>
    </div>`;

   const loadInitialTaskCards = () => {

     const getInitialData = localStorage.getItem("tasky");
     if(!getInitialData) return;

     const { cards } = JSON.parse(getInitialData); 

     cards.map((card) => {
      const createNewCard = newCard(cardObject);
      taskContainer.insertAdjacentHTML("beforeend", createNewCard);
      globalstore.push(card);
     });

   };

   const deletecard = (event) => {

    event = window.event;
    const targetID = event.target.id;
    const tagname = event.target.tagName;
    console.log(targetID);

    const newUpdatedArray = globalStore.filter((cardObject) => cardObject.id != targetID);

  

   globalstore = newUpdatedArray;

   if(tagname === "BUTTON"){

   return event.target.parentNode.parentNode.parentNode.parentNode.removeChild(
    event.target.parentNode.parentNode.parentNode);
  };

   
  return event.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
    event.target.parentNode.parentNode.parentNode.parentNode);
    
  };

 


const saveChanges = () => {
   const taskData = {
       id: `${Date.now()}`, 
       imageUrl: document.getElementById("imageurl").value,
       taskTitle: document.getElementById("tasktitle").value,
       tasKtype: document.getElementById("tasktype").value,
       taskDescription: document.getElementById("taskdescription").value,
   };
    const createNewCard = newCard(taskData)

    taskContainer.insertAdjacentHTML("beforeend", createNewCard);
    globalstore.push(taskData);
    
    localStorage.setItem("tasky", JSON.stringify({ cards: globalstore}));
};

