// Reusable LinkButton Component
function LinkButton({ text, icon, className }) {
  return (
    <li>
      <a href="/" className={className}>
        {icon}
        {text}
      </a>
    </li>
  );
}
export default LinkButton;
