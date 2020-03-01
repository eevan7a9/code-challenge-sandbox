/* There are List of students. output to show the average score of top five highest score */

const classScore = [
  { studentId: 1, score: 80 },
  { studentId: 1, score: 40 },
  { studentId: 2, score: 50 },
  { studentId: 1, score: 90 },
  { studentId: 1, score: 92 },
  { studentId: 1, score: 50 },
  { studentId: 2, score: 99 },
  { studentId: 2, score: 25 },
  { studentId: 1, score: 99 },
  { studentId: 2, score: 93 },
  { studentId: 1, score: 25 },
  { studentId: 2, score: 80 },
  { studentId: 2, score: 98 },
  { studentId: 1, score: 98 },
  { studentId: 2, score: 94 },
  { studentId: 2, score: 40 }
];

function studentsAverageTopFiveScore(students) {
  const studentScore = {};
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (studentScore.hasOwnProperty(student.studentId)) {
      studentScore[student.studentId].push(student.score);
      //   console.log("has");
    } else {
      studentScore[student.studentId] = [student.score];
      //  studentScore[student.studentId].score
    }
  }
  console.log(studentScore);
  /* 
    {
  '1': [
    80, 40, 90, 92,
    50, 99, 25, 98
  ],
  '2': [
    50, 99, 25, 93,
    80, 98, 94, 40
  ]
}*/
  for (const key in studentScore) {
    if (studentScore.hasOwnProperty(key)) {
      const student = studentScore[key];
      const sortDesc = student.sort((a, b) => b - a);
      const top5 = sortDesc.slice(0, 5);
      const average = top5.reduce((acc, score) => acc + score, 0) / 5;
      studentScore[key] = average;
    }
  }
  console.log(studentScore);
  /*
    average of Top 5 highest score of each student
    { '1': 91.8, '2': 92.8 } 
  */
}
studentsAverageTopFiveScore(classScore);
