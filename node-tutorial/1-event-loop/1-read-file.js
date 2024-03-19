// even loop resources
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=PNa9OMajw9w&pp=ygUKZXZlbnQgbG9vcA%3D%3D
// https://course-api.com/slides.html

const { readFile, writeFile } = require('fs');
console.log('started a first task');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')
