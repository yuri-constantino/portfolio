function toggleMode(){
  const html = document.documentElement;
  html.classList.toggle("light")
  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')}
  */
   
  //pegar a tag img
  const img = document.querySelector("#profle img")

  if (html.classList.contains("light")){
    //se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto light Mode")
  } else {
    // se tiver em dark mode adicionar a imagem dark
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", "foto dark mode")
  }
}