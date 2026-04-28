interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  as?: React.ElementType;
  [key: string]: any;
}

const MagneticButton = ({
  children,
  className = "",
  style = {},
  ...props
}: MagneticButtonProps) => {
  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};

export default MagneticButton;
