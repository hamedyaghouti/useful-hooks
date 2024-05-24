import { useMediaQuery } from "../hooks";

export const MediaQueryHookExample = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <h1>{isMobile ? "Mobile View" : "Desktop View"}</h1>
    </div>
  );
};
