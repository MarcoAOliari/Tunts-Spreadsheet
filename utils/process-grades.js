module.exports = function processGrades (nClasses, grades) {
    
    // Array of all students data
    let processedData = []

    grades.map(student => {
        let absences = parseInt(student[2])
        // Array of one student data
        let studentData = []

        // Check number of absences
        if (absences/nClasses > 0.25) {

            studentData.push("Reprovado por Falta", 0)

        } else {
            // Calculate the average from tests
            let average = (parseInt(student[3]) + parseInt(student[4]) + parseInt(student[5])) / 3

            // Appends the processed data about a single student
            if (average < 50) {
    
                studentData.push("Reprovado por Nota", 0)
    
            } else if (average < 70) {
    
                studentData.push("Exame Final", Math.round(100 - average))
    
            } else {
    
                studentData.push("Aprovado", 0)
    
            }
        }

        processedData.push(studentData)

        console.log(`Novo aluno - Matricula: ${student[0]}; Nome: ${student[1]}; Situacao: ${studentData[0]}`)

    })

    return processedData

}