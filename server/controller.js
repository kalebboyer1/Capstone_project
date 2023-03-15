



let answers = []


module.exports = {
   
    saveAnswer: (req,res) => {
        answers.push(req.body)
        console.log(req.body)
        res.status(200).send(answers)
        
    },
    
    deleteAnswer: (req,res) => {
        let index = req.params.index
        console.log(index)
        answers.splice(index,1)
        res.status(200).send(answers)
    }
}