function calculateSecondsBetweenDates (date1, date2) {
    // Convertir las fechas a milisegundos
    const msDate1 = new Date(date1).getTime();
    const msDate2 = new Date(date2).getTime();

    // Calcular la diferencia en milisegundos
    const differenceInMs = Math.abs(msDate2 - msDate1);

    // Convertir la diferencia a segundos
    const differenceInSeconds = Math.floor(differenceInMs / 1000);

    return differenceInSeconds;
}