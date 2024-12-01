const curButton = document.querySelector(".button-calc");
const ariesSpan = document.querySelector(".aries-span");
const taurusSpan = document.querySelector(".taurus-span");
const geminiSpan = document.querySelector(".gemini-span");
const cancerSpan = document.querySelector(".cancer-span");
const leoSpan = document.querySelector(".leo-span");
const virgoSpan = document.querySelector(".virgo-span");
const libraSpan = document.querySelector(".libra-span");
const scorpioSpan = document.querySelector(".scorpio-span");
const satirgausSpan = document.querySelector(".satirgaus-span");
const capriscornSpan = document.querySelector(".capriscorn-span");
const aquariusSpan = document.querySelector(".aquarius-span");
const piscesSpan = document.querySelector(".pisces-span");

const planetSunInput = document.querySelector("#aspect-sun");
const planetMonInput = document.querySelector("#aspect-moon");
const planetMerkInput = document.querySelector("#aspect-merk");
const planetVenerInput = document.querySelector("#aspect-vener");
const planetMarsInput = document.querySelector("#aspect-mars");
const planetUpiterInput = document.querySelector("#aspect-yupiter");
const planetSaturnInput = document.querySelector("#aspect-saturn");
const planetUranInput = document.querySelector("#aspect-uran");
const planetNeptunInput = document.querySelector("#aspect-neptun");
const planetPlutonInput = document.querySelector("#aspect-pluton");

curButton.addEventListener("click", onClickButton);

let intervalAries = null;
let intervalTaurus = null;
let intervalGemini = null;
let intervalCancer = null;
let intervalLeo = null;
let intervalVirgo = null;
let intervalLibra = null;
let intervalScorpio = null;
let intervalSatirgaus = null;
let intervalCapriscorn = null;
let intervalAquarius = null;
let intervalPisces = null;

function setSpanValueByDefault() {
  ariesSpan.textContent = "0";
  taurusSpan.textContent = "0";
  geminiSpan.textContent = "0";
  cancerSpan.textContent = "0";
  leoSpan.textContent = "0";
  virgoSpan.textContent = "0";
  libraSpan.textContent = "0";
  scorpioSpan.textContent = "0";
  satirgausSpan.textContent = "0";
  capriscornSpan.textContent = "0";
  aquariusSpan.textContent = "0";
  piscesSpan.textContent = "0";
}

function getArrayOfZnak(arrayOfValue) {
  let countAries = 0;
  let countTaurus = 0;
  let countGemini = 0;
  let countCancer = 0;
  let countLeo = 0;
  let countVirgo = 0;
  let countLibra = 0;
  let countScorpio = 0;
  let countSattirgaus = 0;
  let countCapriscon = 0;
  let countAquarius = 0;
  let countPisces = 0;

  for (const curZnak of arrayOfValue) {
    if (curZnak === "Овен") {
      countAries += 1;
    } else if (curZnak === "Тілець") {
      countTaurus += 1;
    } else if (curZnak === "Близнюки") {
      countGemini += 1;
    } else if (curZnak === "Рак") {
      countCancer += 1;
    } else if (curZnak === "Лев") {
      countLeo += 1;
    } else if (curZnak === "Діва") {
      countVirgo += 1;
    } else if (curZnak === "Терези") {
      countLibra += 1;
    } else if (curZnak === "Скорпіон") {
      countScorpio += 1;
    } else if (curZnak === "Стрілець") {
      countSattirgaus += 1;
    } else if (curZnak === "Козеріг") {
      countCapriscon += 1;
    } else if (curZnak === "Водолій") {
      countAquarius += 1;
    } else if (curZnak === "Риби") {
      countPisces += 1;
    }
  }

  let arrayZnak = [];

  const objOne = {
    znZod: "Овен",
    count: countAries,
  };

  arrayZnak.push(objOne);

  const objTwo = {
    znZod: "Телец",
    count: countTaurus,
  };

  arrayZnak.push(objTwo);

  const objThree = {
    znZod: "Близнецы",
    count: countGemini,
  };

  arrayZnak.push(objThree);

  const objFour = {
    znZod: "Рак",
    count: countCancer,
  };

  arrayZnak.push(objFour);

  const objFive = {
    znZod: "Лев",
    count: countLeo,
  };

  arrayZnak.push(objFive);

  const objSix = {
    znZod: "Дева",
    count: countVirgo,
  };

  arrayZnak.push(objSix);

  const objSeven = {
    znZod: "Весы",
    count: countLibra,
  };

  arrayZnak.push(objSeven);

  const objEight = {
    znZod: "Скорпион",
    count: countScorpio,
  };

  arrayZnak.push(objEight);

  const objNine = {
    znZod: "Стрелец",
    count: countSattirgaus,
  };

  arrayZnak.push(objNine);

  const objTen = {
    znZod: "Козерог",
    count: countCapriscon,
  };

  arrayZnak.push(objTen);

  const objEleven = {
    znZod: "Водолей",
    count: countAquarius,
  };

  arrayZnak.push(objEleven);

  const objTwelve = {
    znZod: "Рибы",
    count: countPisces,
  };

  arrayZnak.push(objTwelve);

  return arrayZnak;
}

