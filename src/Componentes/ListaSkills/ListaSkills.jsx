import Skills from "../Skills/Skills";

const ListaSkills = () => {
    return(
        <div className="flex gap-4 flex-wrap lg:max-w-[70%] m-auto flex justify-center">
            <Skills imagem={"/imagens/icoJavascript.svg"} linguagem={"JavaScript"}/>
            <Skills imagem={"/imagens/icoReact.svg"} linguagem={"React Js"}/>
            <Skills imagem={"/imagens/icoJava.svg"} linguagem={"Java"}/>
            <Skills imagem={"/imagens/icoPostgresql.svg"} linguagem={"PostgreSql"}/>
            {/* <Skills imagem={"/imagens/icoSpringBoot.svg"}/> */}
            <Skills imagem={"/imagens/icoHtml.svg"} linguagem={"Html"}/>
            <Skills imagem={"/imagens/icoCss.svg"} linguagem={"Css"}/>
            <Skills imagem={"/imagens/icoTailwind.svg"} linguagem={"TailWind"}/>
        </div>
    )
}  

export default ListaSkills;