// convém estar no onload da janela
window.onload = function()
{

  // primeiro tens de sacar a dimensão da janela
  // neste caso a área visível do browser
  var largura = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var img = document.querySelector("#image");
  // depois é brincar com if's e colocar o banner que queiras:

  if(largura>=1024)
  {
    img.setAttribute('src', 'images/image-product-desktop.jpg');
    console.log(largura);
  } else {
    img.setAttribute('src', 'images/image-product-mobile.jpg');
   console.log(largura);
  }
} // fim do window.onload