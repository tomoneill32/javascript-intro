const verifyFirstLetter = (firstletters, candy) => {
  if (candy.name.substring(0, firstletters.length ) === firstletters) {
    return true;
  } else {
    return false;
  }
}

module.exports = verifyFirstLetter;