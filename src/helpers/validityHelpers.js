export const validateEmail = (email) => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
export const validatePhone = (phone) => {
    let re = /^[0-9]{10}$/
    return re.test(phone)
}