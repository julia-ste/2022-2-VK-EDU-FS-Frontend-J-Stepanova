/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

function round(value, digits) {
  const factor = Math.pow(10, digits)
  return Math.round(value * factor) / factor
}

const isNum = value => typeof(value) === 'number' || value instanceof Number

export default function convertBytesToHuman(bytes) {
  if (!isNum(bytes)) return false
  if (bytes < 0) return false

  const UNIT_NAMES = ["B", "KB", "MB", "GB", "TB"]
  const UNIT_SIZE = 1024

  let unitName
  for (unitName of UNIT_NAMES) {
    if (bytes < UNIT_SIZE) break
    bytes /= UNIT_SIZE;
  }

  return `${round(bytes, 2)} ${unitName}`
}
