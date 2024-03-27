import React, { useState } from "react";
import dummyData from "./dummyData";
import IMG from "../../assets/8810413.jpg";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Card } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FaFilter } from "react-icons/fa";

function ProductList() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(dummyData);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleSearch = () => {
    const trimmedInput = searchInput.replace(/\s+/g, "");
    const filteredData = dummyData.filter((product) =>
      product.name
        .replace(/\s+/g, "")
        .toLowerCase()
        .includes(trimmedInput.toLowerCase())
    );
    setSearchResults(filteredData);
  };
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -15,
      top: -10,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "10px",
      backgroundColor: "red",
      borderRadius: "50%",
      width: "2rem",
      height: "2rem",
      color: "#fff",
      fontWeight: "bold",
    },
  }));

  return (
    <div className="mt-10 bg-slate-100 w-full">
      <div className="">
        <div className="flex mt-[20px] items-center justify-end mr-6">
          <button class="text-white bottom-2.5 flex items-center justify-around gap-4 bg-slate-700 hover:bg-slate-800-800  font-medium rounded-lg text-sm px-4 py-1 mt-10">
            <span className="text-[16px] text-center pl-5"> Cart</span>
            <div className="">
              <IconButton
                style={{ color: "white" }}
                aria-label="cart"
                className="text-white"
              >
                <StyledBadge badgeContent={4} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </div>
          </button>
        </div>
        <div className="mx-auto max-w-2xl px-1 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div class=" mx-auto flex items-center justify-between ">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div class="relative w-[50%]">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                onChange={(e) => setSearchInput(e.target.value)}
                class="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mobiles..."
                required
              />
              <button
                onClick={handleSearch}
                class="text-white absolute end-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
            <div>
              <button
                type="button"
                class="flex items-center gap-2 text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-3 "
              >
                <FaFilter />
                Adv Filter
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 ">
            {searchResults.map((product) => (
              <Card className="p-3 rounded-2xl">
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product?.images || IMG}
                      // src={IMG}
                      alt={`Front of ${product.name} in black.`}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#" className="font-bold text-[17px]">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 font-bold text-[20px]"
                          ></span>
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm  text-gray-900 flex items-center font-bold">
                      <FaIndianRupeeSign />
                      {product.price}
                    </p>
                  </div>
                  <Box
                    sx={{
                      width: 200,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={product?.rating}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Box>
                  <div className="">
                    <span>{product?.description}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
