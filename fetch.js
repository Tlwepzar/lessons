const output2  = document.getElementById('output2');
const emails  = document.getElementById('emails');
emails.addEventListener('click',myJSON);

function myJSON(){
    console.log('user clicked');
    const url = 'https://randomuser.me/api/?results=10';
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        let html ='';
        data.results.forEach(function(person) {
            console.log(person);
            html += '<div>' + person.login.username + ' ---- ' +  person.email + '</div>';
        });
        output2.innerHTML =html;
        //console.log(data);
        //console.log(data.results[0].dob.date);
    }).catch(function(e){
        //console.log(e);
    })
}