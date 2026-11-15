import fs from 'fs';
import path from 'path';

export type Fila = Record<string, string>;

export function leerCsv(nombreArchivo: string): Fila[] {
  const ruta = path.join(__dirname, '../data/csv', nombreArchivo);
  const lineas = fs.readFileSync(ruta, 'utf-8').split(/\r?\n/).filter((l) => l.trim() !== '');
  const cabecera = lineas[0].split(',');
  return lineas.slice(1).map((linea) => {
    const valores = linea.split(',');
    const fila: Fila = {};
    cabecera.forEach((columna, i) => {
      fila[columna] = (valores[i] ?? '').trim();
    });
    return fila;
  });
}

export function buscarCaso(nombreArchivo: string, caso: string): Fila {
  const fila = leerCsv(nombreArchivo).find((f) => f['caso'] === caso);
  if (!fila) {
    throw new Error(`No existe el caso "${caso}" en ${nombreArchivo}`);
  }
  return fila;
}