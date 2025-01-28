import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <nav>
       <ul>

        <li>
          <Link to="/" className={currentPage === '/' ? 'active' : ''}>
            Home
          </Link> 
        </li>

        {/* <li>
          <Link to="/ErrorPage" className={currentPage === '/ErrorPage' ? 'active' : ''}>
            Error Page
          </Link>
        </li> */}

        <li>
          <Link to="/CandidateSearch" className={currentPage === '/CandidateSearch' ? 'active' : ''}>
            Candidate Search
          </Link>
        </li>

        <li>

          <Link to="/SavedCandidates" className={currentPage === '/SavedCandidates' ? 'active' : ''}>
            Saved Candidates
          </Link>
        </li>

     
        </ul>
      </nav>
      
      
      </div>
  )
};

export default Nav;
