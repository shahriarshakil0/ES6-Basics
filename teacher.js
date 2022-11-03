
import { Person1 } from "./person";

export class Teacher1 extends Person1{
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("Teach");
    }
}


