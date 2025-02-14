console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')
	// 1. create a section tag with an id of middle-earth
		const newSection = document.createElement('section');
		newSection.id = 'middle-earth';
		console.log(newSection);

	// 2. use a for loop to iterate over the lands array that does the following:
		lands.forEach((land) => {
			//2a. creates an article tag (there should be one for each land when the loop is done)
			let theArticle = document.createElement('article');
			//2b. gives each land article an `id` tag of the corresponding land name
			theArticle.id = land;
			//2c. includes an h1 with the name of the land inside each land article
			let headerOne = document.createElement('h1', land);
			headerOne.innerText=land;
			//2d. appends each land to the middle-earth section
			newSection.append(theArticle);
			theArticle.append(headerOne);
		})
		document.querySelector('body').appendChild(newSection);
	// 3. append the section to the body of the DOM.
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	
	// display an `unordered list` of hobbits in the shire
	const unorderedList = document.createElement('ul');
	// give each hobbit a class of `hobbit`
	let a = 0;
	hobbits.forEach((hobbit) => {
		const theLI = document.createElement('li');
		theLI.className = 'hobbit';
		theLI.innerText = hobbits[a];
		a += 1;
		unorderedList.appendChild(theLI);
	});
	document.getElementById('The-Shire').appendChild(unorderedList);
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe');
	// create a div with an id of `'the-ring'`
		const newDiv = document.createElement('div');
		newDiv.id = 'the-ring';
	// give the div a class of `'magic-imbued-jewelry'`
		newDiv.className = 'magic-imbued-jewelry';
	// add the ring as a child of `Frodo`
		const mysticalFrodo = document.getElementsByClassName('hobbit')[0];
		mysticalFrodo.appendChild(newDiv);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const bList = document.createElement('ul');
	let b = 0;
	baddies.forEach(() => {
		const baddyLI = document.createElement('li');
		baddyLI.className = 'baddy';
		baddyLI.innerText = baddies[b];
		b += 1;
		bList.append(baddyLI);
	});
	document.getElementById('Mordor').appendChild(bList);
	// give each of the baddies a class of "baddy"
	
	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const theAside = document.createElement('aside');
	// put an `unordered list` of the `'buddies'` in the aside
	const buddyUL = document.createElement('ul');
	theAside.append(buddyUL);
    let c = 0;
    buddies.forEach(() => {
        const buddy = document.createElement('li');
        buddy.innerText = buddies[c];
        c += 1;
		theAside.append(buddy);
        buddyUL.appendChild(buddy);
    });
    // insert your aside as a child element of `rivendell`
    document.getElementById('Rivendell').appendChild(theAside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	const newListHobits = document.getElementById('The-Shire').childNodes[1];
	document.getElementById('Rivendell').appendChild(newListHobits);
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	document.getElementById('Rivendell').childNodes[1].childNodes[0].childNodes[3].innerText="Aragorn";
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const theFD = document.createElement('div');
	theFD.id = 'the-fellowship';
	const theFUL = document.createElement('ul');
	const theFLI = document.getElementById('Rivendell').querySelectorAll('li');
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	for(let i = 0; i < (theFLI.length); i++){
		alert(theFLI[i].innerText + ' have joined your party');
		theFUL.append(theFLI[i]);
	}
	theFD.append(theFUL);
	document.getElementById('Rivendell').append(theFD);
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const theBalrog = document.getElementById('the-fellowship').querySelectorAll('li');
	theBalrog[0].innerText='Gandalf the White';
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The horn of gondor has been blown!');
	// Boromir's been killed by the Uruk-hai!
	alert(`Boromir's been killed by the Uruk-hai!`);
	const boromirDied = document.getElementById('the-fellowship').querySelectorAll('li');
	boromirDied[4].remove();
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const movinOn = document.getElementById('the-fellowship').querySelectorAll('li');
	const frodo = movinOn[4];
	const sam = movinOn[5];
	document.getElementById('Mordor').querySelector('ul').append(frodo);
	document.getElementById('Mordor').querySelector('ul').append(sam);
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div');
	mountDoom.id = 'mount-doom';
	document.getElementById('Mordor').appendChild(mountDoom);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollumDiv = document.createElement('div');
	gollumDiv.id = "gollum";
	document.getElementById('Mordor').appendChild(gollumDiv);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const thePrecious = document.getElementById('the-ring');
	const gollumTakes = document.getElementById('gollum');
	gollumTakes.append(thePrecious);
	// Move Gollum into Mount Doom
	const theMountDoom = document.getElementById('mount-doom');
	theMountDoom.append(gollumTakes);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	document.getElementById('the-ring').remove();
	document.getElementById('gollum').remove();
	// Move all the `hobbits` back to `the shire`
	let anotherMove = document.querySelectorAll('hobbit');
	const shireLocation = document.getElementById('The-Shire');
	const newULShire = document.createElement('ul');
	newULShire.id = "hobbits";
	shireLocation.append(newULShire);
	newULShire.appendChild(document.getElementsByClassName('hobbit')[2]);
	newULShire.appendChild(document.getElementsByClassName('hobbit')[3]);
	newULShire.appendChild(document.getElementsByClassName('hobbit')[2]);
	newULShire.appendChild(document.getElementsByClassName('hobbit')[3]);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
