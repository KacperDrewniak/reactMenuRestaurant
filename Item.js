const Item = props => (
  <li
    className={props.active ? "eneabled" : "disabled"}
    onClick={() => props.changeStatus(props.id)}
  >
    {props.name}
  </li>
);
