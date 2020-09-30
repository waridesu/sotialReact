export const requiredField = (value) => {
  if (value) return undefined;
  return "unfilled";
};

export const maxLength =(maxLength)=> value=>{
    if (value.length>maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}


