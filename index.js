import data from "./data.json" assert { type: 'json' };
const {DataProvider:dataProvider } = data



//Question 1 => Write a JS expression that returns the number of DIRECTORS
const numberOfDirectors = dataProvider.global.positions.filter(position => position.type === "DIRECTOR").length;
console.log(numberOfDirectors);


//Question 2 => Write a JS expression that returns the number of SHAREHOLDERS.
const numberOfShareholders = dataProvider.global.positions.filter(position => position.type === "SHAREHOLDER").length;
console.log(numberOfShareholders);

//Question 3 => Write a JS expression that lists the full names of all position holders
const positionHoldersNames = dataProvider.global.positions.map(position => position.profile.name);
console.log(positionHoldersNames);

//Question 4 
const productB = dataProvider.products.find(product => product.name === "Product B");
const productA = dataProvider.products.find(product => product.name === "Product A");

//4A => Is Product B hardware or software?
console.log("Product B category:", productB.category); // Hardware
//4B =>  Does Product A have a price of “100”?
console.log("Product A price === 100:", productA.price === 100); // true
//4C =>  Is the launch date of Product B the 6th January 2010?
console.log("Product B launch date is 6th Jan 2010:", productB.launchDate === "2010-06-01T00:00:00.000Z"); // true
//we could also use a helper function to get a data from just giving day,month and year as asked in question's format)






//Question 5 => Write a JS expression that prints the effective date formatted in YYYY-MMM-DD format.
const effectiveDate = new Date(dataProvider.effectiveDate);
const formattedEffectiveDate = `${effectiveDate.getFullYear()}-${effectiveDate.toLocaleString('default', { month: 'short' })}-${effectiveDate.getDate()}`;
console.log(formattedEffectiveDate);


//Question 6 => What is the JSON address in object notation that stores Robert Johnson’s email address.
const robertJohnsonEmail = dataProvider.global.positions.find(position => position.profile.name === "Robert Johnson").profile.email;
console.log(robertJohnsonEmail);

//Question 7 => Write a JS expression that returns an array of all unique email domains of the position holders.
const positionHolderEmailDomains = [...new Set(dataProvider.global.positions.map(position => position.profile.email.split('@')[1]))];
console.log(positionHolderEmailDomains);


//Question 8 => Write a JS expression ... containing the names and email addresses of all DIRECTORS.
const directors = dataProvider.global.positions.filter(position => position.type === "DIRECTOR");
const directorInfo = directors.map(director => ({ name: director.profile.name, email: director.profile.email }));
console.log(directorInfo);


//Question 9 =>  Write a JS function that takes an email domain as a parameter ... to the specified domain
function getPositionHoldersByDomain(emailDomain) {
  return dataProvider.global.positions.filter(position => position.profile.email.endsWith(emailDomain))
  .map(position => ({ name: position.profile.name, email: position.profile.email, _id: position._id }));
}

const positionHoldersWithDomain = getPositionHoldersByDomain("@example.com");
console.log(positionHoldersWithDomain);



//Question 10 => Write a JavaScript function that returns ...  to the number of shareholders.
function getTopShareholdersWithDomain(emailDomain, count) {
    const shareholdings = dataProvider.shareholdings;
    const shareholdingPositions = dataProvider.global.positions.filter(position =>
      position.type === "SHAREHOLDER" && position.profile.email.endsWith(emailDomain)
    );
  
    const shareholderInfo = shareholdingPositions.map((position, index) => ({
      name: position.profile.name,
      email: position.profile.email,
      shares: shareholdings[index]
    }));
  
    const topShareholders = shareholderInfo.sort((a, b) => b.shares - a.shares).slice(0, count);
    return topShareholders;
  }
  
  const topShareholders = getTopShareholdersWithDomain("@example.com", 3);
  console.log(topShareholders);
  




