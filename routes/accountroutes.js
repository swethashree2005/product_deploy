
const accountController=require('../controller/accountcontrol');
const router=require('express').Router()


router.get('/api/Accounts',accountController.getAllAccounts);
router.get('/api/Accounts/:id', accountController.getSingleAccount);
router.post('/api/Account',accountController.addNewAccount);
router.put('/api/Account',accountController.updateAccount)
router.delete('/api/Account/:id',accountController.deleteAccount)



module.exports = router