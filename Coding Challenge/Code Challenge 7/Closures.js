//Closures

function interviewQuuestions(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ' can you please explain what UX Design is?');
             
        } else if (job === 'teacher') {
           console.log('What do you teach the students? ' + name);
        
        }else{
            console.log('Hello!! Please tell me about yourself');
        }
    }
}

interviewQuuestions('designer')('mary');
interviewQuuestions('teacher')('john');