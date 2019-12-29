import React from "react";

// export default function({ task, onDelete }) {
//   return (
//     <div>
//       <span>{task}</span>
//       <button onClick={onDelete}> x </button>
//     </div>
//   );
// }
export default function({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
