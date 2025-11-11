# EcoPlast — Reuso Inteligente de Plástico

## 📌 Sobre o Projeto

**EcoPlast** é um projeto inovador que transforma resíduos plásticos (garrafas PET, tampinhas) em produtos úteis e sustentáveis para o dia a dia, como tábuas de carne, armários e utensílios domésticos.

### Objetivo
Reduzir o impacto ambiental do plástico, promovendo economia circular e sustentabilidade, enquanto cria oportunidades de renda e educação ambiental em comunidades.

---

## 🎯 Funcionalidades

### 1. **Página Informativa**
- Seção "Sobre o Projeto" com descrição e imagem
- Impacto Ambiental e Social com dados da EMBRAPA
- Processo de Produção com 4 etapas expansíveis
- Visão de Futuro

### 2. **Oportunidade de Investimento**
- Lista de materiais necessários (expandível)
- **Simulador de Ponto de Equilíbrio**
  - Calcula unidades necessárias para recuperar o capital inicial
  - Inputs: Capital Inicial, Custo por unidade, Preço de venda
  - Resultado: Unidades para break-even e receita estimada

### 3. **Design Responsivo**
- Layout otimizado para desktop, tablet e mobile
- Navegação intuitiva
- Paleta de cores: azul escuro + verde vibrante

### 4. **Gráfico Interativo**
- Chart.js integrado
- Visualização de recuperação acumulada vs. capital
- Atualiza em tempo real ao calcular

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica
- **CSS3** — Responsividade com Flexbox/Grid, media queries
- **JavaScript** — Simulador dinâmico, interatividade
- **Chart.js** — Visualização de dados (CDN)
- **Google Fonts** — Tipografia (Inter)

---

## 📁 Estrutura de Arquivos

```
EcoPlast/
├── EcoPlast.html          # Página principal
├── styles.css             # Estilos globais
├── app.js                 # Lógica do simulador
└── README.md              # Este arquivo
```

---

## 🚀 Como Usar

### Localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/EcoPlast.git
   cd EcoPlast
   ```

2. Abra `EcoPlast.html` no navegador ou use um servidor local:
   ```bash
   python -m http.server 8000
   # Abra http://localhost:8000/EcoPlast.html
   ```

### Simulador de Ponto de Equilíbrio
1. Preencha:
   - **Capital Inicial (R$)**: Investimento que precisa ser recuperado
   - **Custo por unidade (R$)**: Custo de produção de cada item
   - **Preço de venda por unidade (R$)**: Preço de venda ao cliente

2. Clique em **"Calcular Ponto de Equilíbrio"**

3. Resultado exibirá:
   - Margem por unidade
   - Unidades necessárias para atingir o break-even
   - Receita estimada até o ponto de equilíbrio

---

## 📊 Exemplo de Cálculo

| Campo | Valor |
|-------|-------|
| Capital Inicial | R$ 10.000 |
| Custo por unidade | R$ 10 |
| Preço de venda | R$ 25 |
| **Margem por unidade** | **R$ 15** |
| **Unidades necessárias** | **667 unidades** |
| **Receita estimada** | **R$ 16.675** |

---

## 🎨 Paleta de Cores

- **Fundo Principal**: `#0b1120` (Azul muito escuro)
- **Fundo de Cards**: `#0f172a` (Azul escuro)
- **Título**: `#22c55e` (Verde vibrante)
- **Texto**: `#d1d5db` (Cinza claro)
- **Accent**: `#16a34a` (Verde secundário)

---

## 📱 Responsividade

- ✅ Desktop (> 800px)
- ✅ Tablet (768px - 800px)
- ✅ Mobile (< 480px)

---

## 👨‍💻 Autor

Desenvolvido por Jovitor46.

---

## 📝 Licença

Este projeto está disponível sob licença MIT.

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para fazer um fork e enviar pull requests.

---

## 📞 Contato

Para mais informações sobre o projeto EcoPlast, entre em contato!

---

**Última atualização:** Novembro de 2025
