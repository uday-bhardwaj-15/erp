import React from "react";

const UpcomingclassName = () => {
  return (
    <>
      <p className="text-lg text-center font-bold m-5">Classes Table</p>
      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
        <tr className="text-left border-b-2 border-gray-300">
          <th className="px-4 py-3">Day</th>
          <th className="px-4 py-3">Course</th>
          <th className="px-4 py-3">Timing</th>
          <th className="px-4 py-3">Sex</th>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
      </table>
    </>
  );
};

export default UpcomingclassName;
