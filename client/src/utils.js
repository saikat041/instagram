

// TODO: add more validation to it
function validateSignupData(data){
    const {name, email, password, confirmPassword} = data;

    if (name.lengh === 0){
        return {error: "Name can't be empty"};
    }

    if (email.lengh === 0){
        return {error: "Email can't be empty"};
    }

    if (password.lengh < 6){
        return {error:"Password length must be atleast 6 letter long"}
    }

    if (password !== confirmPassword){
        return {error: 'password and confirm password does not match'}
    }
    return {}
}

function validateSigninData(data){
    const {email, password} = data;

    if (email.lengh === 0){
        return {error:"Email can't be empty"};
    }

    if (password.lengh < 6){
        return {error:"Password length must be atleast 6 letter long"}
    }

    return { }

}

function join(...arr){
    return arr.join(' ');
}

module.exports = {
    validateSignupData,
    validateSigninData,
    join
}