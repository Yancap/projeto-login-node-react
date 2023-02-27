import React from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { fetchLogin } from '../../controller/Fetch'
import { GlobalContext } from '../Context/GlobalContext'
import { Button, ContainerInput, ContainerLink, Form, Input, Label, Title } from './Commons'


export const Login = () => {
    const global = React.useContext(GlobalContext)
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
            global.setInfoLogin({name: response.name, id: response.id})
            console.log(global.infoLogin);
            navigate('welcome')
        }
    }
    return (
        
        <Form action="" method="post" onSubmit={handleSubmit}>
            <div>
                <Title>LOGIN</Title>
            </div>
            <div style={{width: '90%'}}>
                <ContainerInput>
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' value={login.email} onChange={handleChange} required></Input>
                    {error && error.type == 'email' && error.message}
                </ContainerInput>
                <ContainerInput>
                    <Label htmlFor='password'>Senha</Label>
                    <Input type='password' id='password' value={login.password} onChange={handleChange} required></Input>
                    {error && error.type == 'password' && error.message}
                </ContainerInput>
                <ContainerLink>
                    <Link to='register'>
                        <a href="#">
                            Não tem Cadastro?
                        </a>
                    </Link>
                </ContainerLink>
                
            </div>
            <Button>ENTRAR</Button>
        </Form>
    )
}
