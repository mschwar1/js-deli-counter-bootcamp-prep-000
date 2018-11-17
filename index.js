var deliLine = [] // Deli opens! No customers yet.

function takeANumber(deliLine, newPerson) {
  deliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

function currentLine(deliLine) {
  for (var i = deliLine.length; i >= 0; i++)
  if (i === 0) {
    return "The line is currently empty."
  }
  else if (i > 0) {
    for (var lineCount = 0; lineCount < i; lineCount++)
    return `The line is currently: ${lineCount+1}. ${deliLine[lineCount]},`
  }
}
