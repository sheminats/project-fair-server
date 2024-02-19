const  express=require('express')
const userController =require('../Controllers/userController')
const projectController =require('../Controllers/projectController')
const jwtMiddleware =require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')


const router=new express.Router()


//register api
router.post('/register',userController.register)

//login api
router.post('/login',userController.login)

//add project api-----router specific middleware
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)



//get home project
router.get('/homeProject',projectController.getHomeProject)

//get all project
router.get('/allProject',jwtMiddleware,projectController.getAllProject)


//get user project
router.get('/userProject',jwtMiddleware,projectController.getUserProject)

//update user
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)


//update project
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)

//remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)

//exporting router
module.exports=router
