import React, { useEffect, useState } from "react";
import imageError from "@/images/image-error.svg";
import { Image } from "antd";
import Style from "./index.module.scss";
const { imageWrapper } = Style;
interface IProps {
  list: string[]; // 图片url
  showMax?: number; // 非预览状态下展示几张图，不传则全部展示
  size?: number; // 图片size，默认120
}

const ImageView: React.FC<IProps> = (props: IProps) => {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState<string[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const size = props.size || 120;

  useEffect(() => {
    if (props?.list?.length) {
      let tmp = props.showMax
        ? props?.list?.slice(0, props.showMax)
        : props.list;
      tmp = tmp.map((url) => {
        if (/\/jfs\/t\d+\//g.test(url)) {
          return (
            url.replace(
              /\/jfs\/(t\d+\/)/g,
              (match, x1) => `/s${size}x${size}_jfs/` + x1
            ) + `!cc_${size}x${size}!q50`
          );
        }
        return url;
      });
      setList(tmp);
    }
  }, [props]);
  return (
    <div>
      {list.map((url, index) => (
        <div className={imageWrapper} key={url}>
          <Image
            preview={{ visible: false }}
            width={size}
            src={url}
            onClick={() => {
              setVisible(true);
              setCurrent(index);
            }}
            style={{ borderRadius: "8px" }}
            fallback={imageError}
          />
        </div>
      ))}
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible,
            current,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {props?.list?.map((url) => (
            <Image src={url} fallback={imageError} key={url + "_pre"} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default ImageView;
