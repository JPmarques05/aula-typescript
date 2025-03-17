// Exercício 1
// Crie uma interface chamada Carro, que contenha as seguintes propriedades:
// marca (string)
// modelo (string)
// ano (number)
// motor (opcional, string)
// Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.
// Definição da interface Carro
interface Car {
    brand: string;
    model: string;
    age: number;
    engine?: string;
  }
 
  const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    age: 2022,
    engine: "2.0 Flex",
  };
 
  console.log("Meu Carro:", myCar);
 
 
//   Exercício 2
// Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
// Depois, implemente essa função e teste com diferentes valores.
interface Multiplicacao {
    (a: number, b: number): number;
  }
 
  const multiplicar: Multiplicacao = (a, b) => {
    return a * b;
  };
 
  // Testando a função com diferentes valores
  console.log(multiplicar(2, 3)); // 6
  console.log(multiplicar(5, 4)); // 20
  console.log(multiplicar(10, 0)); // 0
  console.log(multiplicar(-2, 8)); // -16
 
 
//   Exercício 3
// Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
// Teste a função com um array de números e um array de strings.
  // Função genérica para inverter um array
function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
  }
 
  const numeros = [1, 2, 3, 4, 5];
  console.log("Array original:", numeros);
  console.log("Array invertido:", inverterArray(numeros));
 
  const palavras = ["typescript", "javascript", "java", "python"];
  console.log("Array original:", palavras);
  console.log("Array invertido:", inverterArray(palavras));
 
//   Exercício 4
// Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
// Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).
  // Interface genérica Repositorio<T>
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
 
class Usuario {
    constructor(public nome: string, public email: string) {}
}
 
class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
 
    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }
 
    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}
 
const repositorio = new RepositorioUsuario();
 
const usuario1 = new Usuario("João", "joao@example.com");
const usuario2 = new Usuario("Maria", "maria@example.com");
 
repositorio.salvar(usuario1);
repositorio.salvar(usuario2);
 
const usuarios = repositorio.obterTodos();
console.log(usuarios);
 
// Exercício 5
// Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
// Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.
// Type Alias RespostaServidor
type RespostaServidor = string | boolean;
 
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === 'string') {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === 'boolean') {
        if (resposta) {
            console.log('Resposta do servidor: Sucesso');
        } else {
            console.log('Resposta do servidor: Falha');
        }
    }
}
 
processarResposta("Operação concluída com sucesso.");
processarResposta(true);
processarResposta(false);
 
// Exercício 6
// Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
// Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.
// Tipo Estudante
interface Estudante {
    nome: string;
    curso: string;
}
 
interface Trabalhador {
    empresa: string;
    cargo: string;
}
 
type EstudanteTrabalhador = Estudante & Trabalhador;
 
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos Silva",
    curso: "Engenharia de Software",
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Júnior"
};
 
console.log(estudanteTrabalhador);