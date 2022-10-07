/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(-1)).not.toBe("1 B")
  expect(convertBytesToHuman("string")).toBe(false)
  expect(convertBytesToHuman("23")).toBe(false)
  expect(convertBytesToHuman("23")).not.toBe("23 B")
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe("5 B")
  expect(convertBytesToHuman(1433)).toBe("1.4 KB")
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
  expect(convertBytesToHuman(456743645367452)).toBe("415.41 TB")
});

test('Возвращает корректное значение для границ', () => {
  expect(convertBytesToHuman(0)).toBe("0 B")
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  expect(convertBytesToHuman(1048576)).toBe("1 MB")
  expect(convertBytesToHuman(1073741824)).toBe("1 GB")
  expect(convertBytesToHuman(1099511627776)).toBe("1 TB")
});
