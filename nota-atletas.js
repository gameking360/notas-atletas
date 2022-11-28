
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   function comparar(a,b){
    return a - b
   }

for(let i = 0; i < atletas.length; i++){
    let soma = 0;
    
  atletas[i].notFinal = atletas[i].notas;
  atletas[i].notFinal = atletas[i].notFinal.sort(comparar).slice(0,3);
  atletas[i].notFinal.forEach(function(notas) {
    soma = soma + notas;
    return soma;
  });
  
  console.log("\nAtleta: " + atletas[i].nome + "\nNotas: " + atletas[i].notas.join(", ") + "\nMédia Válida: " + (soma / atletas[i].notFinal.length));
};
