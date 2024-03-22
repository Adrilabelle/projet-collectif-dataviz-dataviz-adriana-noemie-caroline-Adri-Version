
const ulElement = document.querySelector("ul");
fetch("https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques?code_bss=04502X0043/SGB7&date_debut_mesure=2014-01-20&date_fin_mesure=2024-01-20&size=20000")
.then(response => { 
    return response.json()
})
    .then((mesures)=>{
       // console.log(mesures)
        for (const m of mesures.data){ 
        //console.log(m) // type = object

            const liElement = document.createElement("li");
            liElement.innerText = m.date_mesure;
            ulElement.appendChild(liElement)

    

            const para = document.createElement("p");
            para.innerText = m.niveau_nappe_eau;
            liElement.appendChild(para)

            }

            // console.log(mesures.data[0]) // creer une variable avec cette valeur
            // console.log(mesures.data[mesures.data.length-1])
            const nappe_2014 = (mesures.data[0]);
            console.log(nappe_2014)
            const nappe_2024 = (mesures.data[mesures.data.length-1]);
        
            const barCanvas = document.getElementById("barCanvas");

            const barChart= new Chart(barCanvas, {
                type: "bar",
                data: {
                    labels: [nappe_2014, nappe_2024],
                    datasets: [{
                        data: []
                        // backgroundColor:[
                        //     "lightgreen",
                        //     "lightblue",
                        // ]
                    }]
                }
            })
    })
    