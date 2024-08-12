// Botão Instagram
let Instagram = document.getElementById("Instagram");
Instagram.addEventListener("click", function () {
    window.open("https://www.instagram.com/marciamartinsribeiroantunes?igsh=aHkwdzBjcjRvZGVm", "_blank"); // Abre o Instagram em uma nova aba
});

// Botão Curso em Vídeo
let CursoEmVideo = document.getElementById("ap");
CursoEmVideo.addEventListener("click", function () {
    window.open("https://www.cursoemvideo.com", "_blank"); // Abre o Curso Em Vídeo em uma nova aba
});

// Botão História
let historia = document.getElementById("historia");
historia.addEventListener("click", function () {
    window.location.href = "historia.html"; // Redireciona para a página historia.html
});

// Botão Galeria
let galeria = document.getElementById("galeria");
galeria.addEventListener("click", function () {
    window.location.href = "galeria.html"; // Redireciona para a página galeria.html
});

// Botão Download
let download = document.getElementById("download");
download.addEventListener("click", function () {
    window.open("https://www.mediafire.com/file/5joqmvnrpd6bgbt/Aniversario_Marcia_Sem_Imagens.zip/file", "_blank"); // Abre o link de download em uma nova aba
});
