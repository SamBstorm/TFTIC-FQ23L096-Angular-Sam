import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators{
    /*public static haveNumber(control : AbstractControl) : null | ValidationErrors {
        const value : string | null = control.value;
        if(value === null || value.length <= 0) return null;
        if(value.match(/[0-9]/g)) return null;
        return {
            haveNumber : {
                message : "Il faut au minimum 1 caractère numérique",
                requiredCount : 1,
                actualCount : 0
            }
        };
    }*/

    public static haveNumber(minimumValue : number) : null | ValidatorFn {
        if(minimumValue < 1) return null;
        return (control : AbstractControl) : null | ValidationErrors =>{
            const value : string | null = control.value;
            if(value === null || value.length <= 0) return null;
            const result = value.match(/[0-9]/g);
            if(result != undefined && result.length >= minimumValue) return null;
            return {
                haveNumber : {
                    message : `Il faut au minimum ${minimumValue} caractère(s) numérique(s)`,
                    requiredCount : minimumValue,
                    actualCount : result?.length
                }
            };
        }
    }

    public static haveLowerCase(minimumValue : number) : null | ValidatorFn {
        if(minimumValue < 1) return null;
        return (control : AbstractControl) : null | ValidationErrors =>{
            const value : string | null = control.value;
            if(value === null || value.length <= 0) return null;
            const result = value.match(/[a-z]/g);
            if(result != undefined && result.length >= minimumValue) return null;
            return {
                haveLowerCase : {
                    message : `Il faut au minimum ${minimumValue} caractère(s) en minuscule`,
                    requiredCount : minimumValue,
                    actualCount : result?.length
                }
            };
        }
    }

    public static haveUpperCase(minimumValue : number) : null | ValidatorFn {
        if(minimumValue < 1) return null;
        return (control : AbstractControl) : null | ValidationErrors =>{
            const value : string | null = control.value;
            if(value === null || value.length <= 0) return null;
            const result = value.match(/[A-Z]/g);
            if(result != undefined && result.length >= minimumValue) return null;
            return {
                haveUpperCase : {
                    message : `Il faut au minimum ${minimumValue} caractère(s) en majuscule`,
                    requiredCount : minimumValue,
                    actualCount : result?.length
                }
            };
        }
    }

    public static haveSpecialCharacter(minimumValue : number) : null | ValidatorFn {
        if(minimumValue < 1) return null;
        return (control : AbstractControl) : null | ValidationErrors =>{
            const value : string | null = control.value;
            if(value === null || value.length <= 0) return null;
            const result = value.match(/[@\-_+*=$£]/g);
            if(result != undefined && result.length >= minimumValue) return null;
            return {
                haveSpecialCharacter : {
                    message : `Il faut au minimum ${minimumValue} caractère(s) spéciaux`,
                    requiredCount : minimumValue,
                    actualCount : result?.length
                }
            };
        }
    }
}