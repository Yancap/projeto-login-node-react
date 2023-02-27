import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { fetchRegister } from '../../controller/Fetch'
import { Button, ContainerInput, Form, Input, Label, Title } from './Commons'

export const Register = () => {
    const [register, setRegister] = React.useState({
        name:'',
        email: '',
        password: ''
    })
    const [error, setError] = React.useState(null)
    const navigate = useNavigate()

    function handleChange({target}){
        setRegister({...register, [target.id]: target.value})
    }

    async function handleSubmit (event){
        event.preventDefault()
        const response = await fetchRegister(register)
        console.log(response);
        if(response.status && response.status == 'error'){
            setError(response.message)
        }else{
            navigate('/')
        }
       
    }
  return (
    <Form action="" method="post" onSubmit={handleSubmit} id="form-cadastro">
        <div>
            <Title>CADASTRO</Title>
        </div>
        <div style={{width: '90%'}}>
            <ContainerInput>
                <Label htmlFor='name'>Usuario</Label>
                <Input type='name' id='name' value={register.name} onChange={handleChange} required></Input>
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' id='email' value={register.email} onChange={handleChange} required></Input>
                {error && error.message}
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor='password'>Senha</Label>
                <Input type='password' id='password' value={register.password} onChange={handleChange} required></Input>
            </ContainerInput>
        </div>

            <Button>CADASTRAR</Button>
    </Form>
  )
}
