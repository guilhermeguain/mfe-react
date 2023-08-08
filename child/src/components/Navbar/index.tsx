import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
