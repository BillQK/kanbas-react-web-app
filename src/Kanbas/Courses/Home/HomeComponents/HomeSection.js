// Reusable Section Component
function HomeSection({ title, links, additionalLink }) {
  return (
    <div>
      <h1>{title}</h1>
      <hr style={{ width: "30vh" }} />
      {additionalLink && <a href="#">{additionalLink}</a>}
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HomeSection;
