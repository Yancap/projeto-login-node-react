
export async function fetchLogin(login){
    try{
        const request = await fetch('http://localhost:3001/', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
          })
        const response = await request.json()
        return response
    } catch{
        
    }
    
}

export async function fetchRegister(register){
    try{
        const request = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(register)
          })
        const response = await request.json()
        return response
    } catch{
        
    }
    
}

export async function fetchAvatar(requests){
  try{
      const request = await fetch('http://localhost:3001/change-avatar', {
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requests)
        })
      const response = await request.json()
      return response
  } catch{
      
  }
  
}
