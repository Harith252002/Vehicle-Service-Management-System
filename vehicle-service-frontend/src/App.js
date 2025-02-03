// frontend/src/App.js
import './App.css';
import React from 'react';
import ComponentList from './components/ComponentList';  // Import the ComponentList component
import AddComponentForm from './components/AddComponentForm';  // Import the AddComponentForm component
import RepairForm from './components/RepairForm';  // Import the RepairForm component
import RevenueChart from './components/RevenueChart';  // Import the RevenueChart component
import PaymentForm from './components/PaymentForm';  // Import the PaymentForm component

function App() {
  const components = [
    { id: 1, name: 'Component 1', price: 50 },
    { id: 2, name: 'Component 2', price: 100 },
    { id: 3, name: 'Component 3', price: 150 },
  ];  // You can fetch this data from your backend

  const totalPrice = components.reduce((acc, component) => acc + component.price, 0);  // Calculate the total price dynamically

  return (
    <div className="App">
      <h1>Vehicle Service Management System</h1>

      {/* Render the AddComponentForm to allow adding new components */}
      <AddComponentForm />

      {/* Render the ComponentList to display the list of components */}
      <ComponentList />

      {/* Render the RepairForm and pass the components as props */}
      <RepairForm components={components} />

      {/* Render the RevenueChart to display revenue data */}
      <RevenueChart />

      {/* Render the PaymentForm and pass the total price as props */}
      <PaymentForm totalPrice={totalPrice} />
    </div>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
