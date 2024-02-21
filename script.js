const suggestBox = document.querySelector('.suggestion-box');
const inputBox = document.querySelector('#searchText');

inputBox.addEventListener('keyup', filterSuggestions)

inputBox.addEventListener('click',()=>{
    inputBox.select();
});

async function filterSuggestions(){
    const response = await fetch("./data.json");
    const keywordsList = await response.json();
    let suggest = [];
    let input = this.value.trim();
    if(input.length){
        suggest=keywordsList.filter((keyword)=>{
            return keyword.search.toLowerCase().includes(input.toLowerCase());
        });
     }

     display(suggest);

     if(!suggest.length){
        suggestBox.innerHTML='';
     }

     }

function display(suggest){
    const content = suggest.map((list)=>{
        return `<li onclick='selectInput(this)'>${list.search}</li>`;
    })
    console.log(content)
    suggestBox.innerHTML=`<ul>${content.join('')}</ul>`
}

function selectInput(list){
    inputBox.value=list.innerHTML;
    suggestBox.innerHTML = "";
    }







