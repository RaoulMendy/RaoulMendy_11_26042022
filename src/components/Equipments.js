function Equipments({ Equipments }) {
  return (
    <ul>
      {Equipments.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
}

export default Equipments;
