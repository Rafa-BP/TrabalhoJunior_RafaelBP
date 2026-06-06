
function FormCriar() {
    return (
        <form action="/criar" method="POST">

            <label htmlFor="nomeBarbearia">Nome da Barbearia: </label>
            <input type="text" id="nomeBarbearia" />

            <label htmlFor="nomeResponsavel">Nome do(a) Responsavel: </label>
            <input type="text" id="nomeResponsavel" />

            <label htmlFor="senha">Senha: </label>
            <input type="text" id="senha" />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" />
            
            <label htmlFor="telefone">Telefone: </label>
            <input type="telephone" id="telefone" />

            <label htmlFor="telefone">Telefone: </label>
            <input type="telephone" id="telefone" />

            <label htmlFor="estado">Estado: </label>
            <input type="text" id="estado" />

            <label htmlFor="cidade">Cidade: </label>
            <input type="text" id="cidade" />

            <label htmlFor="numCadeiras">Numero de Cadeiras: </label>
            <input type="number" id="numCadeiras" />

            <button type="submit">Criar Conta</button>

        </form>
    )
}

export default FormCriar