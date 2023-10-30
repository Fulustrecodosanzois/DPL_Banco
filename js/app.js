import { app, db } from "./config-firebase.js";
import { doc, setDoc, collection, addDoc, query, where, getDocs, orderBy, deleteDoc, documentId, updateDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"

let nome = document.querySelector("#nome");
let equipe = document.querySelector("#equipe");
let placa = document.querySelector("#placa");
let modelo = document.querySelector("#modelo");
let endereco = document.querySelector("#local");
let btnRegistrar = document.querySelector("#btnRegistrar");

async function inserirRegistro() {
    try {
        // Adicionar documentos com gerador de id 
        const docRef = await addDoc(collection(db, "relatorio"), {
            nome: nome.value,
            equipe: equipe.value,
            placa: placa.value,
            modelo: modelo.value,
            endereco: endereco.value
        });
        console.log("Documento escrito com ID: ", docRef.id);
    } catch (error) {
        console.error("O seguinte erro ocorreu: " + error);
    }
}

btnRegistrar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(nome.value, equipe.value, placa.value, modelo.value, endereco.value);
    inserirRegistro();
});