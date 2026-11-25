// Navegação da apresentação: teclado, clique, toque, hash na URL, tela cheia,
// cursor escondido, escala do canvas e ampliação de imagens.

const LARGURA = 1920;
const ALTURA = 1080;
const CURSOR_MS = 2000;

export function iniciarDeck(): void {
  const canvas = document.querySelector<HTMLElement>('.canvas');
  const slides = Array.from(document.querySelectorAll<HTMLElement>('.slide'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
  if (!canvas || slides.length === 0) return;

  const total = slides.length;
  let atual = 1;

  // ---------- Escala do canvas 16:9 ----------
  function escalar(): void {
    const escala = Math.min(window.innerWidth / LARGURA, window.innerHeight / ALTURA);
    canvas!.style.setProperty('--escala', String(escala));
  }
  window.addEventListener('resize', escalar);
  escalar();

  // ---------- Troca de slide ----------
  function lerHash(): number | null {
    const n = parseInt(window.location.hash.replace('#', ''), 10);
    return Number.isFinite(n) && n >= 1 && n <= total ? n : null;
  }

  function mostrar(n: number, atualizarHash = true): void {
    const alvo = Math.min(total, Math.max(1, n));
    atual = alvo;
    slides.forEach((s, i) => {
      const ativo = i + 1 === alvo;
      s.classList.toggle('ativo', ativo);
      s.setAttribute('aria-hidden', ativo ? 'false' : 'true');
      s.inert = !ativo;
    });
    if (atualizarHash && lerHash() !== alvo) {
      // pushState: o botão voltar do navegador volta ao slide anterior
      history.pushState(null, '', `#${alvo}`);
    }
  }

  const proximo = () => mostrar(atual + 1);
  const anterior = () => mostrar(atual - 1);

  window.addEventListener('popstate', () => mostrar(lerHash() ?? 1, false));
  window.addEventListener('hashchange', () => mostrar(lerHash() ?? 1, false));

  const inicial = lerHash();
  if (inicial === null) {
    history.replaceState(null, '', '#1');
    mostrar(1, false);
  } else {
    mostrar(inicial, false);
  }

  // ---------- Ampliação de imagens ----------
  const lightboxAberto = () => !!lightbox && !lightbox.hidden;

  function abrirLightbox(img: HTMLImageElement): void {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
  }
  function fecharLightbox(): void {
    if (!lightbox || !lightboxImg) return;
    lightbox.hidden = true;
    lightboxImg.removeAttribute('src');
  }
  lightbox?.addEventListener('click', (e) => {
    e.stopPropagation();
    fecharLightbox();
  });

  // ---------- Tela cheia ----------
  function alternarTelaCheia(): void {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void document.documentElement.requestFullscreen().catch(() => undefined);
    }
  }

  // ---------- Teclado ----------
  window.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;

    if (lightboxAberto()) {
      if (e.key === 'Escape') {
        e.preventDefault();
        fecharLightbox();
      } else if (e.key === 'f' || e.key === 'F') {
        alternarTelaCheia();
      } else if (
        ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', ' ', 'PageUp', 'PageDown', 'Enter', 'Backspace', 'Home', 'End'].includes(e.key)
      ) {
        // setas não trocam de slide com a imagem ampliada
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
      case 'PageDown':
      case 'Enter':
        e.preventDefault();
        proximo();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        anterior();
        break;
      case 'Home':
        e.preventDefault();
        mostrar(1);
        break;
      case 'End':
        e.preventDefault();
        mostrar(total);
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        alternarTelaCheia();
        break;
    }
  });

  // ---------- Clique: metade esquerda volta, metade direita avança ----------
  document.addEventListener('click', (e) => {
    if (lightboxAberto()) return;
    const alvo = e.target as HTMLElement | null;
    if (!alvo) return;

    const zoom = alvo.closest<HTMLImageElement>('img[data-zoom]');
    if (zoom) {
      abrirLightbox(zoom);
      return;
    }
    if (alvo.closest('a, button, [data-sem-navegacao]')) return;

    if (e.clientX >= window.innerWidth / 2) proximo();
    else anterior();
  });

  // ---------- Toque: deslizar para os lados ----------
  let toqueX = 0;
  let toqueY = 0;
  let houveDeslize = false;
  window.addEventListener(
    'touchstart',
    (e) => {
      const t = e.changedTouches[0];
      if (!t) return;
      toqueX = t.clientX;
      toqueY = t.clientY;
      houveDeslize = false;
    },
    { passive: true },
  );
  window.addEventListener(
    'touchend',
    (e) => {
      if (lightboxAberto()) return;
      const t = e.changedTouches[0];
      if (!t) return;
      const dx = t.clientX - toqueX;
      const dy = t.clientY - toqueY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        houveDeslize = true;
        if (dx < 0) proximo();
        else anterior();
      }
    },
    { passive: true },
  );
  // evita que o "click" sintético depois do deslize troque de slide de novo
  document.addEventListener(
    'click',
    (e) => {
      if (houveDeslize) {
        houveDeslize = false;
        e.stopImmediatePropagation();
      }
    },
    { capture: true },
  );

  // ---------- Cursor some depois de 2 s parado ----------
  let timer: number | undefined;
  function mostrarCursor(): void {
    document.documentElement.classList.remove('esconder-cursor');
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      document.documentElement.classList.add('esconder-cursor');
    }, CURSOR_MS);
  }
  window.addEventListener('mousemove', mostrarCursor);
  mostrarCursor();
}
