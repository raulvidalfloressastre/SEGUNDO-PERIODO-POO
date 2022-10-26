export class Autor{
    private nombre:string="";
    private nacionalidad:string="";
    private nacimiento:string="";

    constructor (nombre:string, nacionalidad:string, nacimiento:string, titulo:string, tipo:string, editorial:string, year:string)
    {

        this.nombre =nombre;
        this.nacionalidad=nacionalidad;
        this.nacimiento=nacimiento;
    }

    public set_nombre(nombre:string){
        this.nombre=nombre;
    }
    public get_nombre():string{
        return this.nombre;
    }
    public set_nacionalidad(nacionalidad:string){
        this.nacionalidad=nacionalidad;
    }
    public get_nacionalidad():string{
        return this.nacionalidad;
    }
    public set_nacimiento(nacimiento:string){
        this.nacimiento=nacimiento;
    }
    public get_nacimiento():string{
        return this.nacimiento;
    }
}