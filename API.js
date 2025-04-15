// Fetch API--> (Application Programming Interface) The Fetch API provides an interface for fetching (sending/receiving) resources.

//it uses Request and Response objects.
// The fetch() method is used to fetch a resource(data).

// let promise= fetch(url,[options])

const URL = "https://cat-fact.herokuapp.com/facts" ;


const getFacts = async () => {
    console.log("getting data.....");
    let responce =  await fetch(URL);
    console.log(responce); //JSON format
    let data = await responce.json();
    console.log(data[0].text);
}
	