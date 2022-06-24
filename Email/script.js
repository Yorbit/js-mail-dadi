const userMail = prompt('INSERISCI LA TUA EMAIL PER ACCEDERE');

let found = false;
let messageAccess = ('Spiacenti! Riprova')

const emailAccess = ["simone@gmail.it", "rebecca@gmail.it", "andrea@gmail.it", "lorenzo@gmail.it"]

for (let index = 0; index < emailAccess.length; index++) {

    if (userMail == emailAccess[index]) {

        found = true;

    }
}

