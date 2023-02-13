//alert('Hello World');
//var my-variable; 
// console.log(124);
let name = 'Huy';
let age = 36;
let job = 'developer';
let city = 'Modesto';
let date = new Date();
let html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Date: ${date}</li>
    </ul>
`
document.body.innerHTML = html;