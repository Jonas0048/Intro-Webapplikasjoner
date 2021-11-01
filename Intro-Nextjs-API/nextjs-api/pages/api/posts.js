
const posts = [
    {
      "id": "1",
      "title": "99 little bugs in the code. 99 little bugs in the code. Take one down, patch it around. 127 little bugs in the code …"
    },
    {
      "id": "2",
      "title": "Remember that there is no code faster than no code."
    },
    {
      "id": "3",
      "title": "It’s not a bug — it’s an undocumented feature."
    },
    {
      "id": "4",
      "title": "ASCII stupid question, get a stupid ANSI."
    }    
  ]

  export default function handler(req, res) {
    if (req.method === 'POST') {
      // tar i mot data som sendes med forespørselen
      const data = req.body
  
      // undersøke om request body har key = title
      if (!data?.title) {
        // hvis ikke returner 400 Bad Request
        // sender med feilmelding som vi kan bruke (error: ...)
        res
          .status(400)
          .json({ success: false, error: 'Fyll ut all nødvendig data' })
      } else {
        // legger til data i posts listen vår
        data.id = parseInt(posts.at(-1).id) + 1;
        posts.push(data)
  
        // sender status 201 (Created) og den nye oppdaterte listen
        res.status(201).json({ success: true, data: posts })
      }
    } else if (req.method === 'PUT') {
      // sender status 405 => metoden er ikke lov
      res.status(405).end()
    } else {
      // håndterer alle andre responser
      res.status(200).json({ success: true, data: posts })
    }
  }