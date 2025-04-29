const Button: React.FC<{
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}> = ({ label, onClick, style }) => {
  return (
    <button 
      className="button" 
      onClick={onClick} 
      style={style}
      aria-label={`Calculator button ${label}`}
      role="button"
    >
      {label}
    </button>
  );
};

export default Button;