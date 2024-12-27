import { useState } from "react";
import Projeto from "../Projeto/Projeto"
import projetos from "../json/projetos.json"



const ListaProjeto = () => {
    const [tela, setTela] = useState(window.innerWidth);
    window.addEventListener('resize', ()=> {setTela(window.innerWidth)})

    return(
        <div className="flex flex-col items-center gap-6 sm:gap-12 sm:flex-row flex-wrap sm:justify-center">
            {projetos.map((projeto, index )=> <Projeto key={index} titulo={projeto.titulo} imagem={tela < 768 ? projeto.imagemMobile : projeto.imagem} tecnologias={projeto.tecnologias} urlProjeto={projeto.urlProjeto} urlRepositorio={projeto.urlRepositorio}/>)}

        </div>
    )
}

export default ListaProjeto;