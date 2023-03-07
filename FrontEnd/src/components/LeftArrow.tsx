interface LeftArrowPropsParams {
  style?: React.CSSProperties;
  onClick: Function;
  className?: string;
}

const LeftArrow = ({ style, onClick, className }: LeftArrowPropsParams): JSX.Element => {
  if (typeof onClick !== 'undefined')
    return (
      <svg className={className} style={style} onClick={() => onClick()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    );
  else
    return (
      <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    );
}

export default LeftArrow;