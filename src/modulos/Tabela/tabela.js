import React, { useState } from "react";
import { Button, ButtonGroup, Container, Table, Form } from "react-bootstrap";


function TabelaComplexa() {
    /* - - - - - - - - - - - - HOOKS - - - - - - - - - - - - */
    // Hook para controlar modo de visualização da tabela
    const [isEditing, setIsEditing] = useState(false);
    // Hook para controlar valor do input ID
    const [newId, setNewId] = useState("");
    // Hook para controlar texto do input NOME
    const [newNome, setNewNome] = useState("");
    // Hook para controlar texto do input SOBRENOME
    const [newSobrenome, setNewSobrenome] = useState("");
    // Hook para controlar texto do input USUARIO
    const [newUsuario, setNewUsuario] = useState("");
    // Hook para armazenar os valores da tabela
    const [itemTabela, setItemTabela] = useState([]);
    // Hook para controlar os checkboxes da tabela
    const [auxArray, setAuxArray] = useState([]);

    /* - - - - - - - - - - - - FUNÇÕES - - - - - - - - - - - - */
    // Função para controlar modo de visualização da tabela
    const handleTableMode = () => {
        setIsEditing(!isEditing)
    }
    // Função para controlar CAMPO ID
    const handleId = (e) => {
        const id = e.target.value;
        setNewId(id);
    }
    // Função para controlar CAMPO NOME
    const handleName = (e) => {
        const nome = e.target.value;
        setNewNome(nome);
    }
    // Função para controlar CAMPO SOBRENOME
    const handleSobrenome = (e) => {
        const sobrenome = e.target.value;
        setNewSobrenome(sobrenome);
    }
    // Função para controlar CAMPO USUARIO
    const handleUsuario = (e) => {
        const usuario = e.target.value;
        setNewUsuario(usuario);
    }
    // Função para adicionar itens na tabela
    const addItemsToTable = () => {
        // setState(updater, callback)
        setItemTabela(valoresAnteriores => {
            return [...valoresAnteriores].concat({ newId, newNome, newSobrenome, newUsuario })
        })
        setNewId("")
        setNewNome("")
        setNewSobrenome("")
        setNewUsuario("")
        setIsEditing(false)
    }
    // Função para controlar itens marcados no checkbox
    const handleCheck = (event) => {
        // Armazena valores do array auxiliar em uma variavel
        var aux = [...auxArray];
        if(event.target.checked) {
            // Inserir valor no array
            aux = [...auxArray, event.target.value];
        } else {
            // Remove da lista o que foi marcado pegando o valor 
            // através do atributo "value".
            // metodo indexOf, lê-se: 
            // Na posição (event.target.value) do array auxArray, remova 1 item.
            aux.splice(auxArray.indexOf(event.target.value), 1);
        }
        // Atualiza o array
        setAuxArray(aux);
    };
    // Função para deletar itens excluidos 
    const handleDelete = () => {
        // Atualiza a tabela = // Lê-se: "Manter aqueles cujo regra seja => cujos os IDs não estejam no array auxiliar"
        setItemTabela(itemTabela.filter(data => !auxArray.includes(data.newId)));
        setAuxArray([null]);
    }
    // Função para manipular edição em DOUBLECLICK
    const handleEdit = (e) => {
        const linhaTabela = e.target.id;
        
    }

    // MODO VISUALIZAÇÃO
    if(isEditing === false) {
        return (
            <app-tabela-complexa-visualizar>
                <Container fluid>
                    <ButtonGroup>
                        <Button onClick={handleTableMode} variant="outline-warning" size="sm">Editar</Button>
                        <Button onClick={handleDelete} variant="outline-danger" size="sm">Excluir</Button>
                    </ButtonGroup>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Usuário</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemTabela.map((data, index) => (
                                <tr key={index}> 
                                    <td><Form.Check onChange={handleCheck} id={index} value={data.newId} label={data.newId}></Form.Check></td>
                                    <td>{data.newNome}</td>
                                    <td>{data.newSobrenome}</td>
                                    <td>{data.newUsuario}</td>
                                    <td><Button onClick={handleEdit} id={index} size="sm">Editar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table> 
                </Container>
            </app-tabela-complexa-visualizar>
        )
    } 
    // MODO EDIÇÃO
    else {
        return (
            <app-tabela-complexa-editar>
                <Container fluid>
                    <ButtonGroup>
                        <Button variant="outline-success" size="sm" onClick={addItemsToTable}>Salvar</Button>
                        <Button variant="outline-secondary" size="sm" onClick={handleTableMode}>Cancelar</Button>
                    </ButtonGroup>
                <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Usuário</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemTabela.map((data, index) => (
                                <tr key={data+'_'+index}>
                                    <td>{data.newId}</td>
                                    <td>{data.newNome}</td>
                                    <td>{data.newSobrenome}</td>
                                    <td>{data.newUsuario}</td>
                                </tr>
                            ))}
                            <tr>
                                <td><Form.Control onChange={handleId} value={newId} type="text"/></td>
                                <td><Form.Control onChange={handleName} value={newNome} type="text"/></td>
                                <td><Form.Control onChange={handleSobrenome} value={newSobrenome} type="text"/></td>
                                <td><Form.Control onChange={handleUsuario} value={newUsuario} type="text"/></td>
                            </tr>
                        </tbody>
                    </Table> 
                </Container>
            </app-tabela-complexa-editar>
        )
    }
}

export default TabelaComplexa;