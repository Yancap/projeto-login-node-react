import React from 'react'
import {  useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { fetchRegister } from '../../controller/Fetch'
import { Button, ContainerInput, Form, Input, Label, Title } from './Commons'
import { Head } from './Head'

const ContainerWarning = styled.div`
    font-family: 'Montserrat';
    font-weight: 800;
    color: var( --warning-color);
    font-size: 16px;
   
    div{ 
        margin-top: 9px;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 700;
        justify-content: space-between;
        width: 100%;
        padding-left: 4%;
    }
`
export const Register = () => {
    const [register, setRegister] = React.useState({
        name:'',
        email: '',
        password: ''
    })
    const [status, setStatus] = React.useState(null)
    const [weak, setWeak] = React.useState(null)

    const navigate = useNavigate()

    function handleChange({target}){
        setRegister({...register, [target.id]: target.value})
    }

    async function handleSubmit (event){
        event.preventDefault()

        const response = await fetchRegister(register)
        let regex = new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$')
        let condition = regex.exec(register.password)
        if (!condition) {
            setStatus({
                status:'warning',
                type: 'password'
            })
            return;
        }
        else if(response.status && response.status === 'error'){
            setStatus(response)
        }else{
            navigate('/')
        }
    }
  return (
    <Form action="" method="post" onSubmit={handleSubmit} id="form-cadastro">
        <Head title="Cadastro" />
        <div style={{marginTop: '30px'}}>
            <Title>CADASTRO</Title>
        </div>
        <div style={{width: '90%'}}>
            <ContainerInput>
                <Label htmlFor='name'>Usuario</Label>
                <Input type='name' id='name' value={register.name} onChange={handleChange} required></Input>
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor='email' status={status && status.type === 'email' ? status.status : 'normal'}>{status && status.type === 'email' ? 'Email Existente' : 'Email'} </Label>
                <Input status={status && status.type === 'email' ? status.status : 'normal'} type='email' id='email' value={register.email} onChange={handleChange} required></Input>
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor='password' status={status && status.type === 'password' ? status.status : 'normal'}>{status && status.type === 'password' ? 'Senha Fraca' : 'Senha'}</Label>
                <Input status={status && status.type === 'password' ? status.status : 'normal'} type='password' id='password' value={register.password} onChange={handleChange} required></Input>
                {status && status.type === 'password' ?
                <ContainerWarning>
                    <span>Sua senha deve conter:</span>
                    <div>
                        <ul>
                            <li>Pelo menos oito caracteres</li>
                            <li>Pelo menos um caracter especial '@#$%&'</li>
                            <li>Letras Maiúsculas e Minúsculas</li>
                            <li>Números</li>
                        </ul>
                    </div>
                </ContainerWarning>: null}
            </ContainerInput>
        </div>

            <Button>CADASTRAR</Button>
    </Form>
  )
}
