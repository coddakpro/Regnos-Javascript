let arr = [1, 2, 3, 4, "Ugo"];
let arr2 = new Array(1, 2, 3, "sam", "dani", "tope", "laju");
let arr3 =new Array(12);
console.log(arr3.length);   

Array.prototype.lol = function(){
for(let i; i < this.length; i++){
    this[i] = this[i].toUpperCase();
}
return this;
};

Array.prototype.arrToString = function(){
sentence = "";
for(let i = 0; i < this.length; i++){
sentence += this[i] + " ";
}
return sentence;
};


Array.prototype.lmao = "kikkikiki";

let result = arr2.lol();
result = arr2.lol();
result.push("lAJU");
result.pop();
result.shift();
result.unshift("TOPE");
let newResult = result.slice(0, 1, "Tope", "laju");
let badWords = ["fuck", "bastard", "bitch", "bitches", "motherfucker","fuck you"];
let sentence = "fucking love you son of a bitch";
let sentenceBreak = sentence.split(" ");
console.log(sentenceBreak);
for(let i = 0; i < sentenceBreak.length; i++){
if(badWords.includes(sentenceBreak[i])){
sentenceBreak[i] =
 sentenceBreak[i][0] +
  "*".repeat(sentenceBreak[i].length - 2) +
   sentenceBreak[i][sentenceBreak[i].length - 1];
  }
}
console.log(sentenceBreak.arrToString());
let array = [34, 4, 3, 6, 23, 47, 23, 60];
for(i in array){
    console.log(array[i]);
}
array.forEach((Number) => {
    console.log(Number ** 2);    
});
;

let classRoom = {
    cohort10:{
        name: "Jonathan",
        students: [
            {name: "Jonathan", score: 10},
            {name: "Jonathan", score: 10},
            {name: "Jonathan", score: 10},
    ]},
    cohort11:{
        name: "Jonathan",
        students: [
            {name: "Jonathan", score: 10},
            {name: "Jonathan", score: 10},
            {name: "Jonathan", score: 10},
        ]},
        cohort12:{
            name: "Jonathan",
            students: [
                {name: "Jonathan", score: 10},
                {name: "Jonathan", score: 10},
                {name: "Jonathan", score: 10},
            ]},
    }
classRoom.cohort10.students.forEach((student) => {
    console.log(student.name);
    console.log(student.score);
});
classRoom.cohort11.students.forEach((student) => {
    console.log(student.name);
    console.log(student.score);
});
classRoom.cohort12.students.forEach((student) => {      
    console.log(student.name);
    console.log(student.score);
});



