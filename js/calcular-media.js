document.getElementById("novocalculo").style.display = "none";

//pegando os valores digitados pelo usuário//
 
function calcularmedia(){
    let nome = document.getElementById("nome").value;
    let disciplina = document.getElementById("disciplina").value;

   //pegando os valores digitados pelo usuário e convertanten para número // 
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let n4 = Number(document.getElementById("nota4").value);


 if( nome == " " ||  disciplina == " " || n1 == " " ||
         n2 == " " || n3 == " " || n4 == " "  ) {
         alert("Preencha todos os campos!")
    }

 else{
    //fazer a média//
   let soma = n1 + n2 + n3 + n4 ;
   let media = soma / 4;

   //verificar a situação do aluno//
   let situacao //classificar se foi aprovado, reprovado ou de recuperação//
   let classesituacao //estizar o CSS//

   if(media >=7){
    situacao = "APROVADO"
    classesituacao = "aprovado"
   }

   else if(media >= 5){
    situacao = "EM RECUPERAÇÃO"
    classesituacao = "recuperacao"
   }

   else{
    situacao = "REPROVADO"
    classesituacao = "reprovado"

   }

   //exibir o resultado//
   let resultado = document.getElementById("resultado");

   resultado.innerHTML= 
   "Aluno:" + nome + "<br><br>" +
   "Disciplina:" + disciplina + "<br><br>" +
   "Média:" + media +  "<br><br>" +
   "Situação: <span class='" + classesituacao + "'>" + situacao + "</span>";

   document.getElementById("novocalculo").style.display = "block";
   document.getElementById("calcular").style.display = "none";

}

}
 
function calcularnovo(){
    let nome = document.getElementById("nome").value = " ";
    let disciplina = document.getElementById("disciplina").value = " ";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";

     let resultado = document.getElementById("resultado")
     .textContent = "Preencha os dados acima e clique em calcular média";

    document.getElementById("novocalculo").style.display = "none";
    document.getElementById("calcular").style.display = "block";


   
}
 
 