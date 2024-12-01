// Obtendo o modal e o botão
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, o modal será exibido
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no 'x', o modal será fechado
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele também será fechado
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
