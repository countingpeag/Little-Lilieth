export default function handlePhone (phoneNumber) {
    let regEx = new RegExp("^[0-9]+$");
    return regEx.test(phoneNumber);
};