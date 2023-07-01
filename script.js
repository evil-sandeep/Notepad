const addBtn= document.querySelector("#adbtn");

const main=document.querySelector("#main");


//save all notes to local storage
const saveNotes =()=>{
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
       
       notes.forEach(
        (note) => { 
            data.push(note.value)   
       })

       if(data.length===0){
          localStorage.removeItem("notes");
       }
       else{
        localStorage.setItem("notes",JSON.stringify(data));
       }
     
    }
   
// Add  Note button
addBtn.addEventListener(
    "click",
    function(){
        addNote();
    }
);
// Adding note
const addNote =(text="")=>{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="tool">
  
    <i class="fas trash fa-trash"></i>
    <i class="fas save fa-save"></i>

</div>

<textarea>${text}</textarea>
    `;

// DELETE THE NOTE
   note.querySelector(".trash").addEventListener(
    "click",
    function(){
        note.remove();
        saveNotes();  
    }
   )


   note.querySelector(".save").addEventListener(
    "click",
    function(){
       saveNotes();
    }
   )
// Auto savéNote
 note.querySelector("textarea").addEventListener(
    "click",
    function(){
        saveNotes();
    }
 )

    main.appendChild(note);
    saveNotes();
}
//show empty note on start  ,lnots have save our notes
(
    function(){
        const lnotes=JSON.parse(localStorage.getItem("notes"));
        if(lnotes===null){
            addNote();
        }
        else{
            lnotes.forEach(
                (lnotes)=>{
                    addNote(lnotes);
                }
            ) 
        } 
    }
)()
