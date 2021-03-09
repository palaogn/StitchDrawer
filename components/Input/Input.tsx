import * as S from './Input.styles';

type Input = {
  label?: string;
  value?: number | string;
  type?: string;
  onChange: Function;
};

const Input = ({ label, value, type, onChange }: Input) => {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Input value={value} type={type} onChange={onChange}></S.Input>
    </>
  );
};

export default Input;
