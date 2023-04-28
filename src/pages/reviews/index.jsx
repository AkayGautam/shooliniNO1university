import { useEffect, useState } from "react";
import Styless from './style/styles'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbBox from "@/components/common/Breadcrumb";

export default function Review() {
  // Array of all car objects
  const carList = [
    {
      title : "Amazing campus life",
      cat: "postgraduate",
      url:"#",
      name: "postgraduate",
      studentName:"Rohit",
      designation: "ssss",
      
    },
    {
        title : "Hub of opportunities",
        cat: "doctoral",
      url: "#",
      name: "postgraduate",
      designation: "ddddd",
      studentName:"Pawan Chinnari",
    },
    {
        title : "Wonderful experience",
        cat: "postgraduate",
      url:"#",
      name: "Vikas Shandil",
      designation: "sssss",
      studentName:"Mehak Kusum",
    },
    {
        title : "Dynamic teaching fraternity",
        cat: "undergraduate",
      url:"#",
      name: "undergraduate",
      designation: "cccc",
      studentName:"Gaurav Karishna",
    },
    {
        title : "One of the finest Infrastructures",
        cat: "postgraduate",
      url: "#",
      name: "undergraduate",
      designation: "vvvvv",
      studentName:"Nandini Pandey",
    },
    {
        title : "One of the finest Infrastructures",
        cat: "doctoral",
      url: "#",
      name: "doctoral",
      designation: "vvvvv",
      studentName:"Vikas",
    }
  ];
  // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(carList);
  // Selected Brand name filter
  const [selectedBrand, setSelectedBrand] = useState("");
  // Selected Year filter
  const [selectedYear, setSelectedYear] = useState();

  const filterByBrand = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedBrand) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
      (car) => car.name.split(" ").indexOf(selectedBrand) !== -1
    );
    return filteredCars;
  };
  const filterByYear = (filteredData) => {
    // Avoid filter for null value
    if (!selectedYear) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
      (car) => car.release_year === selectedYear
    );
    return filteredCars;
  };

  // Update seletedBrand state
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  // Toggle seletedYear state
  const handleYearChange = (event) => {
    const inputYear = Number(event.target.id);

    if (inputYear === selectedYear) {
      setSelectedYear("");
    } else {
      setSelectedYear(inputYear);
    }
  };

  useEffect(() => {
    var filteredData = filterByBrand(carList);
    filteredData = filterByYear(filteredData);
    setFilteredList(filteredData);
  }, [selectedBrand, selectedYear]);

  return (

    <> 
    <Header />

    <BreadcrumbBox title="Testimonials" />

    <Styless> 
    <div className="App">
      <div className="brand-filter">
        <div>Filter by Program :</div>
        <select
          id="brand-input"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">All</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="postgraduate">Postgraduate</option>
          <option value="doctoral">Doctoral</option>
        </select>
      </div>
      
      <div id="car-list">
        {filteredList.map((item, index) => (
          <div className="car-item" key={index}>
            <div className="car-name"><strong> {`${item.title}`} </strong></div>
            <div className="car-year">{`Name: ${item.name}`}</div>
            <div className="car-year">{`designation: ${item.designation}`}</div>
            {/* <img className="car-image" src={item.url} alt="car-img" /> */}
          </div>
        ))}
      </div>
    </div>
    </Styless>

            <Footer />


    </>
  );
}