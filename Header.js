const Header = props => {
  const activeItems = props.items.filter(item => item.active === true);

  const number = activeItems.length;

  return (
    <header>
      <h2>Podusmowanie zamówienia: {number}</h2>
      <h2>
        Do zapłaty:{" "}
        {number ? `${number * 10} złotych` : "Nie kupujesz to nie bulisz"}
      </h2>
    </header>
  );
};
