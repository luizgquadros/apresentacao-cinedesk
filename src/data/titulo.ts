// Os dois-pontos do fim do título não aparecem no título grande do slide.
export function semDoisPontos(titulo: string): string {
  return titulo.replace(/:\s*$/, '');
}
