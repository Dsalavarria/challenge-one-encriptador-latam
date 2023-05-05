const textArea = document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");

function btnEncriptar()
{
    const textEncriptado= encriptar(textArea.value)
    mensaje.value=textEncriptado
    textArea.value="";
    mensaje.stylebackgroundimage="none";
}
function encriptar(stringEncriptado)
{
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i=0;i< matrizcodigo.length;i++)
    {
        if(stringEncriptado.includes(matrizcodigo[i][0]))
        {
            stringEncriptado=stringEncriptado.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return stringEncriptado
}
function desencriptar(stringDesencriptado)
{
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0;i< matrizcodigo.length;i++)
    {
        if(stringDesencriptado.includes(matrizcodigo[i][1]))
        {
            stringDesencriptado=stringDesencriptado.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }
    }
    return stringDesencriptado
}
function btnDesencriptar()
{
    const textEncriptado= desencriptar(textArea.value)
    mensaje.value=textEncriptado
    textArea.value="";
}
function btncopiar()
{
    var textcopiado =document.querySelector(".mensaje");
    textcopiado.select()
    var s=document.execCommand('copy')
    if(s)
    {   mensaje.value="";
        alert("texto copiado");
    }
    
    else
    alert("no se pudo copiar el texto")
}
