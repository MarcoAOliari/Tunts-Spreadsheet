# Tunts-Spreadsheet

Desafio proposto pela Tunts desenvolvido em Node.js, que consiste na leitura de uma planilha com notas de alunos e na escrita dos seus respectivos status, indicando aprovação, reprovação por falta, reprovação por nota ou exame final. Em caso de exame final, também calcula-se a nota mínima na prova para que o aluno alcance a aprovação.

## Requisitos

Para executar a aplicação é necessário Git e Node.js instalados em seu ambiente.

Também é fundamental que se acrescente à pasta raiz do projeto um arquivo `credentials.json`, contendo as informações de autenticação da API da Google Cloud. O arquivo utilizado em desenvolvimento não está presente por questões de segurança.

## Instalação e Execução

```
  $ git clone https://github.com/MarcoAOliari/Tunts-Spreadsheet.git
  $ npm install
  $ npm start
```

## Como usar

Logo após a execução do último comando explicitado na seção acima, a aplicação estará hospedada em http://localhost:1337/. Assim que uma requisição for realizada, as instruções serão realizadas e podem ser observados os resultados na [planilha](https://docs.google.com/spreadsheets/d/1otlNIB4LfYPWLuKNmXN4f45PKewDZLsqsSOnHZg_icA/edit?usp=sharing) fornecida.
