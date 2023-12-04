import { v0, v1 } from './inputs.js';

export function getLines(str = '') {
  return str.split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

export function getCalibrationValue(str = '') {
  const digits = str.match(/\d/g);
  const first = digits[0];
  const last = digits[digits.length - 1];
  const num = parseInt(`${first}${last}`, 10);
  return num;
}

export function main(str = '') {
  const lines = getLines(str);
  const calibrationValues = lines.map(getCalibrationValue);
  const sum = calibrationValues.reduce((acc, val) => acc + val, 0);
  return { lines, calibrationValues, sum };
}

console.log('v0 =', main(v0).sum);
console.log('v1 =', main(v1).sum);
