'use strict';

const prompt = require('prompt-sync')();

// === FUNGSI VALIDASI INPUT ===

function getNumberInput(message) {
  while (true) {
    const input = prompt(message);
    const num = Number(input);
    if (!isNaN(num) && input.trim() !== '') {
      return num;
    }
    console.log('Input tidak valid! Harap masukkan angka.');
  }
}

function getOperatorInput() {
  const validOperators = ['+', '-', '*', '/', '%', '**'];
  while (true) {
    const op = prompt('Masukkan operator (+, -, *, /, %, **): ');
    if (validOperators.includes(op.trim())) {
      return op.trim();
    }
    console.log('Operator tidak valid! Pilih salah satu: +, -, *, /, %, **');
  }
}

// === FUNGSI OPERASI MATEMATIKA ===

function penjumlahan(a, b) {
  return a + b;
}

function pengurangan(a, b) {
  return a - b;
}

function perkalian(a, b) {
  return a * b;
}

function pembagian(a, b) {
  if (b === 0) {
    return 'Error: Pembagian dengan nol tidak diperbolehkan!';
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    return 'Error: Modulo dengan nol tidak diperbolehkan!';
  }
  return a % b;
}

function pangkat(a, b) {
  return a ** b;
}

// === FUNGSI ANALISIS HASIL ===

function analisisHasil(hasil) {
  if (typeof hasil === 'string') {
    console.log(hasil);
    return;
  }

  const fallback = hasil ?? 'Hasil tidak tersedia (null/undefined)';

  if (fallback === 'Hasil tidak tersedia (null/undefined)') {
    console.log(fallback);
    return;
  }

  console.log(`Hasil: ${hasil}`);
  console.log(`Tipe data: ${typeof hasil}`);

  if (hasil > 0) {
    console.log('Nilai: Positif');
  } else if (hasil < 0) {
    console.log('Nilai: Negatif');
  } else {
    console.log('Nilai: Nol');
  }

  const isInteger = Number.isInteger(hasil);
  console.log(isInteger ? 'Jenis: Bilangan bulat (integer)' : 'Jenis: Bilangan desimal');

  if (isInteger) {
    console.log(hasil % 2 === 0 ? 'Sifat: Genap' : 'Sifat: Ganjil');
  }
}

// === LOGIC UTAMA ===

console.log('=== Kalkulator Interaktif ===');
console.log('Operator yang tersedia: +, -, *, /, %, **');
console.log('Ketik "no" saat ditanya untuk keluar.\n');

while (true) {
  const angka1 = getNumberInput('Masukkan angka pertama: ');
  const operator = getOperatorInput();
  const angka2 = getNumberInput('Masukkan angka kedua: ');

  let hasil;

  switch (operator) {
    case '+':
      hasil = penjumlahan(angka1, angka2);
      break;
    case '-':
      hasil = pengurangan(angka1, angka2);
      break;
    case '*':
      hasil = perkalian(angka1, angka2);
      break;
    case '/':
      hasil = pembagian(angka1, angka2);
      break;
    case '%':
      hasil = modulo(angka1, angka2);
      break;
    case '**':
      hasil = pangkat(angka1, angka2);
      break;
  }

  console.log('\n--- Analisis Hasil ---');
  console.log(`Operasi: ${angka1} ${operator} ${angka2}`);
  analisisHasil(hasil);
  console.log('---------------------\n');

  const lanjut = prompt('Apakah ingin menghitung lagi? (yes/no): ');
  if (lanjut.trim().toLowerCase() === 'no') {
    console.log('Terima kasih! Program selesai.');
    break;
  }
  console.log('');
}
