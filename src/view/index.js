function teste(){
    var nome = $('#nome').val()
    var sobrenome = $('#sobrenome').val()
    $.ajax({
        url: "/user",
        method: "post",
        data: {nome, sobrenome}
    }).done(retorno=>{console.log(retorno)})
    return false
}