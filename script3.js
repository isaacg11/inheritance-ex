class Grandparents {
  getHairColor() {
    return 'brown';
  }

  getEyeColor() {
    return 'blue';
  }

  getVertical() {
    return '2 ft';
  }
}

class Parents extends Grandparents {
  getHairColor() {
    return super.getHairColor();
  }

  getEyeColor() {
    return super.getEyeColor();
  }

  getVertical() {
    return super.getVertical();
  }
}

class Children extends Parents {
  getHairColor() {
    return super.getHairColor();
  }

  getEyeColor() {
    return super.getEyeColor();
  }

  getVertical() {
    return super.getVertical();
  }
}

let grandparents = new Grandparents();
let parents = new Parents();
let children = new Children();

let arr = [grandparents.getVertical(), parents.getVertical(), children.getVertical()];

for(let i = 0; i < arr.length; i++) {
  if(i === 0) {
    console.log(`grandma can jump ${arr[i]}`);
  } else if(i === 1) {
    console.log(`mom can jump ${arr[i]}`);
  } else {
    console.log(`I can jump ${arr[i]}`);
  }
}
