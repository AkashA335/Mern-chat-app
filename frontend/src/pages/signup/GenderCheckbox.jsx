import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input type="radio" name="radio-2" className="radio radio-primary" />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary"
            checked
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

// Starter code for the file.

// import React from "react";

// const GenderCheckbox = () => {
//   return (
//     <div className="flex mt-2">
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text">Male</span>
//           <input type="radio" name="radio-2" className="radio radio-primary" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text">Female</span>
//           <input
//             type="radio"
//             name="radio-2"
//             className="radio radio-primary"
//             checked
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckbox;
