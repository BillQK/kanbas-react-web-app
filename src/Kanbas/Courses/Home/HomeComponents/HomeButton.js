// Reusable Button Component
function HomeButton({ text, className, icon }) {
  return (
    <button className={className}>
      {icon && (
        <i
          className={`fas ${icon}`}
          style={{ color: "rgb(252, 252, 252)", padding: "0" }}
        ></i>
      )}
      {text}
    </button>
  );
}
export default HomeButton;
