function betterThanAverage(classPoints, yourPoints) {
  let classSum = 0;
  for (let x in classPoints) {
  classSum += classPoints[x];
  }
  let average = (classSum + yourPoints) /(classPoints.length + 1 )
  return average < yourPoints ? true : false
}