export function Conteudo(){
    const conteudo = document.createElement('div');

    conteudo.innerHTML = `
    
        <div
    class="grid grid-rows-layout w-full h-screen">
    <main class="grid lg:grid-cols-5">
        <div 
            class="flex justify-around items-center lg:flex-col lg:justify-center cor"
            style="background-color: #FBFBF2;">
            <div>
                <i 
                    class="ri-lock-unlock-fill cursor-pointer"
                    style="color: #252525; font-size: 35px;"
                    onclick="bloquearDiv(event)">
                </i>
                <i 
                    class="ri-file-copy-line cursor-pointer" 
                    style="color: #252525; font-size: 35px;"
                    onclick="copiarDiv(event)"></i>
            </div>
            <span class="texto" style="color:#252525; font-size: 35px; font-weight: 600;">#FBFBF2</span>
        </div>
        <div 
            class="flex justify-around items-center lg:flex-col lg:justify-center cor"
            style="background-color: #E5E6E4;">
            <div>
                <i 
                    class="ri-lock-unlock-fill cursor-pointer"
                    style="color: #252525; font-size: 35px;"
                    onclick="bloquearDiv(event)">
                </i>
                <i 
                    class="ri-file-copy-line cursor-pointer" 
                    style="color: #252525; font-size: 35px;"
                    onclick="copiarDiv(event)"></i>
            </div>
            <span class="texto" style="color:#252525; font-size: 35px; font-weight: 600;">#E5E6E4</span>
        </div>
        <div 
            class="flex justify-around items-center lg:flex-col lg:justify-center cor"
            style="background-color: #CFD2CD;">
            <div>
                <i 
                    class="ri-lock-unlock-fill cursor-pointer"
                    style="color: #252525; font-size: 35px;"
                    onclick="bloquearDiv(event)">
                </i>
                <i 
                    class="ri-file-copy-line cursor-pointer" 
                    style="color: #252525; font-size: 35px;"
                    onclick="copiarDiv(event)"></i>
            </div>
            <span class="texto" style="color:#252525; font-size: 35px; font-weight: 600;">#CFD2CD</span>
        </div>
        <div 
            class="flex justify-around items-center lg:flex-col lg:justify-center cor"
            style="background-color: #A6A2A2;">
            <div>
                <i 
                    class="ri-lock-unlock-fill cursor-pointer"
                    style="color: #252525; font-size: 35px;"
                    onclick="bloquearDiv(event)">
                </i>
                <i 
                    class="ri-file-copy-line cursor-pointer" 
                    style="color: #252525; font-size: 35px;"
                    onclick="copiarDiv(event)"></i>
            </div>
            <span class="texto" style="color:#252525; font-size: 35px; font-weight: 600;">#A6A2A2</span>
        </div>
        <div 
            class="flex justify-around items-center lg:flex-col lg:justify-center cor"
            style="background-color: #847577;">
            <div>
                <i 
                    class="ri-lock-unlock-fill cursor-pointer"
                    style="color: #252525; font-size: 35px;"
                    onclick="bloquearDiv(event)">
                </i>
                <i 
                    class="ri-file-copy-line cursor-pointer" 
                    style="color: #252525; font-size: 35px;"
                    onclick="copiarDiv(event)"></i>
            </div>
            <span class="texto" style="color:#252525; font-size: 35px; font-weight: 600;">#847577</span>
        </div>
    </main>
    
    
        <footer
        class="bg-branco-neve-0 w-full px-4 py-2">
            <button
            class="bg-azul-0 text-white font-bold h-12 rounded-md hover:bg-azul-claro-0"
            style="width: 200px;"
            id="gerar">
                Nova cor
            </button>
        </footer>
    </div>
     
    `;
    return conteudo
}