function getArrayOfValueZnak() {
  let arrayValue = [];
  arrayValue.push(planetSunInput.options[planetSunInput.value - 1].textContent);
  arrayValue.push(planetMonInput.options[planetMonInput.value - 1].textContent);
  arrayValue.push(
    planetMerkInput.options[planetMerkInput.value - 1].textContent
  );
  arrayValue.push(
    planetVenerInput.options[planetVenerInput.value - 1].textContent
  );
  arrayValue.push(
    planetMarsInput.options[planetMarsInput.value - 1].textContent
  );
  arrayValue.push(
    planetUpiterInput.options[planetUpiterInput.value - 1].textContent
  );
  arrayValue.push(
    planetSaturnInput.options[planetSaturnInput.value - 1].textContent
  );
  arrayValue.push(
    planetUranInput.options[planetUranInput.value - 1].textContent
  );
  arrayValue.push(
    planetNeptunInput.options[planetNeptunInput.value - 1].textContent
  );
  arrayValue.push(
    planetPlutonInput.options[planetPlutonInput.value - 1].textContent
  );
  return arrayValue;
}

function onClickButton() {
  setSpanValueByDefault();

  const arrayOfValue = getArrayOfValueZnak();

  const arrayOfZnak = getArrayOfZnak(arrayOfValue);

  clearInterval(intervalAries);
  intervalAries = setInterval(countInkAries, 1000, arrayOfZnak);
}

function increaseCountOfZnak(
  arrayOfZnak,
  znZodName,
  intervalOne,
  intervalTwo,
  otherFunction,
  spanElement
) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === znZodName;
  });

  if (findZnak.count === 0) {
    clearInterval(intervalOne);
    clearInterval(intervalTwo);
    intervalTwo = setInterval(otherFunction, 1000, arrayOfZnak);
  } else {
    let valueAries = parseInt(spanElement.textContent);
    valueAries += 1;
    if (valueAries === findZnak.count) {
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
      intervalTwo = setInterval(otherFunction, 1000, arrayOfZnak);
    }
    spanElement.textContent = String(valueAries);
  }
}

function countInkAries(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Овен";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalAries);
    clearInterval(intervalTaurus);
    intervalTaurus = setInterval(countInkTaurus, 1000, arrayOfZnak);
  } else {
    let valueAries = parseInt(ariesSpan.textContent);
    valueAries += 1;
    if (valueAries === findZnak.count) {
      clearInterval(intervalAries);
      clearInterval(intervalTaurus);
      intervalTaurus = setInterval(countInkTaurus, 1000, arrayOfZnak);
    }
    ariesSpan.textContent = String(valueAries);
  }
}

function countInkTaurus(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Телец";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalTaurus);
    clearInterval(intervalGemini);
    intervalGemini = setInterval(countIntGemini, 1000, arrayOfZnak);
  } else {
    let valueTaurus = parseInt(taurusSpan.textContent);
    valueTaurus += 1;
    if (valueTaurus === findZnak.count) {
      clearInterval(intervalTaurus);
      clearInterval(intervalGemini);
      intervalGemini = setInterval(countIntGemini, 1000, arrayOfZnak);
    }
    taurusSpan.textContent = String(valueTaurus);
  }
}

function countIntGemini(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Близнецы";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalGemini);
    clearInterval(intervalCancer);
    intervalCancer = setInterval(countIntCancer, 1000, arrayOfZnak);
  } else {
    let valueGemini = parseInt(geminiSpan.textContent);
    valueGemini += 1;
    if (valueGemini === findZnak.count) {
      clearInterval(intervalGemini);
      clearInterval(intervalCancer);
      intervalCancer = setInterval(countIntCancer, 1000, arrayOfZnak);
    }
    geminiSpan.textContent = String(valueGemini);
  }
}

function countIntCancer(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Рак";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalCancer);
    clearInterval(intervalLeo);
    intervalLeo = setInterval(countIntLeo, 1000, arrayOfZnak);
  } else {
    let valueCancer = parseInt(cancerSpan.textContent);
    valueCancer += 1;
    if (valueCancer === findZnak.count) {
      clearInterval(intervalCancer);
      clearInterval(intervalLeo);
      intervalLeo = setInterval(countIntLeo, 1000, arrayOfZnak);
    }
    cancerSpan.textContent = String(valueCancer);
  }
}

