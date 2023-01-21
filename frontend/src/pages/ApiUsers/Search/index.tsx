import { FormInputContainer, InputContainer } from './styles';

interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export function Search({ onChange }: SearchProps) {
  return (
    <FormInputContainer>
      <InputContainer
        type="text"
        placeholder="Search"
        onChange={onChange}
      />
    </FormInputContainer>
  );
}
