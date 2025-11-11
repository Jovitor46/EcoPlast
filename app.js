/**
 * Função para formatar valor em moeda brasileira (R$)
 */
function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

/**
 * Função para validar e simular retorno financeiro
 */
function simularRetorno() {
  const inputCapital = document.getElementById('invest-capital');
  const inputCost = document.getElementById('invest-cost');
  const inputPrice = document.getElementById('invest-price');
  const elResult = document.getElementById('invest-result');

  // Obter valores
  const capital = parseFloat(inputCapital.value) || 0;
  const costPerUnit = parseFloat(inputCost.value) || 0;
  const pricePerUnit = parseFloat(inputPrice.value) || 0;

  // Validações
  const erros = [];
  if (capital <= 0) {
    erros.push('O capital inicial deve ser maior que R$ 0.');
  }
  if (costPerUnit < 0) {
    erros.push('O custo por unidade não pode ser negativo.');
  }
  if (pricePerUnit <= 0) {
    erros.push('O preço de venda por unidade deve ser maior que R$ 0.');
  }
  if (pricePerUnit <= costPerUnit) {
    erros.push('O preço de venda deve ser maior que o custo por unidade (margem positiva).');
  }

  if (erros.length > 0) {
    elResult.innerHTML = '<strong>❌ Erro na simulação:</strong><br>' + erros.map(e => '• ' + e).join('<br>');
    elResult.classList.add('error');
    return;
  }

  elResult.classList.remove('error');

  // Calcular margem por unidade e unidades necessárias para recuperar o capital
  const margemPorUnidade = pricePerUnit - costPerUnit;
  const unidadesNecessarias = Math.ceil(capital / margemPorUnidade);
  const receitaNecessaria = unidadesNecessarias * pricePerUnit;

  // Formatar e exibir resultado
  const htmlParts = [];
  htmlParts.push('<strong>✅ Ponto de equilíbrio</strong><br>');
  htmlParts.push('<br>');
  htmlParts.push(`<strong>Capital Inicial:</strong> ${formatarMoeda(capital)}<br>`);
  htmlParts.push(`<strong>Custo por unidade:</strong> ${formatarMoeda(costPerUnit)}<br>`);
  htmlParts.push(`<strong>Preço de venda (por unidade):</strong> ${formatarMoeda(pricePerUnit)}<br>`);
  htmlParts.push(`<strong>Margem por unidade:</strong> ${formatarMoeda(margemPorUnidade)}<br>`);
  htmlParts.push(`<br>`);
  htmlParts.push(`<strong>Unidades necessárias para atingir o ponto de equilíbrio:</strong> ${unidadesNecessarias} unidade(s)<br>`);
  htmlParts.push(`<strong>Receita estimada até o ponto de equilíbrio:</strong> ${formatarMoeda(receitaNecessaria)}<br>`);

  elResult.innerHTML = htmlParts.join('');

  // Atualizar gráfico (Chart.js principal - se ainda estiver na página)
  // atualizarGrafico(capital, margemPorUnidade, unidadesNecessarias);
}

/**
 * Ativa a simulação ao pressionar Enter em qualquer input
 */
function ativarEnter(event) {
  if (event.key === 'Enter') {
    simularRetorno();
  }
}

/**
 * Inicialização ao carregar a página
 */
document.addEventListener('DOMContentLoaded', function () {
  // Adicionar listeners de Enter aos inputs
  const inputs = ['invest-capital', 'invest-cost', 'invest-price'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('keypress', ativarEnter);
    }
  });

  // Inicializar gráfico de recuperação
  initRecoveryChart();
});

/* Gráfico de recuperação usando Chart.js */
let recoveryChart = null;
function initRecoveryChart() {
  const ctx = document.getElementById('recovery-chart');
  if (!ctx || typeof Chart === 'undefined') return;
  const labels = Array.from({length:13}, (_,i) => i); // unidades 0..12
  const emptyData = labels.map(() => 0);
  recoveryChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Recuperação acumulada (R$)',
          data: emptyData,
          borderColor: '#22c55e',
          backgroundColor: 'rgba(34,197,94,0.12)',
          tension: 0.2,
          fill: true
        },
        {
          label: 'Capital (R$)',
          data: emptyData.map(() => 0),
          borderColor: '#94a3b8',
          borderDash: [6,4],
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { display: true, title: { display: true, text: 'Unidades vendidas' }, ticks: { autoSkip: true, maxTicksLimit: 12 } },
        y: { display: true, title: { display: true, text: 'R$' } }
      },
      plugins: { legend: { position: 'top' } }
    }
  });
}

function atualizarGrafico(capital, margemPorUnidade, unidadesNecessarias) {
  if (!recoveryChart) return;

  // calcular um limite de unidades para plotar (20% a mais ou pelo menos 12)
  const limite = Math.max(Math.ceil(unidadesNecessarias * 1.2), 12);
  const labels = Array.from({length: limite + 1}, (_,i) => i); // 0..limite unidades
  const acumulado = labels.map(i => i * margemPorUnidade);
  const capitalLine = labels.map(() => capital);

  recoveryChart.data.labels = labels;
  recoveryChart.data.datasets[0].data = acumulado;
  recoveryChart.data.datasets[1].data = capitalLine;
  recoveryChart.update();
}
