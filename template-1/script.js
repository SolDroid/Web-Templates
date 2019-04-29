const node = document.getElementById("word");
const output = document.getElementById("text");

node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      
      output.innerHTML = output.innerHTML + " " + this.value;
      
    }
});