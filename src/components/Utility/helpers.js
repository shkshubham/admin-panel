export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function removeSpecialChar(char){
    return char.replace("_", " ");
}

export function createTableHeader(char){
    return removeSpecialChar(capitalizeFirstLetter(char));
}