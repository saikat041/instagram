

// TODO: add more validation to it
function validateSignupData(data){
    const {name, username, email, password, confirmPassword} = data;

    if (name.lengh === 0){
        return {error: "Name can't be empty"};
    }

    if (username.lengh === 0){
        return {error: "Username can't be empty"};
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
    const {username, password} = data;

    if (username.lengh === 0){
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