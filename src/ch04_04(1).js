/*  
    @typedef Person

    @property {number} age
    @property {string} city
    @property {string | string[]} [pet]
 */

/* @type {Person[]} */
const people = [
    {
        age: 20,
        city: "서울",
        pet: ["cat", "dog"],
    },
    {
        age: 40,
        city: "부산",
    },
    {
        age: 31,
        city: "대구",
        pet: ["cat", "dog"],
    },
    {
        age: 36,
        city: "서울",
    },
    {
        age: 27,
        city: "부산",
        pet: "cat",
    },
    {
        age: 24,
        city: "서울",
        pet: "dog",
    },
];

/* 
    다음 문제들을 풀어봅시다.

    A. 30대 미만이 한 명이라도 사는 모든 도시
    B. 각 도시별로 개와 고양이를 키우는 사람의 수
 */

mySolutionA();
mySolutionB();
function mySolutionA() {
    let result = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].age < 30) {
            let push = true;
            for (let j = 0; j < result.length; j++) {
                if (result[j] == people[i].city) {
                    push = false;
                }
            }
            if (push) {
                result.push(people[i].city);
            }
        }
    }
    console.log(result);
}
// age, city, pet 각 도시별 개와 고양이를 키우는 사람의 수
function mySolutionB() {
    let result1 = [];
    for (let i = 0; i < people.length; i++) {
        result1.push(people[i].city);
    }
    result1 = new Set(result1);
    let result2 = [];
    for (let i of result1) {
        result2.push({ city: i, cat: 0, dog: 0 });
    }
    // console.log(result2);
    for (let i = 0; i < people.length; i++) {
        if (people[i].pet) {
            // console.log(Array.isArray(people[i].pet));
            if (Array.isArray(people[i].pet)) {
                for (let j of people[i].pet) {
                    if (j == "cat") {
                        if (people[i].city == "서울") {
                            result2[0].cat++;
                        } else if (people[i].city == "부산") {
                            result2[1].cat++;
                        } else {
                            result2[2].cat++;
                        }
                    } else if (j == "dog") {
                        if (people[i].city == "서울") {
                            result2[0].dog++;
                        } else if (people[i].city == "부산") {
                            result2[1].dog++;
                        } else {
                            result2[2].dog++;
                        }
                    }
                }
            } else {
                if (people[i].pet) {
                    for (let j of [people[i].pet]) {
                        if (j == "cat") {
                            if (people[i].city == "서울") {
                                result2[0].cat++;
                            } else if (people[i].city == "부산") {
                                result2[1].cat++;
                            } else {
                                result2[2].cat++;
                            }
                        } else if (j == "dog") {
                            if (people[i].city == "서울") {
                                result2[0].dog++;
                            } else if (people[i].city == "부산") {
                                result2[1].dog++;
                            } else {
                                result2[2].dog++;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result2);
}

function solveA() {
    /* @type {string[]} */
    const cities = [];

    for (const person of people) {
        if (person.age < 30) {
            if (!cities.find((city) => person.city === city)) {
                cities.push(person.city);
            }
        }
    }
    return cities;
}
console.log(`solveA`, solveA());

function solveAModern() {
    // const allCities = people
    //     .filter((person) => person.age < 30)
    //     .map((person) => person.city);
    const allCities = people
        .filter(({ age }) => age < 30)
        .map(({ city }) => city);
    const set = new Set(allCities);
    return Array.from(set);
}
console.log(`solveAModern`, solveAModern());
