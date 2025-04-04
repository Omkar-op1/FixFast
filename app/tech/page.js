"use client"
import { MapPin, Clock, Calendar, Smartphone, User, Phone, MessageSquare, Check, X, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function TechnicianOrder() {
  const [order, setOrder] = useState({
    id: 'FX-784592',
    service: 'Smartphone Screen Replacement',
    device: 'iPhone 13 Pro',
    issue: 'Cracked screen',
    status: 'Assigned',
    price: 3499,
    customer: {
      name: 'Rahul Sharma',
      phone: '+91 9876543210',
      address: '123 Tech Park, Bangalore, Karnataka 560001',
    },
    date: '2023-11-15',
    timeSlot: '10:00 AM - 12:00 PM',
    notes: 'Customer mentioned there is also a battery drain issue',
  });

  const [status, setStatus] = useState(order.status);
  const [technicianNotes, setTechnicianNotes] = useState('');

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
    // API call to update status
    console.log(`Order status updated to: ${newStatus}`);
  };

  const completeService = () => {
    updateStatus('Completed');
    // API call to complete service
    console.log('Service completed with notes:', technicianNotes);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <button className="mr-4 text-gray-600 hover:text-blue-600">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Order #{order.id}</h1>
          <span className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
            status === 'Completed' ? 'bg-green-100 text-green-800' :
            status === 'Cancelled' ? 'bg-red-100 text-red-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {status}
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Service Details */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                Service Details
              </h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Service:</div>
                  <div className="w-2/3 font-medium">{order.service}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Device:</div>
                  <div className="w-2/3 font-medium">{order.device}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Issue:</div>
                  <div className="w-2/3 font-medium">{order.issue}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Customer Notes:</div>
                  <div className="w-2/3 font-medium">{order.notes || 'None'}</div>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Customer Details
              </h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Name:</div>
                  <div className="w-2/3 font-medium">{order.customer.name}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Phone:</div>
                  <div className="w-2/3 font-medium">
                    <a href={`tel:${order.customer.phone}`} className="text-blue-600 hover:underline">
                      {order.customer.phone}
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Address:</div>
                  <div className="w-2/3 font-medium flex items-start">
                    <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
                    {order.customer.address}
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Service Time:</div>
                  <div className="w-2/3 font-medium flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {order.date} • {order.timeSlot}
                  </div>
                </div>
              </div>
            </div>

            {/* Technician Notes */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Service Notes</h2>
              <textarea
                value={technicianNotes}
                onChange={(e) => setTechnicianNotes(e.target.value)}
                placeholder="Add your service notes here (parts used, additional issues found, etc.)"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Charge</span>
                  <span>₹{order.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (18%)</span>
                  <span>₹{(order.price * 0.18).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{(order.price * 1.18).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Status Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Update Status</h2>
              <div className="space-y-3">
                {status === 'Assigned' && (
                  <button
                    onClick={() => updateStatus('On the Way')}
                    className="w-full py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200"
                  >
                    Mark as On the Way
                  </button>
                )}
                {status === 'On the Way' && (
                  <button
                    onClick={() => updateStatus('In Progress')}
                    className="w-full py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200"
                  >
                    Mark as In Progress
                  </button>
                )}
                {status === 'In Progress' && (
                  <button
                    onClick={completeService}
                    className="w-full py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 flex items-center justify-center"
                  >
                    <Check className="w-5 h-5 mr-2" />
                    Complete Service
                  </button>
                )}
                <button
                  onClick={() => updateStatus('Cancelled')}
                  className="w-full py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 flex items-center justify-center"
                >
                  <X className="w-5 h-5 mr-2" />
                  Cancel Service
                </button>
              </div>
            </div>

            {/* Communication */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Customer Communication</h2>
              <div className="space-y-3">
                <button className="w-full py-2 bg-white border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-50 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                </button>
                <a
                  href={`tel:${order.customer.phone}`}
                  className="w-full py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Customer
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}