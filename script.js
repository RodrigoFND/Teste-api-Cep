

function getCep()
{
    var cep = Number(document.querySelector("#cep").value);
    console.log(cep.toString().length)
    
    
   
    if(cep.toString().length < 8 || cep.toString().length > 9)
    {
        alert("Cep apenas com 8 digitos!")
        return;

    }

    
    
    let ajax = new XMLHttpRequest();
    ajax.open("GET", `https://viacep.com.br/ws/${cep}/json/`)
    console.log(ajax)
    
    
    
    ajax.onreadystatechange = function()
    {
        
        console.log(ajax.readyState);
        console.log(ajax.status)
        if(ajax.readyState == 4 && ajax.status == 200)
        {
            let conversao = ajax.response;
            let enderecoFile = JSON.parse(conversao);
            console.log(enderecoFile);

           
            document.querySelector("#logradouro").value = enderecoFile.logradouro
            document.querySelector("#complemento").value = enderecoFile.complemento
            document.querySelector("#bairro").value = enderecoFile.bairro
            document.querySelector("#localidade").value = enderecoFile.localidade

            
           

            

            

        }

    }
    ajax.send()
    
}