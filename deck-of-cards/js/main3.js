const drawCard = () => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data.cards[0])
       document.querySelector("h2").innerText = `${data.cards[0].value} OF ${data.cards[0].suit}`
       document.querySelector("img").src = data.cards[0].image
    })
    .catch(err => {
        console.log('ERROR')
    });
}

document.querySelector("button").addEventListener('click', drawCard);