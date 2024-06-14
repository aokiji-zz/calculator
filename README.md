#### Installation
1. Install dependencies: `yarn`
2. Start a PostgreSQL database with docker using: `docker-compose up -d`.
3. Apply database migrations: `npx prisma format | npx prisma generate | npx prisma migrate dev` 
4. Start the project:  `yarn start`


5. To create an User to login in the Calculator App or verify user created by prisma seed
 
Endpoint:

http://localhost:3001/users

Method:

POST

Body: 

{
    "email": "firstuser@email.com",
    "hash": "mypassisweak",
    "name": "First User"
}
