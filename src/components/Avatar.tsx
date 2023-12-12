import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({ hasBorder, ...props }: AvatarProps) => {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : ""} {...props} />
  );
};
