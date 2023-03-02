// this comment for me --->> please look back again 🙂😶😉

// const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    sum += birdsPerDay[index];
  }
  return sum;
}

// console.log(totalBirdCount(birdsPerDay));

///---///

// const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0;
  for (let i = (week - 1) * 7; i < week * 7; i++) {
    totalBirds += birdsPerDay[i];
  }
  return totalBirds;
}

// console.log(birdsInWeek(birdsPerDay, 2));
