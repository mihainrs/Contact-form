let theForm = document.getElementById("main-container");
let errorMsg = document.querySelectorAll(".errorMessage");
let submit = document.getElementById("submit");
let success = document.getElementById("success");



      for(let i=0; i<theForm.elements.length; i++){
        theForm.elements[i].addEventListener("input", ()=>{
            if(theForm.elements[i].value.length!=0)
                {
                errorMsg[i].style.display="none";
                }else
                errorMsg[i].style.display="block";

                if(errorMsg[i].style.display==="none"){
                    theForm.addEventListener("submit", submitForm);
                  }
            }
        )} 
          

        function submitForm(event){
           event.preventDefault();
           success.style.display="block";
        }

            
        
        