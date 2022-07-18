
const authPage = (Permissions) => {                         //1st- create function authPage  //5th step permission to access the endpoints 
     return(req, res, next) => {
        const userRole =  req.body.role;                    //6th step- Defines their role
        if(Permissions.includes(userRole)){                 //7th step- Check Conditions
            next();
        }else {
            return res.status(401).json("You Don't Have Permissions")
        }
     };
};
const authCourse = (req,res,next) => {                      //2nd- create another function authCourse
    const courseNumber = parseInt(req.params.number);       //9th step- we can get course number
    if(req.body.courses.includes(courseNumber)) {           //10th step- Check condition
        next();
    }else{
        return res. status(401).json("You Don't Have Access this Course!")
    }
};

module.exports= { authPage, authCourse };                   //3rd step- export module authPage, authCourse

