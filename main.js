/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto
DATI:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg*/

// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

//  MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

let cont = document.getElementById('container')

const team = [
    {name : 'Wayne Barnett',
    role : 'Founder & CEO',
    image : cont.innerHTML += '<img src="img/wayne-barnett-founder-ceo.jpg"/>'
    }, 
    {name : 'Angela Caroll',
    role : 'Chief Editor',
    image : cont.innerHTML += '<img src="img/angela-caroll-chief-editor.jpg"/>'
    },
    {name : 'Walter Gordon',
    role : 'Office Manager',
    image : cont.innerHTML += '<img src="img/walter-gordon-office-manager.jpg"/>'
    }, 
    {name : 'Angela Lopez',
    role : 'Social Media Manager',
    image : cont.innerHTML +='<img src="img/angela-lopez-social-media-manager.jpg"/>'
    },
    {name : 'Scott Estrada',
    role : 'Developer',
    image :cont.innerHTML += '<img src="img/scott-estrada-developer.jpg"/>'
    }, 
    {name : 'Barbara Ramos',
    role : 'Graphic Designer',
    image : cont.innerHTML += '<img src="img/barbara-ramos-graphic-designer.jpg"/>'
    }

];



for(let i = 0 ; i < team.length ; i++){

    for ( let key in team[i]){
         console.log(team[i][key])
         container.innerHTML = team[i][key] 
     }

}


