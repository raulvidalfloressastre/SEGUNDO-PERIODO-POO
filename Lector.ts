export class Lector{
private socio:string="";
private nlector:string="";
private telefono:string="";
private direccion:string="";
private TC:string="";

constructor (socio:string, nlector:string, telefono:string, direccion:string, TC:string){
    this.socio=socio;
    this.nlector=nlector;
    this.telefono=telefono;
    this.direccion=direccion;
    this.TC=TC;
}

public set_socio(socio:string){
    this.socio=socio;
}
public get_socio():string{
    return this.socio;
}
public set_nlector(nlector:string){
    this.nlector=nlector;
}
public get_nlector():string{
    return this.nlector;
}
public set_telefono(telefono:string){
    this.telefono=telefono;
}
public get_telefono():string{
    return this.telefono;
}
public set_direccion(direccion:string){
    this.direccion=direccion;
}
public get_direccion():string{
    return this.direccion;
}
public set_TC(TC:string){
    this.TC=TC;
}
public get_TC():string{
    return this.TC;
}
}