// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/
const data = [
    {
      name: "ben",
      age: 20
    }
]

function HandlerA (req, res) {
  
  return res.status(200).send({message: data[0].name});
}

export default HandlerA;
