import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:'epipetitile'
})

export class empTitlePipe implements PipeTransform{

    //it will recieve the name of the employee and the respective gender
    transform(value:string,gender:string):string{
        if(gender.toLocaleLowerCase()=='male'){
            return "Mr."+value;
        }
        else{
            return "Miss." + value;
        }
        
    }
}