function fakeSome(array, callback) {
  for (let element of array) {
    //si la function callback devuelve true con alguno de los elementos del array como argumento, se devuelve true y se sale de la función  
    if (callback(element)) {
        return true;
    } 
  }
  //si se iteró sobre todo los elementos es porque la función nunca devolvió true, entonces se devuelve false 
  return false;    
}