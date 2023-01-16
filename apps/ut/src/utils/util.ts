import xss from "xss";
import emojiJson from "@/images/emoji/emojis.json";
const {
  data: { list: emojiList },
} = emojiJson;
export function xssFilter(str: string) {
  const safeHtml = xss(str, {
    whiteList: {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: ["autoplay", "controls", "loop", "preload", "src"],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      ins: ["datetime"],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "loop",
        "preload",
        "src",
        "height",
        "width",
      ],
      html: [],
      head: [],
      body: [],
    },
    stripIgnoreTag: false,
    stripIgnoreTagBody: ["script", "iframe"],
    onIgnoreTagAttr: (tag, name, value) => {
      if (name === "style") {
        // 通过内置的escapeAttrValue函数来对属性值进行转义
        // @ts-ignore
        return name + '="' + xss.escapeAttrValue(value) + '"';
      }
    },
  });
  return safeHtml;
}
const emojiMap = new Map();
emojiList.forEach((emoji) => emojiMap.set(emoji.code, emoji));

export function emojiFilter(str: string) {
  return str.replace(/#E-s\d+/g, (emo) => {
    if (emojiMap.has(emo)) {
      const emoji = emojiMap.get(emo);
      return `<img src="${emoji.url2x}" alt="${
        emoji.desc && emoji.desc.zh_CN
      }" style="width:1.5em;height:1.5em;"/>`;
    } else {
      return emo;
    }
  });
}
