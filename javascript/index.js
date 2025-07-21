function verOcultarCurso(){
    const secao = document.getElementById("cursoCalendario");
    if(secao.style.display === "none"){
        secao.style.display = 'flex';
    }else{
        secao.style.display = 'none';
    }
}