function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/menino-criança.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade < 65) {
                //ADULTO
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/menina-criança.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade < 65) {
                //ADULTO
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}