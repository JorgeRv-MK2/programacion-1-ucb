class P{
constructor(n,e,g,t){this.n=n;this.e=e;this.g=g;this.t=t;}
info(){return`${this.n}, ${this.e} años, ${this.g}, ${this.t}`;}
}
class B{
constructor(cap){this.cap=cap;this.oc=[];}
agregar(p){if(this.oc.length<this.cap)this.oc.push(p);}
lista(){return this.oc.map(p=>p.info()).join('');}
}
function evac(pasajeros,botes){
const prio={"1ra Clase":1,"2da Clase":2,"3ra Clase":3};
pasajeros.sort((a,b)=>
(a.g==="Femenino"&&b.g!=="Femenino")?-1:
(a.g!=="Femenino"&&b.g==="Femenino")?1:
a.e-b.e||prio[a.t]-prio[b.t]);
let fuera=[];
for(let p of pasajeros){
let asignado=botes.find(b=>b.oc.length<b.cap);
asignado?asignado.agregar(p):fuera.push(p);
}
botes.forEach((b,i)=>{
console.log(`Bote${i+1}(${b.oc.length}/${b.cap}):\n${b.lista()||"Vacío"}`);
});
console.log(`Pasajeros fuera:\n${fuera.map(p=>p.info()).join('\n')||"Ninguno"}`);
}
const ps=[
new P("Ana",25,"Femenino","1ra Clase"),
new P("Luis",30,"Masculino","2da Clase"),
new P("Marta",17,"Femenino","3ra Clase"),
new P("Pedro",50,"Masculino","1ra Clase"),
new P("Lucía",40,"Femenino","2da Clase"),
new P("Jorge",10,"Masculino","3ra Clase"),
new P("Sofía",5,"Femenino","1ra Clase"),
new P("Carlos",60,"Masculino","3ra Clase"),
new P("Elena",35,"Femenino","2da Clase"),
new P("Diego",28,"Masculino","1ra Clase")
];
const bs=[new B(4),new B(3),new B(2)];
evac(ps,bs);