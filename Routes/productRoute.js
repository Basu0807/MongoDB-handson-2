const { UserController, Query1, Query4, Query5, Query3, Query2, Query6, deleteMany } = require('../Controller/userController')



const UserRoute =require('express').Router()

UserRoute.post('/add',UserController)
UserRoute.get('/query1',Query1)
UserRoute.get('/query2',Query2)
UserRoute.get('/query3',Query3)
UserRoute.get('/query4',Query4)
UserRoute.get('/query5',Query5)
UserRoute.get('/query6',Query6)
UserRoute.get('/delete',deleteMany)




module.exports=UserRoute