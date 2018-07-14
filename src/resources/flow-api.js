export const getFlowFunctions = () =>
    // simulate an API hit delay of a random time between 0.2 and 1 seconds
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(getData()), Math.floor(Math.random() * 800) + 200);
    });

export const getData = () => [
    {
        id: 1,
        title: "Verify if weekend",
        body: `function isWeekend(date) {
  const dayOfWeek = date.getDay();
  return (dayOfWeek === 6) || (dayOfWeek === 0);
}`,
        true_id: 2,
        false_id: 3,
    },
    {
        id: 2,
        title: "Celebrate",
        body: `function celebrate() {
  console.log('Party on!!!');
  return true;
}`,
        true_id: null,
        false_id: null,
    },
    {
        id: 3,
        title: "Verify if Friday",
        body: `function isItFriday(date) {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 5;
}`,
        true_id: 4,
        false_id: 5,
    },
    {
        id: 4,
        title: "TGIF",
        body: `function tgif() {
  console.log('TGIF!');
  return true;
}`,
        true_id: null,
        false_id: null,
    },
    {
        id: 5,
        title: "Groan",
        body: `function groan(date) {
  const daysUntilWeekend = 6 - date.getDay();
  console.log('Hang in there... ' + daysUntilWeekend + ' days until the weekend!');
  return true;
}`,
        true_id: null,
        false_id: null,
    },
];
