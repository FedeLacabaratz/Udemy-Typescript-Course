(() => {
    // El enum me ordena el objeto tal cual lo escribo con sus key y values ordenadas de la siguiente manera: 
    // Primero ascendente los values y luego los keys tal cual estan escritos (Resultado: Un objeto con 6 pares de key/value)
    // Solo me devolverá 3 pares si los value no son numéricos, en cual caso me devuelve un objeto
    enum AudioLevel {
        min,
        medium ,
        max,
    }

    const currentAudio = AudioLevel.max

    console.log(currentAudio)
    console.log(AudioLevel)

})()