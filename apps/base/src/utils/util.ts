import { PUBFREE_HOST_ALIAS } from "@/constants";

export function getSubProjectUrl(subName: string) {
  console.log("subName -> :", subName);
  //   console.log("process.env.REACT_APP_MODE -> :", process.env.REACT_APP_MODE);
  //   // @ts-ignore
  //   const alias = PUBFREE_HOST_ALIAS[process.env.REACT_APP_MODE || "dev"];
  //   return `https://tiyan-pc-${subName}-${alias}.local-pf.jd.com`;

  if (process.env.REACT_APP_MODE === "pre") {
    if (subName === "mt") return "http://voice.jd.com:8082";
    if (subName === "ut") return "http://voice.jd.com:8081";
  }
}
