//Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.//
function perinfo(nationality: string, age: number) {
  if (nationality === "pakistan") {
    if (age >= 18) {
      console.log(`Your are egligible to vote`);
    } else {
      console.log(`Your are not egligible to vote`);
    }
  }
}
perinfo("pakistan", 18);
