// Real intrinsic dimensions and blur-up placeholders for every image that
// ships. Most entries are carried over verbatim from Izanolihle Roads' own
// generated manifest — same source photos, genuinely shared equipment — see
// lib/plant.ts. Only "plant/paver" is unique to this site; re-run
// scripts/prep-assets.js after adding anything new to _source/.

export type Img = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export const IMAGES = {
  "plant/paver": {
    "src": "/images/plant/paver.webp",
    "width": 1280,
    "height": 960,
    "blurDataURL": "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoMAAkAA4BaJYwCdAEXftii9XoAAPy0LIhOT/UZ9zWsUnbzrmqCwlkzXpZEBRk5Gs5t1VfA98htfoSgAAA="
  },
  "plant/excavator": {
    "src": "/images/plant/excavator.webp",
    "width": 1439,
    "height": 1081,
    "blurDataURL": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoMAAkAA4BaJbACdAD0HqtoAPxf/a2PQ5neONYI8EIU5VUil3AsWTHL3mI98tmcJQrjc+wzhu4yE+6++aqWmt+R4AA="
  },
  "plant/excavator-feeler": {
    "src": "/images/plant/excavator-feeler.webp",
    "width": 1280,
    "height": 960,
    "blurDataURL": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQAQCdASoMAAkAA4BaJbACdADPX3cZoAD+QQTGUXcWoi5mRQ8c9nA7h5X49nPr5KSgMKmfhZRdVgn2BVAvd5m8EMaDtzGOkZqDwdrWGf6DLOUAAAA="
  },
  "plant/excavator-breaker": {
    "src": "/images/plant/excavator-breaker.webp",
    "width": 960,
    "height": 1280,
    "blurDataURL": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoMABAAA4BaJZQCdAD0r85G0AAA/tcbkWwu+oUs8FIzffh4tzmKAzbqYSdZPNGzw37GwzSsgaFg3gYgyQrCrAAA"
  },
  "plant/loader-l550": {
    "src": "/images/plant/loader-l550.webp",
    "width": 1439,
    "height": 763,
    "blurDataURL": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoMAAYAA4BaJQBOgCLKC+/8WuEAAMxVRV40QglJguju9kNLB3bq8kSoM0w0Z+4RF1IAA2TIcES260yYJRowCtq52AA="
  },
  "plant/skidsteer-bobcat": {
    "src": "/images/plant/skidsteer-bobcat.webp",
    "width": 800,
    "height": 1280,
    "blurDataURL": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAABwAwCdASoMABMAPu1iqU2ppaOiMAgBMB2JQBfJBC4J3OaLuUgA/vASfXG3LIzPHlpjF1c7bG8XxUgFPV/X1W9ixwfZwTF4roNLMM0xRVA6AAAA"
  },
  "plant/grader-cat": {
    "src": "/images/plant/grader-cat.webp",
    "width": 900,
    "height": 1600,
    "blurDataURL": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAABQBACdASoMABUAPu1iqU2ppaOiMAgBMB2JZgCw7CPTeRETcGBb2FhTfzgAAPhFeHnLYckJBQNoQzo2XNdJzXKQvfeU7TWuyAO6+dXqPIwyVRYiioUYx0ZRA2kPEDQNDnMvUV4QOhzb00V4pCkeDoFjYUdpG8x4AAA="
  },
  "plant/roller-cw34": {
    "src": "/images/plant/roller-cw34.webp",
    "width": 960,
    "height": 1280,
    "blurDataURL": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAwAgCdASoMABAAA4BaJbACdAYwnbVui2ZO4AD+3+tCobeJnyAv5aOGnckDuEsel8pjXnT0bdebGRut5VMB8wFMyR+ZGa0k557hRbe0OjBUOOBw8yoRc2nPceBfGEei66/cpbwA"
  },
  "plant/roller-cb7": {
    "src": "/images/plant/roller-cb7.webp",
    "width": 1280,
    "height": 960,
    "blurDataURL": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADwAQCdASoMAAkAA4BaJZgCdEf/gYlBSAAA98X6xZ8Xn7adoVq66T2mQgYCt7MR9EcJsZMA6cUWyQvYXphtfwu/ClWj326j2WZN/BgA"
  },
  "plant/roller-vibratory": {
    "src": "/images/plant/roller-vibratory.webp",
    "width": 1040,
    "height": 780,
    "blurDataURL": "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoMAAkAA4BaJQBOgB6Mt+4oAPlCuPFGzoePZbRotRJaWXxlurS9sv88Zde87HO3s07ET8b1JaQAAA=="
  },
  "plant/tanker-water": {
    "src": "/images/plant/tanker-water.webp",
    "width": 969,
    "height": 1280,
    "blurDataURL": "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAACQAgCdASoMABAAA4BaJbACdEf/i10ra0z0db9oMAD9707EJUcGxblXG8l1/C3qEeoX1TbxxL5uBpr1CG1x+s2qCywrzp4wM2l8GFRzmdBaazIwyx81R6WCD0d4D3D7K1MGbekCr0+/VB+CvAYt7L6zkmV5sL/Ce81TfV7X/QAAAA=="
  }
} as const satisfies Record<string, Img>;
