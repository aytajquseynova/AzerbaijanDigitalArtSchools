// 3) Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.
// '32, 31, 34, 36, 31'
// mətni verilmişdir;
// İçindəki vergülləri nöqtəli vergüllə əvəz edin.
let numbers = "32, 31,34, 36, 31 ";
console.log(numbers.replace(/,/g, ";"))