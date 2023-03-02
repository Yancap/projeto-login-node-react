import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../Context/GlobalContext'
import folha_1 from '../images/folha-1.svg'
import folha_2 from '../images/folha-2.svg'
import avatar from '../images/avatar.svg'
import { fetchAvatar } from '../../controller/Fetch'

const Container = styled.div`
    position: relative;
    background-color: var(--bg-form-color);
    border-radius: 10px;
    border: 3px solid var(--border-form-color);
    border-width: 2px 3px 4px 5px;
    height: 672px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    ::before{
        content: url(${folha_2});
        mix-blend-mode: darken;
        position: absolute;
        animation: rotateLeafWelcome 0.75s forwards;
    }
    ::after{
        content: url(${folha_1});
        mix-blend-mode: darken;
        position: absolute;
        right: -58px;
        bottom: -45px;
    }
    @keyframes rotateLeafWelcome {
      from{
        left: -51px;
        top: -78px;
    }
    to{
        transform: rotate(-25deg);
        top: -110px;
        left: -45px
    }
}
`
const Title = styled.h1`
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 44px;
  color: var(--text-title-color);
`
const Subtitle = styled.h2`
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 34px;

  color: var(--text-subtitle-color);
`
const Avatar = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: var(--height-avatar);
  overflow: hidden;
  border-radius: 50%;
  background-color: #D9D9D9;
`
const AvatarIcon = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`
const AddPhoto = styled.div`
    align-self:flex-end;
    display: flex;
    position: relative;
    z-index: 2;
    justify-content: center;
    width: 250px;
    height: calc(var(--height-avatar) / 3.5);
    background-color: var(--bg-avatar-color);
    border-radius: 0% 0% calc(var(--height-avatar) / 3.5) calc(var(--height-avatar) / 3.5);
    label{
      cursor: pointer;
      font-family: 'Montserrat';
      text-decoration: none;
      font-weight: 500;
      color: var(--btn-text-color);
      transition: 0.2s ease-in;
      margin-top: 5%;
    }
    label:hover{
      transition: 0.2s ease-in;
      transform: scale(1.05);
    }
    input{
      display: none;
    }
`
const SendPhoto = styled.div`
  align-self:flex-end;
  margin-bottom: 10%;
  width: 250px;
  height: calc(var(--height-avatar) / 5.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  z-index: 2;
  
  background-color: var(--bg-avatar-color);
  span{
    cursor: pointer;
    font-family: 'Montserrat';
    text-decoration: none;
    font-weight: 500;
    color: var(--btn-text-color);
    transition: 0.2s ease-in;
    margin-bottom: 5%;
  }
  span:hover{
      transition: 0.2s ease-in;
      transform: scale(1.05);
  }
  
`
const TextChangePhoto = styled.a`
  display: block;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;
  color: var(--text-title-color);
  text-decoration: none;
  transition:  0.25s ease-in-out;
  &:hover{
    text-decoration: underline;
    transform: scale(1.05);
    color: var(--btn-text-color);
    transition:  0.25s ease-in-out;
  }
`
const SuccessText = styled.span`
  display: block;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: var(--success-color);
  margin-bottom: 20px;
`
export const Welcome = () => {
  const global = React.useContext(GlobalContext)
  const [accept, setAccept] = React.useState(global.infoLogin.avatar ? true : false)
  const [response, setResponse] = React.useState(null)

  function handleChange(event){
    let reader = new FileReader();
    reader.onload = () => {
      global.setInfoLogin({...global.infoLogin, avatar: reader.result})
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  async function handleClick(){
    setAccept(!accept)
    console.log(fetchAvatar({id: global.infoLogin.id, avatar: global.infoLogin.avatar}));
    const responseServer = await fetchAvatar({id: global.infoLogin.id, avatar: global.infoLogin.avatar})
    setResponse(responseServer);
  }
  return (
    <Container>
      <header>
        <Subtitle>Seja bem vindo(a)</Subtitle>
        <Title>{global.infoLogin.name}</Title>
      </header>
      <main>
        <Avatar>
          {!global.infoLogin.avatar && !accept ?  
              <>
              <AvatarIcon src={avatar} style={{width:'70%'}}/>
              <AddPhoto>
                <label htmlFor='photo'>Adicionar foto</label>
                <input type='file' id='photo' name='photo' onChange={handleChange} accept="image/*"/>
              </AddPhoto>
              </>  
          : 
          <>
            <AvatarIcon src={global.infoLogin.avatar}/> 
            {!accept ? 
            <SendPhoto onClick={handleClick}>
              <span>Enviar Foto</span>
            </SendPhoto>: <></>}
          </> }

        </Avatar>

      </main>
      <footer>
      {response && <SuccessText>{response.message}</SuccessText>}
        <TextChangePhoto href='#' onClick={()=> {
          setResponse(null);
          global.setInfoLogin({...global.infoLogin, avatar: null})
          setAccept(!accept)}}>Trocar Foto</TextChangePhoto>
      </footer>
    </Container>
  )
}
