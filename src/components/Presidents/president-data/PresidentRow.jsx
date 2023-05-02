const PresidentRow = (props) => {
  return (
    <>
      <tr>
        <td>{props.president.first}</td>
        <td>{props.president.last}</td>
        <td>{props.president.year}</td>
        <td>{props.president.passed}</td>
        <td>
          {props.president.passed
            ? props.president.passed - props.president.year
            : 2023 - props.president.year}
        </td>
      </tr>
    </>
  );
};

export default PresidentRow;
