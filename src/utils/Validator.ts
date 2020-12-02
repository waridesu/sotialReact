export type validFieldType = (value: string) => string | undefined

export const requiredField: validFieldType = (value) => {
    if (value) return undefined;
    return "unfilled";
}

export const maxLength = (maxLength: number): validFieldType => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}


