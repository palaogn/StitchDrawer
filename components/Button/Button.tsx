import * as S from './Button.styles';

type Button = {
  text: string;
  onClick: Function;
};

const Button = ({ text, onClick }: Button) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};

export default Button;
