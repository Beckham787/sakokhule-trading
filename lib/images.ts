// Real intrinsic dimensions and blur-up placeholders for every image that
// ships. Generated from the client's own supplied originals in
// `_source/supplied-2026-09-06/` — see `scripts/prep-assets.js`.
//
// Everything previously carried over from Izanolihle Roads' processed set was
// retired on 2026-09-06, when Lindokuhle supplied Sakokhule's own logo and
// photographs. No picture on this site is another company's any more.

export type Img = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export const IMAGES = {
  "fleet/tipper": {
    "src": "/images/fleet/tipper.webp",
    "width": 1600,
    "height": 1200,
    "blurDataURL": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoMAAkAA4BaJZwAArJpU0hz0oAA/vM5aFYN0e85jNhygD7NB+HZVO7ihQwAnnjJf7aLvC5aj3NDzPdpYynGQ218r1GgNHigAAA="
  },
  "fleet/grader": {
    "src": "/images/fleet/grader.webp",
    "width": 1242,
    "height": 930,
    "blurDataURL": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQAgCdASoMAAkAA4BaJbACdH8AE7dTNf3AAMyju8HJyn0ktC0rwq9npk91Hcqe7yFruocTQbarpUjgLwMR5TESBVzqP09WbYXCbeJ1hXnTlDMdLu/AAAAA"
  },
  "fleet/tlb": {
    "src": "/images/fleet/tlb.webp",
    "width": 926,
    "height": 1600,
    "blurDataURL": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAACQAwCdASoMABUAPu1iqU2ppaQiMAgBMB2JZQCsABt1gLWxtyGAAM1vSIw64aeMRCPld44wQZmHAOCF2XOoX9fxc60kX8aX+MNa/lcB90M6D7sGJylwS+4AAAA="
  },
  "fleet/water-tanker": {
    "src": "/images/fleet/water-tanker.webp",
    "width": 1242,
    "height": 1392,
    "blurDataURL": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoMAA0AA4BaJYwCdAECpXfCIAD+5/dUhxa32wzXuPw1hX/vENwdTCdcd4AOIC2jCskD7RpURTYM0Q+tateOFrdACgAhzjN54c4AAA=="
  },
  "works/load-and-haul": {
    "src": "/images/works/load-and-haul.webp",
    "width": 594,
    "height": 451,
    "blurDataURL": "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoMAAkAA4BaJZQCdADZiZbAAM143viOISRnMauYuai89KIM65xg+rtQHMIU9N5lIIB+/lYGKGAAAA=="
  },

  /* The homepage's scroll sequence — four photographs Lindokuhle sent
     already colour-enhanced, in the order the sequence tells them: arrival
     at the stockpile, the work itself, a machine that has done the work,
     the newest one arriving. Not part of the fleet or works catalogues. */
  "story/mine-yard": {
    "src": "/images/story/mine-yard.webp",
    "width": 1280,
    "height": 972,
    "blurDataURL": "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoMAAkAA4BaJZQCdADZuj5YAADNeN74jeNoC1kVm7XRazHeOXubp589BtntDvBNDMRfEINUR5wlIAAA"
  },
  "story/grading": {
    "src": "/images/story/grading.webp",
    "width": 740,
    "height": 1280,
    "blurDataURL": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAACQAwCdASoMABUAPu1iqU2ppaOiMAgBMB2JZQAAXu4KwNpgQf/gAP48ifaFF8xDm1EwORogrY5FkjjrBmznmFC50trP9/9Z5hb/rjuiFfEastUnGsxJf6Yt5jiAAAAA"
  },
  "story/veteran": {
    "src": "/images/story/veteran.webp",
    "width": 957,
    "height": 1280,
    "blurDataURL": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAwAgCdASoMABAAA4BaJbACdAD7CCQXeVr0AADyc+jVu21LUb/fl3X3zxEsqW/GznzEtlNfrTy8gvKB+hMw7DNOGgE1SzckW6m478Bke07waxFZCZ+dTNYAAAA="
  },
  "story/delivery": {
    "src": "/images/story/delivery.webp",
    "width": 1280,
    "height": 816,
    "blurDataURL": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAABwAgCdASoMAAgAA4BaJaACdGuAt/8DHh+zsB5wAP3/hYTDoRrP0maOlprkEjSgX2bu6RkstnyTubmRKfPBf5MHXdOXJuoptGjGTkAA"
  },
} as const satisfies Record<string, Img>;
