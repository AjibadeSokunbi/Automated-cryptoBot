import React from 'react';
import Typography from "@/components/custom/Typography";




interface PaginationProps {
  activePage: number;
  totalPages: number;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  setActivePage: (page: number) => void;
  lastItemIndex: number;
  firstItemIndex: number;
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  totalPages,
  goToPreviousPage,
  goToNextPage,
  setActivePage,
  lastItemIndex,
  firstItemIndex,
  totalItems,
}) => {
  const maxVisiblePages = 10; // Set the maximum number of visible page buttons

  const renderPageButtons = () => {
    const pageButtons = [];
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (activePage <= Math.ceil(maxVisiblePages / 2)) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (activePage > totalPages - Math.floor(maxVisiblePages / 2)) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = activePage - Math.floor(maxVisiblePages / 2);
        endPage = activePage + Math.floor(maxVisiblePages / 2);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <li key={i}>
          <button
            className={`flex items-center justify-center px-3 h-8 leading-tight bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white text-[10px] md:text-sm lg:text-sm ${
              activePage === i ? 'bg-gray-700 text-white' : ''
            }`}
            onClick={() => setActivePage(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return pageButtons;
  };

  return (
    <>
      <nav
        className="items-center justify-between pt-4 hidden md:flex lg:flex"
        aria-label="Table navigation"
      >
        <Typography variant="normal" className="text-[10px] md:text-sm lg:text-sm text-gray-400">
          Showing{' '}
          <span className="font-semibold text-white">{firstItemIndex}-{lastItemIndex}</span> of{' '}
          <span className="font-semibold text-white">{totalItems}</span>
        </Typography>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <button
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight rounded-l-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white text-[10px] md:text-sm lg:text-sm"
              onClick={goToPreviousPage}
              disabled={activePage === 1}
            >
              Previous
            </button>
          </li>
          {renderPageButtons()}
          <li>
            <button
              className="flex items-center justify-center px-3 h-8 leading-tight rounded-r-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white text-[10px] md:text-sm lg:text-sm"
              onClick={goToNextPage}
              disabled={activePage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Pagination;

