const Account=require('../model/account');


exports.getAllAccounts = async(req,res)=>
{
    try{
        const accounts = await Account.find()
        res.json(accounts)
    }
    catch(err)
    {
        res.status(500).json({msg : err.message})
    }
}
 exports.getSingleAccount = async (req,res)=>
 {
    try{
         const account = await Account.findOne({userId:req.params.id});
         if(!account)
         {
            return res.status(404).json({msg: 'Account Not found'})
         }
         else{
            res.json(account)
         
    }
}
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
 }
 exports.addNewAccount = async(req,res)=>
 {
    try{
        const newaccount=await Account.findOne({userId: req.body.userId})
        if(!newaccount)
        {
            const adddedAccount=await Account.create(req.body)
            res.json(adddedAccount)
        }
        else
        {
            res.json({msg:'Account already exists'})
        }
    }
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
 }
 exports.updateAccount= async(req,res)=>
    {
       try{
           const account=req.body;
           const fetchedaccount= await Account.findOne({userId: account.userId})
           if(fetchedaccount)
           {
               await Account.updateOne({userId: account.userId},{$set:account})
               res.json(await Account.findOne({userId: account.userId}))
           }
           else
           {
               res.json({msg:'Account does not exists'})
           }
       }
       catch(err)
       {
           res.status(500).json({msg:err.message})
       }
       
    }
    exports.deleteAccount = async(req, res)=>
    {
        try{
            const account = await Account.findOne({userId:req.params.id})
            if(account)
            {
                await Account.deleteOne({userId:account.userId})
                res.json(account)
            }
            else{
                res.json({msg:'Account doesnt exists'})
            }
        }
            catch(err)
            {
                res.status(500).json({msg:err.message})
            }
        }
    