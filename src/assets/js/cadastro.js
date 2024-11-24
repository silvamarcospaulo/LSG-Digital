document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const dados = {
        nome: document.getElementById("idCampoNome").value,
        sobrenome: document.getElementById("idCampoSobrenome").value,
        whatsapp: document.getElementById("idCampoWhatsapp").value,
        email: document.getElementById("idCampoEmail").value,
        quantidadeColaboradores: document.getElementById("idCampoQuantidadeDeColaboradores").value,
    };

    try {
        const resposta = await fetch("URL_DO_SEU_APPS_SCRIPT", {
            method: "POST",
            body: JSON.stringify(dados),
            headers: { "Content-Type": "application/json" },
        });

        const resultado = await resposta.json();
        if (resultado.success) {
            alert("Cadastro realizado com sucesso! Em breve, você receberá um e-mail de confirmação.");
        } else {
            alert("Ocorreu um erro ao realizar o cadastro. Por favor, tente novamente.");
        }
    } catch (erro) {
        console.error("Erro ao enviar os dados:", erro);
        alert("Ocorreu um erro na comunicação com o servidor. Tente novamente.");
    }
});