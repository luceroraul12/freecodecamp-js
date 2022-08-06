function rangeOfNumbers(startNum, endNum) {
    var arreglo = [];

    arreglo.push(recursivo(startNum, endNum));
    arreglo.pop();



    function recursivo(inicio, fin){
        if(inicio <= fin){
            arreglo.push(inicio);
            recursivo(inicio+1,fin);
        }
    }


    return arreglo;

  };



console.log(rangeOfNumbers(19, 30));