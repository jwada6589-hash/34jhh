import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import OrdersList from './OrdersList';
import OrderDetail from './OrderDetail';
import { Order, OrderStatus } from './types';
import { MOCK_ORDERS } from './mockData';

export default function OrdersView() {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);

  const handleUpdateStatus = (orderId: string, status: OrderStatus, rejectReason?: string) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        return { ...o, status, rejectReason: rejectReason || o.rejectReason };
      }
      return o;
    }));
  };

  return (
    <div className="h-full animate-in fade-in duration-300">
      <Routes>
        <Route path="/" element={<OrdersList orders={orders} />} />
        <Route path="/:orderId" element={<OrderDetail orders={orders} onUpdateStatus={handleUpdateStatus} />} />
      </Routes>
    </div>
  );
}
