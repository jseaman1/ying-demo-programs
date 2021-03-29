import './InputContainer.css';

interface ContainerProps {
  name: string;
}

const InputContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="title">
      <strong>{name}</strong>
      
    </div>
  );
};

export default InputContainer;