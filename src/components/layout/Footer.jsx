export const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <small>&copy; All Rights Reserved - {year}</small>
    </footer>
  )
}
