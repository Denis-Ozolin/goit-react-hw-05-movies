import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <nav>
      <NavLink to={{ pathname: '/', state: { from: '/' } }} exact>
        Home
      </NavLink>
      <NavLink to={{ pathname: '/movies', state: { from: '/movies' } }} exact>
        Movies
      </NavLink>
    </nav>
  );
};

// export const AppBar = () => {
//   return (
//     <nav>
//       <NavLink to="/" exact>
//         Home
//       </NavLink>
//       <NavLink to="/movies">Movies</NavLink>
//     </nav>
//   );
// };
