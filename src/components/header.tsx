const user = {
  firstName: 'Willian',
  lastName: 'Gonçalves',
};

function Header() {
  return (
    <header>
      {`Olá ${user.firstName} ${user.lastName}`}
    </header>
  );
}
export default Header;
