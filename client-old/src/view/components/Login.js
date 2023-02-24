import React from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { fetchLogin } from '../../controller/Fetch'
import { ContainerInput, ContainerLink, Form, Input, Label } from './Commons'



export const Login = () => {
    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    })
    const [error, setError] = React.useState(null)
    const navigate = useNavigate()
    function handleChange({target}){
        setLogin({...login, [target.id]: target.value})
    }
    async function handleSubmit (event){
        event.preventDefault()
        const response = await fetchLogin(login)
        if(response.status && response.status == 'error'){
            setError(response)
        }else{
            navigate('welcome')
        }
       
    }
    return (
        
        <Form action="" method="post" onSubmit={handleSubmit}>
            
            <ContainerInput>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' id='email' value={login.email} onChange={handleChange}></Input>
                {error && error.type == 'email' && error.message}
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor='password'>Senha</Label>
                <Input type='password' id='password' value={login.password} onChange={handleChange}></Input>
                {error && error.type == 'password' && error.message}
            </ContainerInput>
            <ContainerLink>
                <Link to='register'>
                    <a href="#">
                        Não tem Cadastro?
                    </a>
                </Link>
            </ContainerLink>
            <button>enviar</button>
        </Form>
    )
}
