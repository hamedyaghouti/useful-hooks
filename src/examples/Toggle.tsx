import { useToggle } from "../hooks";

export const ToggleHookExample = () => {
  const [isModalOpen, toggleModal] = useToggle(false);

  return (
    <div>
      <button onClick={toggleModal}>Toggle Modal</button>
      {isModalOpen && <div>hidden value</div>}
    </div>
  );
};
