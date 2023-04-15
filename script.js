var botao = window.document.querySelector('.botao')
var nomeCart = window.document.querySelector('input#nomeCart')
var numeroCart = window.document.querySelector('input#numerCart')
var vMesCart = window.document.querySelector('input#mesCart')
var vAnoCart = window.document.querySelector('input#anoCart')
var cdvCart = window.document.querySelector('input#cdvCart')




function verificador(){
    var titularCart = String(nomeCart.value)
    var numeroCartaoCredito = Number(numeroCart.value)
    var validadeMesCartao = Number(vMesCart.value)
    var validadeAnoCartao = Number(vAnoCart.value)
    var codigoSeguracaCarto = Number(cdvCart.value)

    var semEspaco = titularCart.replace(/\s+/g, '')

    var nometTitularCart = titularCart.length
    var validadorCratao = String(numeroCartaoCredito).length
    var validadorMes = String(validadeAnoCartao).length
    var contadorAno = String(validadeAnoCartao).length
    var validadorCvc = String(codigoSeguracaCarto).length
    var verificadorFormato = String(titularCart)


    if(isNaN(semEspaco) == true && nometTitularCart != 0){
            if (numeroCartaoCredito < 9999999999999999.0){
                    if (validadorCratao == 16){
                            if(validadeMesCartao < 12){
                                    if(validadorMes == 2){
                                        if(validadeAnoCartao > 23 || validadeAnoCartao < 30 ){
                                                if(contadorAno == 2){
                                                        if(validadorCvc == 3){
                                                            var editarNumeroCart = String(numeroCartaoCredito)
                                                            var dividir = editarNumeroCart.match(/.{1,4}/g);
                                                            var final = dividir.join(' ')
                                                            
                                                            const numero = "1234567890123456";
                                                            const grupos = numero.match(/.{1,4}/g);
                                                            const resultado = grupos.join(" ");

                                                            var nCartFalso = window.document.querySelector('.numeroCard')
                                                            nCartFalso.innerHTML = `${final}`
                                                            var tCartFalso = window.document.querySelector('.nomeCard')
                                                            tCartFalso.innerHTML = `${titularCart}`
                                                            var dMesFalso = window.document.querySelector('.mesCf')
                                                            dMesFalso.innerHTML = `${validadorMes}`
                                                            var dAnoFalso = window.document.querySelector('.anoCf')
                                                            dAnoFalso.innerHTML = `${validadeAnoCartao}`
                                                            var cvcFalso = window.document.querySelector('.alinhamento_cdv')
                                                            cvcFalso.innerHTML = `${codigoSeguracaCarto}`

                                                            var concluido = window.document.querySelector('.concluido')
                                                            concluido.style = 'visibility: visible'

                                                            var voltar = window.document.querySelector('.botaoConcluido')
                                                            voltar.addEventListener('click', ()=>{
                                                                location.reload()
                                                            })
                                                        } else {
                                                            alert('favor informar cv correto')
                                                            cdvCart.style = 'border: 1px solid var(--Red)'
                                                        }
                                                } else {
                                                    alert('favor informar ano valido')
                                                     vAnoCart.style = 'border: 1px solid var(--Red)'
                                                }
                                        } else {
                                            alert('favor informar ano valido')
                                            vAnoCart.style = 'border: 1px solid var(--Red)'
                                        }
                                    }else{
                                        alert('favor informar mes valido')
                                        vMesCart.style = 'border: 1px solid var(--Red)'
                                    }
                            }else{
                                alert('favor informar mes valido')
                                vMesCart.style = 'border: 1px solid var(--Red)'
                            }
                    } else {
                        alert('favor verificar numero de cartão de credito')
                        numeroCart.style = 'border: 1px solid var(--Red)'
                    }
            } else {
                alert('favor verificar numero de cartão de credito')
                numeroCart.style = 'border: 1px solid var(--Red)'
            }
    } else {
        alert('favor informar nome valido')
        nomeCart.style = 'border: 1px solid var(--Red)'
    } 
    
    /*if(numeroCartaoCredito > 9999999999999999.0){
        alert('favor verificar numero de cartão de credito')
        numeroCart.style = 'border: 1px solid var(--Red)'
    } else if (validadorCratao != 16){
        alert('favor verificar numero de cartão de credito')
        numeroCart.style = 'border: 1px solid var(--Red)'
    }else if(validadeMesCartao > 12) {
        alert('favor informar mes valido')
        vMesCart.style = 'border: 1px solid var(--Red)'
    } else if (validadorMes != 2){
        vMesCart.style = 'border: 1px solid var(--Red)'
    }else if(validadeAnoCartao < 23 || validadeAnoCartao > 30 ) {
            alert('favor informar ano valido')
            vAnoCart.style = 'border: 1px solid var(--Red)'
    } else if (contadorAno != 2){
        vAnoCart.style = 'border: 1px solid var(--Red)'
    }else if (validadorCvc != 3) {
        alert('favor informar cv correto')
        cdvCart.style = 'border: 1px solid var(--Red)'
    } else {
        var editarNumeroCart = String(numeroCartaoCredito)
        var dividir = editarNumeroCart.match(/.{1,4}/g);
        var final = dividir.join(' ')
        
        /*const numero = "1234567890123456";
        const grupos = numero.match(/.{1,4}/g);
        const resultado = grupos.join(" ");

        var nCartFalso = window.document.querySelector('.numeroCard')
        nCartFalso.innerHTML = `${final}`
        var tCartFalso = window.document.querySelector('.nomeCard')
        tCartFalso.innerHTML = `${titularCart}`
        var dMesFalso = window.document.querySelector('.mesCf')
        dMesFalso.innerHTML = `${validadorMes}`
        var dAnoFalso = window.document.querySelector('.anoCf')
        dAnoFalso.innerHTML = `${validadeAnoCartao}`
        var cvcFalso = window.document.querySelector('.alinhamento_cdv')
        cvcFalso.innerHTML = `${codigoSeguracaCarto}`

        var concluido = window.document.querySelector('.concluido')
        concluido.style = 'visibility: visible'

        var voltar = window.document.querySelector('.botaoConcluido')
        voltar.addEventListener('click', ()=>{
            location.reload()
        })
    }*/
    
}



botao.addEventListener('click', verificador)