export const db = [
  {
    client: 'NIKE',
    logo: 'nikeLogo',
    users: [
      {
        email: 'kumar@nike.com',
        password: 'nike123'
      },
      {
        email: 'rocky@nike.com',
        password: 'nike234'
      }
    ],
    authenticate: nikeAuthenticate
  },
  {
    client: 'ADIDAS',
    logo: 'adidasLogo',
    users: [
      {
        email: 'kumar@adidas.com',
        password: 'adidas123'
      },
      {
        email: 'rocky@nike.com',
        password: 'adidas234'
      }
    ],
    authenticate: adidasAuthenticate
  }
]

export const nikeAuthenticate = (email,password) => {
  // code to validate
  return true;
}

export const adidasAuthenticate = (email,passowrd) => {
  // code to validate
  return false;
}
