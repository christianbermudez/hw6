//Declare studentList Array
const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100]
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90]
  },
];


// a. Add 5 extra credit points to each existing score (update in place)
studentList.forEach(student => {
  student.scores.forEach((score, i) => {
    student.scores[i] = score + 5;
  });
});

// b. Calculate average and add to scores array (update in place)
studentList.forEach(student => {
  const avg = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
  student.scores.push(Math.round(avg));
});

// c. Display results
studentList.forEach(student => {
  console.log(`${student.firstName} ${student.lastName}: ${student.scores.join(", ")}`);
});