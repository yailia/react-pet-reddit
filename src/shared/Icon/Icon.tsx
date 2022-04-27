import classNames from "classnames";
import React from "react";
import { EIcon } from "../../enums/EIcon";
import styles from './Icon.css'
import { MenuIcon } from "./Icons";
import { AnonIcon } from "./Icons/AnonIcon";
import { CommentsIcon } from "./Icons/CommentsIcon";
import { ComplainIcon } from "./Icons/ComplainIcon";
import { HideIcon } from "./Icons/HideIcon";
import { SaveIcon } from "./Icons/SaveIcon";
import { ShareIcon } from "./Icons/ShareIcon";

interface IIcon {
  name: EIcon;
  size?: number;
}



export function Icon({ name, size }: IIcon) {
  return (
    size ? (
      <div className={classNames({ [styles[`w${size}`]] : size })}>
        {name === EIcon.Comment && <CommentsIcon />}
        {name === EIcon.Complain && <ComplainIcon />}
        {name === EIcon.Hide && <HideIcon />}
        {name === EIcon.Menu && <MenuIcon />}
        {name === EIcon.Save && <SaveIcon />}
        {name === EIcon.Share && <ShareIcon />}
        {name === EIcon.Anon && <AnonIcon />}
      </div>
    ) :
    <>
      {name === EIcon.Comment && <CommentsIcon />}
      {name === EIcon.Complain && <ComplainIcon />}
      {name === EIcon.Hide && <HideIcon />}
      {name === EIcon.Menu && <MenuIcon />}
      {name === EIcon.Save && <SaveIcon />}
      {name === EIcon.Share && <ShareIcon />}
      {name === EIcon.Anon && <AnonIcon />}
    </>
    
  )
}