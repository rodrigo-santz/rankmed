$(document).ready(() => {
    handleSelect();
    onHideDadosEspecialidade();
})

function handleSelect() {
    $('.rnk-especialidades-header select').on('change', function() {
        const especialidade = $(this).val();
        const nomeEspecialidade = $('.rnk-dados-conteudo span');
        const dadosEspecialidade = $('.rnk-dados-especialidades');

        // Trocar especialidade no texto
        $(nomeEspecialidade).text(especialidade);

        // Abrir container dados
        $(dadosEspecialidade).removeClass('d-none');       
    })  
}

function onHideDadosEspecialidade() {
    $('.rnk-dados-especialidades button').on('click', function() {
        const dadosEspecialidade = $('.rnk-dados-especialidades');
        $(dadosEspecialidade).addClass('d-none')
    })
}