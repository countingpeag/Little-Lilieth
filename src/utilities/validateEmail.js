export default function handleEmail (email) {
    let regEx = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$");
    return regEx.test(email);
};