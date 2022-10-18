import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

    transform(valor: boolean): string {
   
       //ternario
        return (valor === true) ? "vuela" : "camina"; 
    }

}