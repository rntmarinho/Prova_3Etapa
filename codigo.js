const calcular = document.getElementById('calcular');


function poupanca () {
    const nome = document.getElementById('nome').value;
    const valormensal = document.getElementById('valormensal').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && juros !== '' && valormensal !== '' && parcelas !== '') {

        const jurosP = (juros/100).toFixed(2);

        const valorpoupado = valormensal*(((1+ jurosP ) - 1) / jurosP ).toFixed(2);
        

        resultado.textContent = `${nome}, se você aplicar R$${valormensal} à taxa de jutos de ${juros}% ao mês, durante ${parcelas} meses, acumulará uma poupança de R$${valorpoupado}`;

    }else {
        resultado.textContent = 'Para calcular o resultado, nenhum campo pode estar em branco!';
    }

}
calcular.addEventListener('click', poupanca);