function countIntLeo(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Лев";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalLeo);
    clearInterval(intervalVirgo);
    intervalVirgo = setInterval(countIntVirgo, 1000, arrayOfZnak);
  } else {
    let valueLeo = parseInt(leoSpan.textContent);
    valueLeo += 1;
    if (valueLeo === findZnak.count) {
      clearInterval(intervalLeo);
      clearInterval(intervalVirgo);
      intervalVirgo = setInterval(countIntVirgo, 1000, arrayOfZnak);
    }
    leoSpan.textContent = String(valueLeo);
  }
}

function countIntVirgo(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Дева";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalVirgo);
    clearInterval(intervalLibra);
    intervalLibra = setInterval(countIntLibra, 1000, arrayOfZnak);
  } else {
    let valueVirgo = parseInt(virgoSpan.textContent);
    valueVirgo += 1;
    if (valueVirgo === findZnak.count) {
      clearInterval(intervalVirgo);
      clearInterval(intervalLibra);
      intervalLibra = setInterval(countIntLibra, 1000, arrayOfZnak);
    }
    virgoSpan.textContent = String(valueVirgo);
  }
}

function countIntLibra(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Весы";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalLibra);
    clearInterval(intervalScorpio);
    intervalScorpio = setInterval(countIntScorpio, 1000, arrayOfZnak);
  } else {
    let valueLibra = parseInt(libraSpan.textContent);
    valueLibra += 1;
    if (valueLibra === findZnak.count) {
      clearInterval(intervalLibra);
      clearInterval(intervalScorpio);
      intervalScorpio = setInterval(countIntScorpio, 1000, arrayOfZnak);
    }
    libraSpan.textContent = String(valueLibra);
  }
}

function countIntScorpio(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Скорпион";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalScorpio);
    clearInterval(intervalSatirgaus);
    intervalSatirgaus = setInterval(countIntSatirgaus, 1000, arrayOfZnak);
  } else {
    let valueScorpio = parseInt(scorpioSpan.textContent);
    valueScorpio += 1;
    if (valueScorpio === findZnak.count) {
      clearInterval(intervalScorpio);
      clearInterval(intervalSatirgaus);
      intervalSatirgaus = setInterval(countIntSatirgaus, 1000, arrayOfZnak);
    }
    scorpioSpan.textContent = String(valueScorpio);
  }
}

function countIntSatirgaus(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Стрелец";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalSatirgaus);
    clearInterval(intervalCapriscorn);
    intervalCapriscorn = setInterval(countIntCapriscorn, 1000, arrayOfZnak);
  } else {
    let valueSatirgaus = parseInt(satirgausSpan.textContent);
    valueSatirgaus += 1;
    if (valueSatirgaus === findZnak.count) {
      clearInterval(intervalSatirgaus);
      clearInterval(intervalCapriscorn);
      intervalCapriscorn = setInterval(countIntCapriscorn, 1000, arrayOfZnak);
    }
    satirgausSpan.textContent = String(valueSatirgaus);
  }
}

function countIntCapriscorn(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Козерог";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalCapriscorn);
    clearInterval(intervalAquarius);
    intervalAquarius = setInterval(countIntAquarius, 1000, arrayOfZnak);
  } else {
    let valueCapriscorn = parseInt(capriscornSpan.textContent);
    valueCapriscorn += 1;
    if (valueCapriscorn === findZnak.count) {
      clearInterval(intervalCapriscorn);
      clearInterval(intervalAquarius);
      intervalAquarius = setInterval(countIntAquarius, 1000, arrayOfZnak);
    }
    capriscornSpan.textContent = String(valueCapriscorn);
  }
}

function countIntAquarius(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Водолей";
  });

  if (findZnak.count === 0) {
    clearInterval(intervalAquarius);
    clearInterval(intervalPisces);
    intervalPisces = setInterval(countIntPisces, 1000, arrayOfZnak);
  } else {
    let valueAquarius = parseInt(aquariusSpan.textContent);
    valueAquarius += 1;
    if (valueAquarius === findZnak.count) {
      clearInterval(intervalAquarius);
      clearInterval(intervalPisces);
      intervalPisces = setInterval(countIntPisces, 1000, arrayOfZnak);
    }
    aquariusSpan.textContent = String(valueAquarius);
  }
}

function countIntPisces(arrayOfZnak) {
  const findZnak = arrayOfZnak.find(function (el) {
    return el.znZod === "Рибы";
  });
  if (findZnak.count === 0) {
    clearInterval(intervalPisces);
    return;
  } else {
    let valuePisces = parseInt(piscesSpan.textContent);
    valuePisces += 1;

    if (valuePisces === findZnak.count + 1) {
      clearInterval(intervalPisces);
      return;
    }

    piscesSpan.textContent = String(valuePisces);
  }
}
