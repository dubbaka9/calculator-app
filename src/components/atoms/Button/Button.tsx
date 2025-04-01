const Button: React.FC<{
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}> = ({ label, onClick, style }) => {
  return (
    <button className="button" onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;