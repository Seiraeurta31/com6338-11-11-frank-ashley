const getPoemBtn = document.getElementById('get-poem')
const poemEl = document.getElementById('poem')
const poemURL = 'https://poetrydb.org/random,linecount/1;12/author,title,lines.json'

const getJSON = url => fetch(url).then(res => res.json())

const pipe = (...fns) => firstArg => fns.reduce((returnValue, fn) => fn(returnValue), firstArg)

const makeTag = tag => str => `<${tag}>${str}</${tag}>`

// complete this function
const makePoemHTML = (poem) =>{
  console.log(poem) 
  
  //Make Title Tag
  const titleTag = makeTag('h2')(poem[0].title)

  //Make Author Tag using pipe
  const makeEm = makeTag('em')
  const makeH3 = makeTag('h3')
  const makeAuthorTag = pipe(makeEm, makeH3)
  const authorTag = makeAuthorTag(`by ${poem[0].author}`)

  // poem.map()

  var finalString = `${titleTag} ${authorTag}`
  return finalString
 

}

// attach a click event to #get-poem
getPoemBtn.onclick = async function() {
  // renders the HTML string returned by makePoemHTML to #poem
  poemEl.innerHTML = makePoemHTML(await getJSON(poemURL))
}
