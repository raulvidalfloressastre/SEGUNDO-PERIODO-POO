export class Multa{
    constructor (nombre:string, nacionalidad:string, nacimiento:string, titulo:string, tipo:string, editorial:string, year:string, socio:string, fecha_inicio:string, fecha_final:string){
        this.fecha_inicio=fecha_inicio;
        this.fecha_final=fecha_final;
    }

    private fecha_inicio:string="";
    private fecha_final:string="";

    public set_fecha_inicio(fecha_inicio:string){
        this.fecha_inicio=this.fecha_inicio;
    }
    public get_fecha_inicio():string{
        return this.fecha_inicio;
    }
    public set_fecha_final(fecha_final:string){
        this.fecha_final=fecha_final;
    }
    public get_fecha_final():string{
        return this.fecha_final;
    }
}