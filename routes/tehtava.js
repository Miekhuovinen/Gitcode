var express = require('express');
var router = express.Router();

router.get('/',
    function(request,response,next){
        response.send('I am example');
    }
);
router.get('/example',
    function(request,response){
        response.send('Moro!');
    }
);
router.use(
  function(req,res,next){
      console.log('The common middleware called');
      next();
  }
);
router.get('/example2/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);
router.get('/example3/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);
router.post('/',function(request,response)
{
  response.send(request.body);
});
module.exports = router;
