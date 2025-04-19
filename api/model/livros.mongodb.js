use('livrosdb');

const livros = [
  {
    "titulo": "Clean Code",
    "autor": "Robert C. Martin",
    "paginas": 464,
    "avaliacao": 4.8,
    "dataLeitura": "2024-07-15"
  },
  {
    "titulo": "O Programador Pragmático",
    "autor": "Andrew Hunt",
    "paginas": 352,
    "avaliacao": 4.7,
    "dataLeitura": "2024-08-01"
  },
  {
    "titulo": "Estruturas de Dados e Algoritmos em Java",
    "autor": "Robert Lafore",
    "paginas": 640,
    "avaliacao": 4.5,
    "dataLeitura": "2024-05-10"
  },
  {
    "titulo": "JavaScript: The Good Parts",
    "autor": "Douglas Crockford",
    "paginas": 176,
    "avaliacao": 4.2,
    "dataLeitura": "2024-04-18"
  },
  {
    "titulo": "Design Patterns",
    "autor": "Erich Gamma",
    "paginas": 395,
    "avaliacao": 4.6,
    "dataLeitura": "2024-02-12"
  },
  {
    "titulo": "You Don’t Know JS Yet",
    "autor": "Kyle Simpson",
    "paginas": 278,
    "avaliacao": 4.4,
    "dataLeitura": "2024-03-21"
  },
  {
    "titulo": "Código Limpo para Python",
    "autor": "Luciano Ramalho",
    "paginas": 560,
    "avaliacao": 4.9,
    "dataLeitura": "2024-01-30"
  },
  {
    "titulo": "Refatoração",
    "autor": "Martin Fowler",
    "paginas": 448,
    "avaliacao": 4.7,
    "dataLeitura": "2024-01-05"
  },
  {
    "titulo": "Domain-Driven Design",
    "autor": "Eric Evans",
    "paginas": 560,
    "avaliacao": 4.3,
    "dataLeitura": "2024-06-01"
  },
  {
    "titulo": "Introdução à Computação",
    "autor": "Peter Norton",
    "paginas": 432,
    "avaliacao": 4.0,
    "dataLeitura": "2024-02-20"
  },
  {
    "titulo": "Python Fluente",
    "autor": "Luciano Ramalho",
    "paginas": 792,
    "avaliacao": 4.9,
    "dataLeitura": "2023-12-10"
  },
  {
    "titulo": "Algoritmos: Teoria e Prática",
    "autor": "Thomas H. Cormen",
    "paginas": 1312,
    "avaliacao": 4.8,
    "dataLeitura": "2024-03-05"
  },
  {
    "titulo": "Automate the Boring Stuff with Python",
    "autor": "Al Sweigart",
    "paginas": 504,
    "avaliacao": 4.6,
    "dataLeitura": "2023-11-22"
  },
  {
    "titulo": "Soft Skills",
    "autor": "John Sonmez",
    "paginas": 504,
    "avaliacao": 4.5,
    "dataLeitura": "2024-07-01"
  },
  {
    "titulo": "Sprint",
    "autor": "Jake Knapp",
    "paginas": 288,
    "avaliacao": 4.3,
    "dataLeitura": "2023-10-10"
  },
  {
    "titulo": "The Mythical Man-Month",
    "autor": "Frederick P. Brooks",
    "paginas": 322,
    "avaliacao": 4.1,
    "dataLeitura": "2023-09-15"
  },
  {
    "titulo": "A Arte de Fazer Acontecer",
    "autor": "David Allen",
    "paginas": 352,
    "avaliacao": 4.4,
    "dataLeitura": "2024-03-18"
  },
  {
    "titulo": "Scrum: A Arte de Fazer o Dobro do Trabalho na Metade do Tempo",
    "autor": "Jeff Sutherland",
    "paginas": 256,
    "avaliacao": 4.6,
    "dataLeitura": "2024-04-02"
  },
  {
    "titulo": "Extreme Programming Explained",
    "autor": "Kent Beck",
    "paginas": 224,
    "avaliacao": 4.0,
    "dataLeitura": "2023-08-10"
  },
  {
    "titulo": "Lean Startup",
    "autor": "Eric Ries",
    "paginas": 336,
    "avaliacao": 4.3,
    "dataLeitura": "2023-07-07"
  }
]
db.livros.insertMany(livros);

use('livrosdb');
db.livros.find({}, { titulo: 1, dataLeitura: 1 });
