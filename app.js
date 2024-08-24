import { Conteudo } from "./components/index.js";

function App(){
    const root = document.getElementById('root');

    root.appendChild(Conteudo());
};

App();