import React, { ReactNode } from "react";

interface StackProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  flexDirection?: "row" | "row-reverse" | "col" | "col-reverse" | "nowrap";
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  alignItems?: "start" | "end" | "center" | "stretch" | "baseline" | "";
  alignContent?: "start" | "end" | "center" | "between" | "around" | "stretch";
  gap?: number;
  margin?: string;
  padding?: string;
  width?: string;
  sx?: string;
  background?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
}

const Stack: React.FC<StackProps> = ({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  margin,
  padding,
  width,
  sx,
  background,
  onClick,
  height,
  style
}) => {
  const containerStyle = `${margin} ${width} ${height} ${padding}    flex flex-${flexDirection} ${
    justifyContent ? `justify-${justifyContent}` : ''
  } ${alignItems ? `items-${alignItems}` : ''} ${
    alignContent ? `content-${alignContent} ` : ''
  } ${gap ? `gap-${gap}` : ''} bg-${background} ${sx}`

  return <div style={style}  onClick={onClick} className={containerStyle}>{children}</div>;
};

export default Stack;
