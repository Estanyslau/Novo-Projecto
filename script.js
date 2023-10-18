// Define a função toggleMede
function toggleMede() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// Seleciona o botão pelo id
var botao = document.getElementById("switch")

// Adiciona um ouvinte de evento de clique ao botão
botao.addEventListener("click", toggleMede)

//Chama a função toggleMede
toggleMede()
