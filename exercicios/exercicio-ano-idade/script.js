function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('ERRO!Verifique os dados e tente novamente!')
}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Idade calculada: ${idade}`
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','imagem/homem/crianca-menino.jpg')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src','imagem/homem/jovem-menino.jpg')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','imagem/homem/adulto-homem.jpg')
        }else{
            //idoso
            img.setAttribute('src','imagem/homem/idoso-homem.jpg')
        }
    }
        else if (fsex[1].checked){
            genero = 'Mulher'
        }
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','imagem/mulher/crianca-menina.jpg')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src','imagem/mulher/jovem-menina.jpg')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','imagem/mulher/adulto-mulher.jpg')
        }else{
            //idoso
            img.setAttribute('src','imagem/mulher/adulto-idoso.jpg')
        }
    }
        res.style.textAllign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


