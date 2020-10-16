fetch ("colors.json")
    .then(colors => colors.json())
    .then(colors => {
        addCardColors(colors)
    })

function addCardColors(colors){
    for (let c = 0; c < colors.length; c++){
        const addColor = document.getElementById("charteColors")
        const addCard = document.createElement("div")
        switch (c) {
            case 0 : addCard.classList.add("col12", "col-md-6", "mb-3");break
            default : addCard.classList.add("col12", "col-md-3", "mb-3");break
        }
        switch (c) {
            case 5 : case 6 : addCard.innerHTML = `
                <div class="card mb-4 mb-lg-0 border-gf h-100">
                    <div class="card-body" style="background-color: ${colors[c].hex};">
                        <p class="h6 card-text text-gf">${colors[c].name}</p>
                        <ul>
                            <li class="small text-gf">HEX ${colors[c].hex}</li>
                            <li class="small text-gf">RGB ${colors[c].rgb}</li>
                            <li class="small text-gf">CMYK ${colors[c].cmyk}</li>
                            <li class="small text-gf">PANTONE ${colors[c].pantone}</li>
                        </ul>  
                    </div>
                </div>`; break
            default : addCard.innerHTML = `
                <div class="card mb-4 mb-lg-0 border-gf h-100">
                    <div class="card-body" style="background-color: ${colors[c].hex};">
                        <p class="h6 card-text text-blnc">${colors[c].name}</p>
                        <ul>
                            <li class="small text-blnc">HEX ${colors[c].hex}</li>
                            <li class="small text-blnc">RGB ${colors[c].rgb}</li>
                            <li class="small text-blnc">CMYK ${colors[c].cmyk}</li>
                            <li class="small text-blnc">PANTONE ${colors[c].pantone}</li>
                        </ul>  
                    </div>
                </div>`; break
        }
        addColor.appendChild(addCard)        
    }
}