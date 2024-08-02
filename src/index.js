module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  const toTwenty = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen'
  ]

  const dozens =[
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ]

  function transform (number) {
    if (number < 20) {
        return toTwenty[number];
      } else if (number < 100) {
        return dozens[Math.floor(number / 10)] + (number % 10 === 0 ? '' : ' ' + toTwenty[number % 10]);
      } else if (number < 1000) {
        return toTwenty[Math.floor(number / 100)] + ' hundred' + (number % 100 === 0 ? '' : ' ' + transform(number % 100));
      }
  }
  
  return transform(number);
}
