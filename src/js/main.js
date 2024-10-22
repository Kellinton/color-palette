document.addEventListener('DOMContentLoaded', () => {
const gerarCores = document.getElementById('gerar');
const coresDiv = [...document.getElementsByClassName('cor')];
    gerarCores.addEventListener('click', () => {

        coresDiv.forEach(cor => {
            const caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
            const corBloqueada = !(cor.firstElementChild.firstElementChild.className.includes('ri-lock-unlock-fill'));
            let corGerada = [];
            
            if(corBloqueada){  // travar a cor
                return;
            }

            for (let i = 0; i < 6; i++) {
                const numeroSorteado = Math.floor(Math.random() * 16);
        
                corGerada.push(caracteres[numeroSorteado]);
            }
            
            cor.lastElementChild.innerHTML = `#${corGerada.join('')}`;
            cor.style.backgroundColor = `#${corGerada.join('')}`;
            cor.style.transition = "all 0.7s";

        });

    })
})
function bloquearDiv(event){

    event.target.classList.toggle('ri-lock-unlock-fill');
    event.target.classList.toggle('ri-lock-fill');

}

function copiarDiv(event){
    let texto = event.target.parentElement.nextElementSibling;

    navigator.clipboard.writeText(texto.textContent);

    toastr.success('Copiado!');
}