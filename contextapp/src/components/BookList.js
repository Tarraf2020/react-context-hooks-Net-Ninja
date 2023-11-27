import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";


function BookList() {
  const contextType = useContext(ThemeContext);
  const { isLightTheme, light, dark } = contextType;
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li>
      </ul>
    </div>
  );
}

export default BookList;

// class BookList extends Component {
//   render() {
//     return (
//       <div className="book-list">
//         <ul>
//           <li>the way of kings</li>
//           <li>the name of the wind</li>
//           <li>the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default BookList;
