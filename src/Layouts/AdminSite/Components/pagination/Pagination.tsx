import React, { useEffect, useState } from "react";
import { IconButton } from "@material-tailwind/react";

const Pagination: React.FC<any> = (props) => {
  const itemsPerPage = 4; //  số lượng trang
  const [currentPage, setCurrentPage] = useState(1); // trang hiện tại
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = props?.data?.slice(startIndex, endIndex); // trả về data cần
    props?.handlePage(currentPageData);
  }, [props?.data, currentPage]);
  useEffect(() => {
    const initialData = props?.datas?.slice(0, itemsPerPage);
    props.handlePage(initialData);
  }, []);
  const totalPages = Math.ceil(props?.data?.length / itemsPerPage);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <div className="flex items-center gap-2 m-auto justify-center mb-2">
        {pageNumbers.map((pageNumber) => (
          <IconButton
            key={pageNumber}
            variant={pageNumber === currentPage ? "outlined" : "text"}
            size="sm"
            placeholder={pageNumber} // Include the placeholder property
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
