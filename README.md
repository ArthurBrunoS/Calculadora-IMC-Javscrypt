# Calculadora aritmética

Calculadora de operações básicas com JavaScript orientado a objetos e controles por mouse ou teclado.

## Tecnologias

HTML5, CSS3 e JavaScript puro.

## Funcionalidades

- Soma, subtração, multiplicação e divisão em sequência, da esquerda para a direita.
- Troca de operador, limpeza de entrada (CE), limpeza total (C) e exclusão de dígitos (DEL).
- Tratamento de divisão por zero e precisão de apresentação de até 12 algarismos significativos.
- Teclado: números, ponto ou vírgula, operadores, Enter, Backspace, Delete e Escape.

## Executar localmente

1. Clone este repositório e abra a pasta no VS Code.
2. Abra `index.html` com a extensão Live Server, ou sirva a pasta com um servidor HTTP estático.
3. Acesse a página no navegador. O `index.html` da raiz é o ponto de entrada.

## Validação

Com Node.js 22 ou superior instalado, execute:

```sh
node --test
```

Os testes cobrem operações encadeadas, zero, decimais, troca de operador, divisão por zero e limpeza. Não substituem a validação visual.

Checklist de navegador:

- [ ] Executar `8 + 2 * 3 =`; o resultado deve ser 30 (execução sequencial).
- [ ] Executar `0 * 5 =`, `0 - 5 =` e `0.1 + 0.2 =`.
- [ ] Dividir por zero e iniciar outra conta; não deve permanecer em erro.
- [ ] Conferir CE, C, DEL e digitação após igual.

A verificação visual e as capturas de tela devem ser feitas após abrir a versão atual no navegador. Não há capturas publicadas nem garantia de validação visual nesta revisão.

## Demonstração e publicação

Não há URL de demonstração pública validada nesta revisão. As alterações propostas não configuram nem publicam uma hospedagem. Para uma publicação futura, utilize o ponto de entrada da raiz e confira os caminhos dos arquivos.

## Limitações e autoria

Apesar do nome histórico do repositório, esta aplicação é uma calculadora aritmética e não calcula IMC. Não utiliza precedência algébrica nem repete automaticamente a última operação ao pressionar igual novamente.

Este README descreve a versão proposta nesta revisão. O histórico do Git preserva os autores e as contribuições anteriores. Materiais de curso, imagens e serviços de terceiros devem ter suas condições de uso verificadas antes de uma redistribuição; esta revisão não atribui autoria exclusiva nem adiciona uma licença aos recursos existentes.
