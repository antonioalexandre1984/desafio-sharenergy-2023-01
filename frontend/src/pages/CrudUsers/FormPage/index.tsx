import { Container, Submit, ButtonBack } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import api from '../../../services/api';


export interface Task {
  id: string;
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  address: string;
}

export function FormPage() {
  const navigate = useNavigate()
  const [model, setModel] = useState<Task>({
    id: '0',
    name: '',
    email: '',
    cellphone: '',
    cpf: '',
    address: '',
  })
  const _id = useParams();

  useEffect(() => {
    if (_id !== undefined)
      findTask(_id._id)
  }, [_id])

  function updateModel(e: React.ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await api.post(`http://localhost:5001/users/`, model);
    if (res.status === 200) {
      alert('Usuário criado com sucesso!')
      navigate('/crud')
    }
  }

  async function onEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await api.put(`http://localhost:5001/users/${_id._id}`, model);
    if (res.status === 200) {
      alert('Usuário atualizado com sucesso!')
      navigate('/crud')
    }
  }

  async function findTask(_id: number) {
    const res = await api.get(`http://localhost:5001/users/${_id}`);
    setModel({
      id: res.data.id,
      name: res.data.name,
      email: res.data.email,
      cellphone: res.data.cellphone,
      cpf: res.data.cpf,
      address: res.data.address,
    });
  }

  function Back() {
    navigate('/crud')
  }

  return (
    <Container>
      <ButtonBack
        onClick={Back}
      >
        Voltar
      </ButtonBack>

      <div className="container">
        <Form onClick={_id._id === undefined ? onSubmit : onEdit}>
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                value={model.name}
                onChange={updateModel}
                placeholder="Enter the name!"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="email"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="email"
                value={model.email}
                onChange={updateModel}
                placeholder="Enter the email"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="cellphone"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="cellphone"
                value={model.cellphone}
                onChange={updateModel}
                placeholder="(xx xxxxxxxxx)"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="cpf"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="cpf"
                value={model.cpf}
                onChange={updateModel}
                placeholder="Enter the CPF"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="address"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="address"
                value={model.address}
                placeholder="Enter the address"
                onChange={updateModel}
              />
            </FloatingLabel>
          </Form.Group>
          <div>
            <Submit
              type="submit"
            >
              Submit
            </Submit>
          </div>
        </Form>
      </div>
    </Container >
  );
}
