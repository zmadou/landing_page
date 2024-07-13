$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            }
        },
        submitHandler: function(form) {
            alert("Sua mensagem foi enviada para análise, entraremos em contato.");
            form.reset();
        },
        invalidHandler: function (form, validate) {
            alert("Por favor, preencha os campos para prosseguir com o formulário");
        }
    })
})






