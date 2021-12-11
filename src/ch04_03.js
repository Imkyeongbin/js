const user = {
  nickname: "JH",
  age: 22,
  email: "jh12@example.com",
};

var { baby, ...personalData } = user;
console.log(baby); // undefined
console.log(personalData); // user 전체

var { nickname, ...personalData } = user;
console.log(nickname);
console.log(personalData);

const ary = [1, 2, 3, 4, 5];

const [head, ...rest] = ary;
console.log(head, rest); // 1 [ 2, 3, 4, 5 ]
console.log(head, ...rest); // 1 2 3 4 5

var personalData = {
  email: "abc@def.com",
  password: "****",
};
var publicData = {
  nickname: "foo",
};

var overrides = {
  email: "fff@fff.com",
};

var user2 = {
  ...personalData,
  ...publicData,
  ...overrides, // 순서에 따라 덮어씌워짐
};

console.log(user2);

var shouldOverride = false;

var user3 = {
  ...{
    email: "abc@def.com",
    password: "****",
  },
  ...{
    nickname: "foo",
  },
  ...(shouldOverride
    ? {
        email: "fff@fff.com",
      }
    : null),
};

console.log(user3);

function foo(head, ...rest) {
  console.log(head); // 1
  console.log(rest); // [ 2, 3, 4 ]
}

foo(1, 2, 3, 4);
