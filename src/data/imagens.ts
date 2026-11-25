import type { ImageMetadata } from 'astro';

// Todas as imagens de src/assets/img/, indexadas pelo caminho relativo (ex.: "db/Modelo-logico.png").
// A pasta ref-design/ (referências antigas) fica de fora.
const arquivos = import.meta.glob<{ default: ImageMetadata }>(
  ['/src/assets/img/**/*.{png,jpg,jpeg,svg}', '!/src/assets/img/ref-design/**'],
  { eager: true },
);

const PREFIXO = '/src/assets/img/';

export function imagem(caminho: string): ImageMetadata {
  const modulo = arquivos[PREFIXO + caminho];
  if (!modulo) {
    throw new Error(`Imagem não encontrada: ${caminho}`);
  }
  return modulo.default;
}
