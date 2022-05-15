/**
 * In this challenge, you have to add a list of skills to each group (based on 
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 * 
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
    return groups.map(group => {// groups.map est une fonction qui prend en paramètre un groupe et qui renvoie un groupe
        // group est un objet qui contient les propriétés name et students
        const skills: string[] = [];// on crée une variable skills qui est un tableau de string
        group.students.forEach(student => {// on parcours chaque élément du tableau group.students
            student.skills.forEach(skill => {// on parcours chaque élément du tableau student.skills
                if (!skills.includes(skill)) {// si la variable skills ne contient pas la valeur skill
                    skills.push(skill);// on ajoute la valeur skill dans le tableau skills
                }
            }); 
        });
        skills.sort();

        return {
            ...group,
            skills
        };
    });
}


// used interfaces, do not touch
interface Student {// un objet qui contient les propriétés name et skills
    name: string;
    age: number;
    skills: string[];
}

export interface Group {// un objet qui contient les propriétés name et students
    students: Student[];
    name: string;
}

export interface GroupWithSills extends Group {// un objet qui contient les propriétés name et students et une propriété skills
    skills: string[];
}