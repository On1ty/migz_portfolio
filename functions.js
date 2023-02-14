// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(++counter))
//   setCounter(0)
// }

export function calculateMyAge() {
    const dateToday = new Date();
    const myBirthDate = new Date('January 03 1999');

    let age = dateToday.getFullYear() - myBirthDate.getFullYear();
    let month = dateToday.getMonth() - myBirthDate.getMonth();

    if (month < 0 || (month === 0 && dateToday.getDate() < myBirthDate.getDate())) {
        age--;
    }

    return age;
}