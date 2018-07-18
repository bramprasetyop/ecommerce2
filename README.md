# ecommerce2

to see this project visit https://ecommerce.bramaprasetyo.co/

| Route Items     | Http   | Description     | Parameter         |
|-----------------|--------|-----------------|-------------------|
| /home           | POST   | post new item   | brand,price,image |
| /home/items     | GET    | get all items   |                   |
| /home/items/:id | GET    | get one item    |                   |
| /home/items/:id | PUT    | edit one item   | brand,price       |
| /home/items/:id | DELETE | delete one item |                   |

| Route User      | Http | Description   | Parameter           |
|-----------------|------|---------------|---------------------|
| /customer/add   | POST | add new user  | name,email,password |
| /customer       | GET  | get all user  |                     |
| /customer/:id   | GET  | get one user  |                     |
| /customer/:id   | PUT  | edit one user | name,email,password |
| /customer/login | POST | login user    | email,password      |
