const colorPicked = document.getElementById("color-picker")
const colorSelect = document.querySelector("#color-select")
const getColors = document.getElementById("btn-get-colors")
const colorCols = document.getElementById("color-cols")


let colorsArray = []


getColors.addEventListener("click", getColorsApi)


function getColorsApi(e){
    let hexValue = colorPicked.value.slice(1)
    let modeVal = colorSelect.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeVal}&count=5`)
        .then(res => res.json())
        .then(data => {
             const {colors} = data 
             colorsArray.push(data)
             renderColors(colorsArray)

        })
}

function renderColors(arr){
    let cl = "red"
    let html = ``
    let footer = ``
    arr.map((color)=>{
        color.colors.map((index)=>{
            html += `
            <div>
            <div class="color-return" style="background-color:${index.hex.value}"></div>
            <div class="hex-color">${index.hex.value}</div>
            </div>`
        })
        colorCols.innerHTML = html
    })
    colorsArray = []
}

//`https://www.thecolorapi.com/scheme?hex=${}&mode=analogic&count=6`




