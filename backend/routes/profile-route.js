const express =require('express');
const {check}=require('express-validator');
const profileController =require('../controllers/profile-controller')
const router=express.Router();
const fileUpload=require('../middleware/file-upload')
console.log("profile-routes");
router.get('/:pid', profileController.getProfileById);

router.post('/:pid',fileUpload.single("image"),[
                    check('university').not().isEmpty()],profileController.UpdateProfileById);
module.exports = router;
//check('works').not().isEmpty(),
//check('description').not().isEmpty(),