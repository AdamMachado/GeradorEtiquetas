function buscarCEP(tipo) {
    var cep = $("#" + tipo + "_Cep").val();

    $.ajax({
        url: "/Etiqueta/BuscarCEP",
        type: "GET",
        data: { cep: cep },
        success: function (endereco) {
            if (endereco != null) {
                $("#" + tipo + "_Logradouro").val(endereco.logradouro);
                $("#" + tipo + "_Bairro").val(endereco.bairro);
                $("#" + tipo + "_Localidade").val(endereco.localidade);
                $("#" + tipo + "_Uf").val(endereco.uf);
            } else {
                swal("Alerta!", "CEP não encontrado.", "warning");
            }
        },
        error: function () {
            swal("Erro!", "Ocorreu um erro ao buscar o CEP.", "error");
        }
    });
}

// Funcionalidade para imprimir ao pressionar o botão
document.getElementById('btnImprimir').addEventListener('click', function () {
    this.style.display = 'none';
    window.print();
});