![image](https://user-images.githubusercontent.com/76681791/162554519-a4fe5b0c-07c8-4eb5-ab2c-f5ad3fec6cea.png)
# Water My Plants

Ensuring that all your plants are consistently watered is actually pretty difficult. Water My Plants is an app that helps to solve those problems. 

With an easy to use interface for creating a plant watering schedule tailored to each individual plant, **Water My Plants** will remind users when it's time to feed that foliage and quench your plants' thirst.

Endpoints All endpoints located at 'https://water-my-plants004.herokuapp.com' 
[POST] /api/auth/register

Input format
  {
    username: '', //required -- unique
    password: '', // 8characters min required
    phoneNumber: '' 10 char phone number required unique
  }
  
valid input response
{
    "user_id": 19,
    "username": "asdfsssaaa",
    "password": "$2a$08$y.LurGq.NEUiz4vMVBLQr.GDRpBsBh8FlutA3cz6Pz6iplnFMPnwO",
    "phoneNumber": "6628849984"
}

  
[POST] /api/auth/login

{
  username: '',
  password: ''
}

on success login

{
  message: `Welcome back 'USERNAME'`,
  token: 'here is where your token will be'
}

