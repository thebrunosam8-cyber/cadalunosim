const alunos = [
    {
        nome: "Teste",
        curso: "ADS"
    },
    {
        nome: "Teste Dois",
        curso: "ENG"
    },
    {
        nome: "Teste Três",
        curso: "ENG"
    }
];

const formulario = document.getElementById("formAluno");
const campoNome = document.getElementById("nome");
const campoCurso = document.getElementById("curso");
const corpoTabela = document.getElementById("corpoTabela");
const totalAlunos = document.getElementById("totalAlunos");


// ==============================
// EXIBIR ALUNOS
// ==============================

function exibir() {

    corpoTabela.innerHTML = "";

    totalAlunos.textContent =
        alunos.length === 1
            ? "1 aluno"
            : `${alunos.length} alunos`;

    if (alunos.length === 0) {

        corpoTabela.innerHTML = `
            <tr>
                <td colspan="4" class="mensagem-vazia">
                    Nenhum aluno cadastrado.
                </td>
            </tr>
        `;

        return;
    }

    for (let posicao = 0; posicao < alunos.length; posicao++) {

        const aluno = alunos[posicao];

        corpoTabela.innerHTML += `
            <tr>

                <td>${posicao + 1}</td>

                <td>${aluno.nome}</td>

                <td>${aluno.curso}</td>

                <td>
                    <button
                        class="btn-delete"
                        onclick="deletarAluno(${posicao})">
                        Excluir
                    </button>
                </td>

            </tr>
        `;
    }
}


// ==============================
// CADASTRAR ALUNO
// ==============================

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = campoNome.value.trim();
    const curso = campoCurso.value.trim();

    if (nome === "" || curso === "") {

        alert("Preencha o nome e o curso.");

        return;
    }

    const aluno = {
        nome: nome,
        curso: curso
    };

    alunos.push(aluno);

    exibir();

    formulario.reset();

    campoNome.focus();
});


// ==============================
// DELETAR ALUNO
// ==============================

function deletarAluno(posicao) {

    const aluno = alunos[posicao];

    const confirmar = confirm(
        `Deseja excluir o aluno "${aluno.nome}"?`
    );

    if (!confirmar) {
        return;
    }

    alunos.splice(posicao, 1);

    exibir();
}


// ==============================
// INICIAR
// ==============================

exibir();