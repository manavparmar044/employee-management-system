import React from 'react';
import DetailCard from './DetailCard';
import { Building2, CircleDollarSign, Users2 } from 'lucide-react';

const AdminDetails = () => {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-semibold'>Dashboard</h2>
      <div className="flex space-x-6 mt-4"> {/* Add flex and space between cards */}
        <DetailCard icon={Users2} text="Total Staff" count={10} />
        <DetailCard icon={Building2} text="Total Departments" count={5} />
        <DetailCard icon={CircleDollarSign} text="Total Revenue" count={100000} />
      </div>
    </div>
  );
};

export default AdminDetails;
