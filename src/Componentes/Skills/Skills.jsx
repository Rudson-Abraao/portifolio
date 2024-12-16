const Skills = ({imagem, linguagem}) => {
    return (
        <div className="h-[90px] w-[90px] sm:w-[150px] sm:h-[150px] p-4 sm:p-2 bg-cinzaClaro border-borda border flex items-center justify-center rounded-md flex-col gap-2">
            <img src={imagem} className="h-[80px] w-[80px]" />
            <p className="text-cinza text-center hidden md:block ">{linguagem}</p>
        </div>    
    )
}

export default Skills;