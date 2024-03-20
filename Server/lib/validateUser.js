function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateUser = (userInfo) => {
    for(let field in userInfo) {        
        if (field === "email" ) {   
            if (validateEmail(userInfo["email"])) {
                continue;
            } else {
                return false;
            }
        }
        if (userInfo[field] !== "") {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

module.exports = validateUser;