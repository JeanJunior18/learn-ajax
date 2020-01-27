function list(){
    console.log('List acionada')
    $.ajax({
        url: "/show",
        method: "post",
    }).done(dados=>console.log(dados))
    return false
}