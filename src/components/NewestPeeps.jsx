const NewestPeeps = () => {
  return (
    <div className="p-8">
      <div className="mb-2 flex justify-between">
        <h1 className="font-bold text-xl">Newest Peeps</h1>
        <h3 className=" text-xs text-orange-500">See all attendees > </h3>
      </div>
      <p className="text-center border-2 border-gray-200 rounded-2xl p-12">
        New attendees will appear here!{" "}
      </p>
    </div>
  );
};

export default NewestPeeps;
