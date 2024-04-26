function insert(num) 
{
    var resultado = document.getElementById('resultado').innerHTML;
    var ultimoCaractere = resultado.charAt(resultado.length - 1);
    var limiteCaracteres = document.getElementById('limiteCaracteres');
    var mensagemErro = document.getElementById('mensagemErro');

    if (resultado.length === 0 && (num === '+' || num === '/' || num === '*' || num === '.')) {
        mensagemErro.textContent = "Formato de número inválido";
        mensagemErro.classList.add('mensagem-erro');
        setTimeout(function() 
        {
            mensagemErro.textContent = "";
            mensagemErro.classList.remove('mensagem-erro');
        }, 3000); 
        return;
    }

    if (num === '.' && (ultimoCaractere === '+' || ultimoCaractere === '-' || ultimoCaractere === '*' || ultimoCaractere === '/')) {
        mensagemErro.textContent = "Inválido";
        mensagemErro.classList.add('mensagem-erro');
        setTimeout(function() 
        {
            mensagemErro.textContent = "";
            mensagemErro.classList.remove('mensagem-erro');
        }, 3000);
        return;
    }

    if ((num === '+' || num === '-' || num === '*' || num === '/') && (ultimoCaractere === '+' || ultimoCaractere === '-' || ultimoCaractere === '*' || ultimoCaractere === '/')) 
    {
        mensagemErro.textContent = "Inválido";
        mensagemErro.classList.add('mensagem-erro');
        setTimeout(function() 
        {
            mensagemErro.textContent = "";
            mensagemErro.classList.remove('mensagem-erro');
        }, 3000); 
        return;
    }

    if (resultado.length === 0 && (num === '+' || num === '/' || num === '*' || num === '.')) 
    {
        return; 
    }

    if (resultado.length < 15)
     {
        document.getElementById('resultado').innerHTML = resultado + num;
        if (resultado.length + 1 === 15) 
        {
            limiteCaracteres.style.display = "block";
            limiteCaracteres.textContent = "Máximo de 15 caracteres";
        } 
        else 
        {
            limiteCaracteres.style.display = "none";
        }
    }
}


function clean()
{
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('limiteCaracteres').style.display = "none";
}


function back() 
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);

    if (document.getElementById('resultado').innerHTML === "" || document.getElementById('resultado').innerHTML.length < 15) 
    {
        document.getElementById('limiteCaracteres').style.display = "none";
        document.getElementById('mensagemErro').textContent = ""; 
    }
}


function calcular() 
{
    var resultado = document.getElementById('resultado').innerHTML;
    var limiteCaracteres = document.getElementById('limiteCaracteres');

    if (resultado) 
    {
        document.getElementById('resultado').innerHTML = eval(resultado);

        
        if (document.getElementById('resultado').innerHTML.length < 15) 
        {
            limiteCaracteres.style.display = "none";
            document.getElementById('mensagemErro').textContent = ""; 
        }
    } 
    else 
    {
        document.getElementById('resultado').innerHTML = "";
    }
}
