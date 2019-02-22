import moment from 'moment';
export function isNumberCheck(string){
    const numberReg = new RegExp('^[0-9]+$');
    return numberReg.test(string);
}
  
export function isStringCheck(string){
    return /^[a-zA-Z]*$/.test(string);
}

export function isEmailCheck(string){
    const emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRe.test(string);
}
export function isStringWithSpace(string){
    return /^[a-zA-Z\s]*$/.test(string);
}

export function parseDateAndTime(date_time, type){
    let format = '';
    if(type === 1){
        format = 'MM/DD/YYYY h:mm:ss a';
    }
    else if(type === 2){
        format = 'MM/DD/YYYY HH:mm:ss';
    }
    return moment(date_time).format(format)
}