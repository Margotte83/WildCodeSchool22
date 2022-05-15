/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 * 
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */

// ↓ uncomment bellow lines and add your response!


export default function ({ students }: { students: Student[] }): Student[] {// la fonction est exportée et elle renvoie un tableau de student  (Student)
    students.sort((c, d) => (c.name < d.name ? -1 : 1))// cela permet de trier les élèves par ordre alphabétique
    .sort((a, b) => (a.age < b.age ? -1 : 1))// cela permet de trier les élèves par ordre de plus jeunes à plus vieux
console.log(students) // cela permet de voir le tableau trié
return students;
        
  }

// used interfaces, do not touch
export interface Student {// cela permet de créer un objet
    name: string;
    age: number;
    skills: string[];
}