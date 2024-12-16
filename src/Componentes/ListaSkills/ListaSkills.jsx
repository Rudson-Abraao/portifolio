import Skills from "../Skills/Skills";

const ListaSkills = () => {
    return(
        <div className="flex gap-4 flex-wrap lg:max-w-[70%] m-auto flex justify-center">
            <Skills imagem={"/imagens/icoJavascript.svg"}/>
            <Skills imagem={"/imagens/icoReact.svg"}/>
            <Skills imagem={"/imagens/icoJava.svg"}/>
            <Skills imagem={"/imagens/icoPostgresql.svg"}/>
            {/* <Skills imagem={"/imagens/icoSpringBoot.svg"}/> */}
            <Skills imagem={"/imagens/icoHtml.svg"}/>
            <Skills imagem={"/imagens/icoCss.svg"}/>
            <Skills imagem={"/imagens/icoTailwind.svg"}/>
        </div>
    )
}  

export default ListaSkills;