const init =()=>{
    document.getElementById("main").style.display="none";
    document.getElementById("big").style.display="block";
    document.getElementById("secondmain").style.display="none";
    document.getElementById("fill").style.display="none";

};

var form = document.getElementById('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    document.getElementById("main").style.display="block";
    document.getElementById("big").style.display="none";
    const location = document.getElementById('location').value;
    console.log(location)
    const output = document.getElementsByClassName('output')
    for(let i=0;i<output.length;i++){
        output[i].innerText = location
    }
    output()    
})

const button =()=>{
    document.getElementById("main").style.display="none";
    document.getElementById("secondmain").style.display="block";
    
}




const del=()=>{
    document.getElementById("secondmain").style.display="none";
    document.getElementById("fill").style.display="block";
    
}
