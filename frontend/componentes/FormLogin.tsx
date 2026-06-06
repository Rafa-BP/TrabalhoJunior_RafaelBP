
function FormLogin() {
    return (
        <form action="get">

            <label htmlFor="nomeBarbearia">Nome da Barbearia: </label>
            <input type="text" id="nomeBarbearia" />
            
            <label htmlFor="senha">Senha: </label>
            <input type="text" id="senha" />

            <button type="submit">Login</button>

        </form>
    )
}

export default FormLogin