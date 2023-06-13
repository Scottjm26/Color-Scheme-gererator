let color = document.getElementById("color").value
let scheme =document.getElementById("color-schemes").value
let newColors = []

document.getElementById("color").onchange = function() {
  color = this.value;
 }

document.getElementById("color-schemes").onchange = function() {
  scheme = this.value;
    }

document.getElementById("color-button").addEventListener("click", function(){
document.getElementById("color-area").innerHTML =""
fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1,7)}&mode=${scheme}`)
.then(res => res.json())
.then(data => {let colorArray = data.colors
    for(i=0; i < colorArray.length; i++){
        let colorList = colorArray[i].hex.value
        document.getElementById("color-area").innerHTML += `
        <div id="color-items">
        <div id="color-box"style="background-color:${colorList}"></div>
        <div id="color-list"><h3>${colorList}</h3></div>
        </div>`
       }
    })
})
