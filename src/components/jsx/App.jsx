import { User } from 'components/jsx/User';  
import { Statistic } from 'components/jsx/Statistic';    
import FriendList from 'components/jsx/FriendsList';   
import TransactionHistory from 'components/jsx/TransactionHistory';

import friends from 'components/json/friends.json';  
import transactions from 'components/json/transactions.json'
 
 export const App = () => {
  return (
    <div>
        <User />  
        <Statistic />  
        <FriendList friends={friends} />  
        <TransactionHistory items={transactions} />
    </div>
  );
};
