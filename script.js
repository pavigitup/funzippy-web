const inputEl = document.getElementById("inputName");
const headingEl = document.getElementById("heading");

const onChangeName = (event) => {
    inputEl.value = event.target.value
}


const onClickSubmit = (event) => {
    event.preventDefault(); 
    console.log(headingEl.textContent);
    headingEl.textContent = inputEl.value;
    
};  


