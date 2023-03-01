import React from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { fetchLogin } from '../../controller/Fetch'
import { GlobalContext } from '../Context/GlobalContext'
import { Button, ContainerInput, ContainerLink, Form, Input, Label, TextFunctional, Title } from './Commons'


export const Login = () => {
    const global = React.useContext(GlobalContext)
    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    })
    const [status, setStatus] = React.useState(null)
    const navigate = useNavigate()
    function handleChange({target}){
        setLogin({...login, [target.id]: target.value})
    }
    async function handleSubmit (event){
        event.preventDefault()
        const response = await fetchLogin(login)
        if(response.status && response.status === 'error'){
            setStatus(response)
        }else{
            console.log(response);
            global.setInfoLogin({name: response.name, id: response.id, avatar: response.avatar})
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
                    <Label htmlFor='email' status={status && status.type === 'email' ? status.status : 'normal'}>{status && status.type === 'email' ? 'Email incorreta' : 'Email'} </Label>
                    <Input status={status && status.type === 'email' ? status.status : 'normal'} type='email' id='email' value={login.email} onChange={handleChange} required></Input>
                </ContainerInput>
                <ContainerInput>
                    <Label htmlFor='password' status={status && status.type === 'password' ? status.status : 'normal'}> {status && status.type === 'password' ? 'Senha incorreta' : 'Senha'} </Label>
                    <Input status={status && status.type === 'password' ? status.status : 'normal'} type='password' id='password' value={login.password} onChange={handleChange} required></Input>
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
