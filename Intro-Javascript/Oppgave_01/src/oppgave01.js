// import './styles.css';

// Statisk tekst som brukes til å søke i
const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = () => {
  //Gjør om text til array eks. ['Baby', 'cliche']
  let textArray = text.split(" ");
  //Velg første ord så du har noe å sammenlikne med
  let w = textArray[0];
  //Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  textArray.forEach(word => word.length > w.length ? w = word : w)
  return w;
};

console.log(longestWord());
