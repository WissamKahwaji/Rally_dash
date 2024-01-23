import React from 'react'
import { useSelector } from "react-redux";
import { useGetBookings } from '../API/bookings/bookings';
import PageContainer from '../Components/UI/PageContainer';


const Bookings = () => {
    const colorsData = useSelector((state) => state.colorSlice);
    const { data: bookings, isLoading, isError } = useGetBookings();
    const bookingContainerStyle = {
      borderColor: colorsData?.data?.mainColor ?? "white",
    };
    if (isLoading) return <></>;
    if (isError) return <></>;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString(undefined, options);
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
        return `${formattedDate} ${time}`;
      };


    return (
        <PageContainer>
          <h2 className="text-center text-4xl mb-7">Bookings</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {bookings?.data.map((booking) => (
              <div
                style={bookingContainerStyle}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                key={booking._id}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Full Name:</p>
                    <p>{booking.fullName}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Email:</p>
                    <p>{booking.email}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Mobile:</p>
                    <p>{booking.mobile}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">PickUp Date:</p>
                    <p>{formatDate(booking.pickUpDate)}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">DropOff Date:</p>
                    <p>{formatDate(booking.dropOffDate)}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Reservation Date:</p>
                    <p>{formatDate(booking.reservationDate)}</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">The Pick Up Location:</p>
                    <p>{booking.from}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">The Drop Off Location:</p>
                    <p>{booking.to}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      );
}

export default Bookings