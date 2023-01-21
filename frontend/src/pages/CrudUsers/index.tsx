import { Container, NewUser } from './styles';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';



interface Task {
  _id: number;
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  address: string;
}

export function CrudUsersPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate()

  async function loadTasks() {
    const res = await api.get('http://localhost:5001/users');
    console.log(res);
    setTasks(res.data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  function handleEditTask(_id: number) {
    navigate(`/users/${_id}`)
  }

  function handleDeleteTask(_id: number) {
    api.delete(`http://localhost:5001/users/${_id}`);
    loadTasks();
  }

  function handleNewTask() {
    navigate('/form')
  }

  return (
    <Container>
      <div/*  className='container' */>
        <h1>Lista de Usuários</h1>
        <NewUser onClick={handleNewTask}>Add User</NewUser>
        <Table striped bordered hover className='text-center'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Cellphone</th>
              <th>CPF</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.name}</td>
                <td>{task.email}</td>
                <td>{task.cellphone}</td>
                <td>{task.cpf}</td>
                <td>{task.address}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleEditTask(task._id)}>Editar</Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => handleDeleteTask(task._id)}>Excluir</Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
        </div>
      </div>
    </Container>
  );
}
