// Style
import style from "./Container.module.scss";

// Props definition
type ContainerProps = {
  children: any;
};

export default function Container(props: ContainerProps) {
  return <div className={style.container}>{props.children}</div>;
}
