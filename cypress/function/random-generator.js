export function generate_random_string(string_length) {
    let random_string = '';
    let random_ascii;
    for (let i = 0; i < string_length; i++) {
      random_ascii = Math.floor(Math.random() * 25 + 97);
      random_string += String.fromCharCode(random_ascii);
    }
    return random_string;
}


export function generate_random_name() {

const firstname = ["Daffa", "Ridho", "Zahid", "Bagas", "Fathuddin", "Answar"] 
const  lastname = ["Hilmy", "Fadhlurrohman", "Arfiansyah", "Ashari", 
"Amir", "Yusuf", "Al-Muhasibi", "Anugerah", "Aufa", "Nusantara"]

 return firstname[Math.floor(Math.random() * firstname.length)] + " " + lastname[Math.floor(Math.random() * lastname.length)];
}



