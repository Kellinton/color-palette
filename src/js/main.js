const btn = document.getElementById('gerar');
const coresDiv = [...document.getElementsByClassName('cor')];
const textosDiv = [...document.getElementsByClassName('texto')];


btn.addEventListener('click', () => {
    let contador = 0;
    coresDiv.forEach(cor => {

        const caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let corGerada = [];
    
        for (let i = 0; i < 6; i++) {
            const numeroSorteado = Math.floor(Math.random() * 16);
    
            corGerada.push(caracteres[numeroSorteado]);
        }

        textosDiv[contador].innerHTML = `#${corGerada.join('')}`;
        cor.style.backgroundColor = `#${corGerada.join('')}`;

        contador++;

    });

})
