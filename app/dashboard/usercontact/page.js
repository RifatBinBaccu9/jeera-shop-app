

const orders = [
    {
      id: 1,
      userName: 'John Doe',
      phone: '123-456-7890',
      email: '123 Main St, City',
      Subject: 'Pizza',
      Message: '/pizza.jpg',
    },
    {
      id: 2,
      userName: 'John Doe',
      phone: '123-456-7890',
      email: '123 Main St, City',
      Subject: 'Pizza',
      Message: '/pizza.jpg',
    },
  ];
  const UserContact = () => {
   
  
    return (
      <div className=''>
        <h1 className="text-3xl font-bold p-6">User Contact</h1>
        <div className=" overflow-x-scroll  rounded-sm p-5">
            <div className="grid grid-cols-6 justify-between gap-3 bg-[#E67E22] rounded-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="px-1 py-3 w-[200px]">ID</div>
              <div className="px-1 py-3 w-[200px]">UserName</div>
              <div className="px-1 py-3 w-[200px]">Phone</div>
              <div className="px-1 py-3 w-[200px]">E-mail</div>
              <div className="px-1 py-3 w-[200px]">Subject</div>
              <div className="px-1 py-3 w-[200px]">Message</div>
            </div>       
         <div className="">
            {orders.map((order) => (
              <div className="grid grid-cols-6 gap-3 justify-between items-center border-b dark:bg-gray-800 dark:border-gray-700" key={order.id}>
                <div className="px-1 py-4 w-[150px]">{order.id}</div>
                <div className="px-1 py-4 w-[150px]">{order.userName}</div>
                <div className="px-1 py-4 w-[150px]">{order.phone}</div>
                <div className="px-1 py-4 w-[150px]">{order.email}</div>
                <div className="px-1 py-4 w-[150px]">{order.Subject}</div>
                <div className="px-1 py-4 w-[150px]">{order.Message}</div>
              </div>
            ))}
          </div>
      </div>
      </div>
    );
  };
  
  export default UserContact;
  