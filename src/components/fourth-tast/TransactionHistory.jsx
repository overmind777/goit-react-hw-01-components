import { Table, Thead, Tbody } from './TransactionHistory.styled';

export const TransactionHistory = props => {
  const { items } = props;
  return (
    <Table className="transaction-history">
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      {items.map(item => {
        return (
          <Tbody key={item.id}>
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </Tbody>
        );
      })}
    </Table>
  );
};
