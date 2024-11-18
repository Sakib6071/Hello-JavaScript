function calculateMoney(numberOfTicket) {
  if (numberOfTicket < 0) {
    return "Number of ticket should be postive number or zero";
  } else {
    const ticketIncome = numberOfTicket * 120;
    const securityCost = 500;
    const totalStaff = 8;
    const staffLunchCost = 50 * totalStaff;
    const totalIncome = ticketIncome - (securityCost + staffLunchCost);
    return totalIncome;
  }
}
// console.log(calculateMoney(0));

function checkName(name) {
  if (typeof name !== "string") {
    return "Enter a name first not a number";
  } else {
    const lastCharOfName = name.length;
    console.log(lastCharOfName);
    if (
      name[lastCharOfName - 1] == "a" ||
      name[lastCharOfName - 1] == "e" ||
      name[lastCharOfName - 1] == "i" ||
      name[lastCharOfName - 1] == "o" ||
      name[lastCharOfName - 1] == "u" ||
      name[lastCharOfName - 1] == "w" ||
      name[lastCharOfName - 1] == "y" ||
      name[lastCharOfName - 1] == "A" ||
      name[lastCharOfName - 1] == "Y" ||
      name[lastCharOfName - 1] == "E" ||
      name[lastCharOfName - 1] == "I" ||
      name[lastCharOfName - 1] == "O" ||
      name[lastCharOfName - 1] == "U" ||
      name[lastCharOfName - 1] == "W"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}
// console.log(checkName('MezbahY'));

function deleteInvalids(arr) {
  if (!Array.isArray(arr)) {
    return "You must be pass an array";
  } else {
    const retArr = [];
    for (item of arr) {
      if (typeof item === "number") {
        retArr.push(item);
      }
    }
    return retArr;
  }
}
/* console.log(deleteInvalids([2,3,4,null,'sakib',7,undefined])); */

function password(obj) {
  if (typeof obj !== "object") {
    return "You must be return an object";
  } else {
    if (
      obj.hasOwnProperty("name") &&
      obj.hasOwnProperty("birthYear") &&
      obj.hasOwnProperty("siteName")
    ) {
      if (obj.birthYear / 1000 < 1 || obj.birthYear / 999 >= 10) {
        return "Provide 4 digit birtyear";
      } else {
        const pass = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
        return pass;
      }
    } else {
      return "Give a valid and full object as mentioned";
    }
  }
}
/* console.log(password({name:'Mezbah', birthYear:2024,siteName:'Programming-Hero'})); */

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) && typeof livingCost !== "number") {
    return "Give the valid arguments (array, number)";
  } else {
    let salaryAfterTax = 0;

    for (item of arr) {
      if (item >= 3000) {
        salaryAfterTax = salaryAfterTax + (item - item * 0.2);
      } else {
        salaryAfterTax = salaryAfterTax + item;
      }
    }
    if (salaryAfterTax - livingCost < 0) {
      return "Earn More";
    } else {
      return salaryAfterTax - livingCost;
    }
  }
}

console.log(monthlySavings([3000, 200], 100));
