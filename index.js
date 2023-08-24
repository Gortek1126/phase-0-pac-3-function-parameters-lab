introduction("Aki")

function introduction(name) {
    return(`Hi, my name is ${name}.`);
}

introductionWithLanguage("Aki", "Java")

function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguage("Aki", "Java")

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}