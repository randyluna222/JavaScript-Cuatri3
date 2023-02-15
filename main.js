//Crear un prototipo "personaProto" que incluya los métodos: caminar, saludar y comer.
//Crear un prototipo "estudianteProto" que incluya los métodos: estudiar y dormir. Este prototipo debe tener como prototipo "personaProto".
//Crear un prototipo "profesorProto" que incluya los métodos: enseñar y calificar. Este prototipo debe tener como prototipo "personaProto".
//Crear un constructor "EstudianteConstructor" que acepte como parámetros nombre, edad y escuela. Este constructor debe crear objetos que tengan como prototipo "estudianteProto".
//Crear un constructor "ProfesorConstructor" que acepte como parámetros nombre, carrera y escuela. Este constructor debe crear objetos que tengan como prototipo "profesorProto".
//Todos los métodos deben hacer uso de al menos una de las propiedades del objeto. Por ejemplo, el método "saludar" puede devolver "Hola! Soy -nombre-"
//Haciendo uso de "EstudianteConstructor", crear un par de objetos diferentes y llamar métodos de sus prototipos "estudianteProto" y "personaProto"
//Haciendo uso de "ProfesorConstructor", crear un par de objetos diferentes y llamar métodos de sus prototipos "profesorProto" y "personaProto"




function personaProto(caminar, saludar, comer) {


}

let person1 = new personaProto();

personaProto.prototype.farewell = function() {
  alert(this.saludar.caminar.comer + ' has left the building. Bye for now!');
};

function estudianteProto(estudiar, dormir) {


}

let estudiante = new estudianteProto();

personaProto.prototype.farewell = function() {
  alert(this.dormir.estudiar + ' has left the building. Bye for now!');
};


function profesorProto(enseñar, calificar) {


}

let profesor = new profesorProto();

personaProto.prototype.farewell = function() {
  alert(this.enseñar.calificar + ' has left the building. Bye for now!');
};



class EstudianteConstructor{
      constructor(nombre, edad, escuela){
        this.nombre = nombre;
        this.edad = edad;
        this.escuela = escuela;
      }
      sayHi(){
      return `Hola soy ${this.nombre, this.edad, this.escuela}`;
    }
}

const estudianteProto= new estudiante ();
Object.getPrototypeOf(estudianteProto) === estudiante.PrototypeOf

class ProfesorConstructor{
  constructor(nombre, carrera, escuela){
    this.nombre = nombre;
    this.carrera = carrera;
    this.escuela = escuela;
  }
  sayHi(){
  return `Hola soy ${this.nombre, this.carrera, this.escuela}`;
}
}

const profesorProto= new profesor ();
Object.getPrototypeOf(profesorProto) === profesor.PrototypeOf

//Haciendo uso de "EstudianteConstructor", crear un par de objetos diferentes y llamar métodos de sus prototipos "estudianteProto" y "personaProto"
//Haciendo uso de "ProfesorConstructor", crear un par de objetos diferentes y llamar métodos de sus prototipos "profesorProto" y "personaProto"


const estudianteProto = new estudiante1 ('Ingles', 'casi no duerme');
estudianteProto.estudiar
estudianteProto.dormir

const personaProto = new persona1 ('todo el tiempo', 'hola');
personaProto.caminar
personaProto.saludar

