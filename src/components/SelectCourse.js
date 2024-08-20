// import React, { Component, useState, useEffect } from 'react'
// import Select from "react-select";
// import Link from 'next/link'


// const SelectCourse = () => {

//     const [pgdata, setPgata] = useState([])
//     const [gdata, setGdata] = useState([])
//     const [ddata, setDdata] = useState([])

//     var result_pg = []
//     var result_g = []
//     var result_d = []

//     useEffect(() => {
//         fetch('https://shooliniuniversity.com/media/programAPI', {
//             method: 'post',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             }),
//             body: JSON.stringify({ auth: 'shoolini@999', undergraduate: 1 }),
//         })
//             .then((response) => response.json())
//             .then((res) => setPgata(res))


//     }, [])
//     // console.log(pgdata,"pgdata")

//     useEffect(() => {
//         fetch('https://shooliniuniversity.com/media/programAPI', {
//             method: 'post',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             }),
//             body: JSON.stringify({ auth: 'shoolini@999', postgraduate: 2 }),
//         })
//             .then((response) => response.json())
//             .then((res) => setGdata(res))
//     }, [])

//     useEffect(() => {
//         fetch('https://shooliniuniversity.com/media/programAPI', {
//             method: 'post',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             }),
//             body: JSON.stringify({ auth: 'shoolini@999', doctor: 3 }),
//         })
//             .then((response) => response.json())
//             .then((res) => setDdata(res))
//     }, [])


//     /** "selected" here is state variable which will hold the
//     * value of currently selected dropdown.
//     */
//     const [selected, setSelected] = React.useState("");
//     const [program, setProgram] = React.useState("");
//     /** Function that will set different values to state variable
//     * based on which dropdown is selected
//     */
//     const changeSelectOptionHandler = (event) => {
//         setSelected(event.target.value);
//     };

//     const changeCourseOptionHandler = (event) => {
//         setProgram(event.target.value);
//     };


//     const carList = [
//         {
//             title: "BBA Online",
//             url: "#",
//             name: "name",
//             cat: "Online Degree"
//         },
//         {
//             title: "BCA Online",
//             url: "#",
//             name: "name",
//             cat: "Online Degree"
//         },
//         {
//             title: "BCom (Hons) Online",
//             url: "#",
//             name: "name",
//             cat: "Online Degree"
//         },
//         {
//             title: "BAJMC Online",
//             url: "#",
//             name: "name",
//             cat: "Online Degree"
//         },
//         {
//             title: "MA Online",
//             url: "#",
//             name: "name",
//             cat: "Online Degree"
//         },
//         {
//             title: "MBA Online",
//             url: "#",
//             name: "name",
//             cat: "Online Degree"
//         }
//     ];

//     /** Different arrays for different dropdowns */
//     const pg_data = pgdata?.success;
//     const ug_data = gdata?.success;
//     const phd_data = ddata?.success;
//     const online_data = carList;

//     console.log(online_data, "online_data")
//     console.log(phd_data, "phd")


//     /** Type variable to store different array for different dropdown */
//     let type = null;

//     let pageDetail = null;

//     /** This will be used to create set of options that user will see */
//     let options = null;

//     let goNav = null;

//     /** Setting Type variable according to dropdown */
//     if (selected === "Master's Degree/ PG Diploma") {
//         type = ug_data;
//     } else if (selected === "Bachelor's Degree") {
//         type = pg_data;
//     } else if (selected === "PhD Degree") {
//         type = phd_data;
//     }
//     else if (selected === "Online Degree") {
//         type = online_data;
//     }

//     /** If "Type" is null or undefined then options will be null,
//     * otherwise it will create a options iterable based on our array
//     */
//     if (type) {
//         <option >Select Course </option>
//         options = type.map((course, index) =>
//             <option key={index} value={course.slug}>{course.title}</option>
//         );

//         //  console.log(ug_data, "dadadadadad")
//     }

//     const handleClick = (e) => {
//         if (program === '') {
//             e.preventDefault();
//         }

//     }



//     return (
//         <div className="serchingWidget">
//             <h3> Find Your Course </h3>
//             <p> Pursue a futuristic course of your choice. Select your degree and program from the list below: </p>
//             <form>
//                 <div className="form-control">
//                     <select className="border-0 w-100"
//                         onChange={changeSelectOptionHandler}>
//                         <option>Select Degree</option>
//                         <option>Bachelor's Degree</option>
//                         <option>Master's Degree/ PG Diploma</option>
//                         <option>PhD Degree</option>
//                         <option>Online Degree</option>
//                     </select>

//                 </div>
//                 <div className="form-control mt-3">
//                     <select className="border-0  w-100"
//                         onChange={changeCourseOptionHandler}>
//                         <option>Select Program </option>
//                         {
//                             options
//                         }
//                     </select>

//                     {/* <Select onChange={changeCourseOptionHandler}
//                         options={options}
//                     >
//                         <option value={options}>{options}</option>
//                     </Select> */}

//                 </div>
//                 <div className="form-control p-0 border-0 mt-3">

//                     {['BBA Online', 'BCA Online', 'BCom (Hons) Online', 'BAJMC Online', 'MA Online', 'MBA Online'].includes(program) ? (
//                         <Link onClick={handleClick} target="_blank" className="viewDBtn btn w-100" href="https://shoolini.online/">
//                             View Details
//                         </Link>
//                     ) : (
//                         <Link onClick={handleClick} className="viewDBtn btn  w-100" href={`/${program}`}> View Details </Link>
//                     )
//                     }



//                 </div>
//                 <div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SelectCourse;


import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for API calls
import Select from "react-select";
import Link from "next/link";
import { Styles } from './common/styles/search'
import { useRouter } from 'next/router';





const RadioAPIComponent = () => {
    const router = useRouter()

    const customStyles =
    {

        control: base => ({
            ...base,
            height: 45
        })
    }

    const [loading, setLoading] = useState(true);
    const [ugData, setUgData] = useState([]);
    const [pgData, setPgData] = useState([]);
    const [phdData, setPhdData] = useState([]);
    const [onlineData, setOnlineData] = useState([]);
    const [program, setProgram] = React.useState("");
    const [course, setCourse] = useState(null)

    const carList = [
        {
            title: "BBA Online",
            url: "#",
            name: "name",
            cat: "Online Degree"
        },
        {
            title: "BCA Online",
            url: "#",
            name: "name",
            cat: "Online Degree"
        },
        {
            title: "BCom (Hons) Online",
            url: "#",
            name: "name",
            cat: "Online Degree"
        },
        {
            title: "BAJMC Online",
            url: "#",
            name: "name",
            cat: "Online Degree"
        },
        {
            title: "MA Online",
            url: "#",
            name: "name",
            cat: "Online Degree"
        },
        {
            title: "MBA Online",
            url: "#",
            name: "name",
            cat: "Online Degree"
        }
    ];

    useEffect(() => {
        fetch('https://shooliniuniversity.com/media/programAPI', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({ auth: 'shoolini@999', undergraduate: 1 }),
        })
            .then((response) => response.json())
            .then((res) => setUgData(res))
    }, [])
    // console.log(ugData, "UGdata")

    useEffect(() => {
        fetch('https://shooliniuniversity.com/media/programAPI', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({ auth: 'shoolini@999', postgraduate: 2 }),
        })
            .then((response) => response.json())
            .then((res) => setPgData(res))
    }, [])
    // console.log(pgData, "pgdata")

    useEffect(() => {
        fetch('https://shooliniuniversity.com/media/programAPI', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({ auth: 'shoolini@999', doctor: 3 }),
        })
            .then((response) => response.json())
            .then((res) => setPhdData(res))
    }, [])

    // console.log(phdData, "phdDatasss")
    console.log("program", program)

    useEffect(() => {
        fetchProgramData('ug_data', setUgData);
        fetchProgramData('pg_data', setPgData);
        fetchProgramData('phd_data', setPhdData);
        setOnlineData(carList); // Assuming carList is your predefined data
    }, []);

    const fetchProgramData = async (type, setData) => {
        try {
            const response = await axios.post('https://shooliniuniversity.com/media/programAPI', {
                auth: 'shoolini@999',
                type: type
            });
            setData(response.data?.success || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [selectedOption, setSelectedOption] = useState(); // Default selected option
    const [selected, setSelected] = React.useState("");


    const handleOptionChange = (e) => {
        console.log(e)
        setSelectedOption(e.target.value);
        // setSelected(e.target.value);
        setProgram(e.target.value);

    };

    //     const changeCourseOptionHandler = (event) => {
    //     setProgram(event.target.value);
    // };
    const [error, setError] = useState(' ');
   
    const handleClick = (e) => {
        setError('sss');
        // check if course is null
        if(!course) {
           // alert('No course selected')
           setError('No course selected');
            return  ; 
        }
       
        router.push(`/${course?.slug || "/"}`)
    }


    return (
        <Styles>
            <div className="card">
                <div className="p-3 course-search pb-0">
                    <h5> Select Your Course </h5>
                    <p clasName="m-0"> Pursue a futuristic course of your choice.</p>
                </div>



                {error && <p className="text-red px-3"> {error}</p>}

                <div className="srChfOrm">
                    <div>


                        <div class="inputGroup">
                            <input
                                type="radio"
                                value="Bachelor's Degree"
                                checked={selectedOption === "Bachelor's Degree"}
                                onChange={handleOptionChange}
                                className="input-radio off"
                                id="radio1"
                            />
                            <label for="radio1">Bachelor's Degree</label>
                        </div>



                    </div>

                    <div>
                        <div class="inputGroup">
                            <input
                                type="radio"
                                value="Master's Degree/ PG Diploma"
                                checked={selectedOption === "Master's Degree/ PG Diploma"}
                                onChange={handleOptionChange}
                                className="input-radio off"
                                id="radio2"
                            />
                            <label for="radio2">Master's Degree/ PG Diploma</label>

                        </div>
                    </div>

                    <div>
                        <div class="inputGroup">
                            <input
                                type="radio"
                                value="PhD Degree"
                                checked={selectedOption === 'PhD Degree'}
                                onChange={handleOptionChange}
                                className="input-radio off"
                                id="radio3"
                            />
                            <label for="radio3">PhD Degree</label>

                        </div>
                    </div>
                    <div>
                        <div class="inputGroup">
                            <input
                                type="radio"
                                value="Online Degree"
                                checked={selectedOption === 'Online Degree'}
                                onChange={handleOptionChange}
                                className="input-radio off"
                                id="radio4"
                            />
                            <label for="radio4"> Online Degree</label>
                        </div>
                    </div>

                    <div className="mt-2 p-2">
                        {selectedOption && (
                            <div>
                                {/* <h5>{selectedOption}</h5> */}

                                {selectedOption === "Bachelor's Degree" &&
                                    <Select minMenuHeight={300} styles={customStyles} placeholder={<div>Select Bachelor's Degree</div>}
                                        options={ugData?.success?.map(item => ({ value: item.title, label: item.title, slug: item.slug }))}
                                        onChange={(selected) => {
                                            setCourse(selected)



                                            console.log(selected)
                                        }}
                                    />
                                }
                                {selectedOption === "Master's Degree/ PG Diploma" &&
                                    <Select styles={customStyles}
                                        placeholder={<div>Select Master's Degree</div>}
                                        options={pgData?.success?.map(item => ({ value: item.title, label: item.title, slug: item.slug }))}
                                        onChange={(selected) => {
                                            setCourse(selected)
                                            console.log(selected)
                                        }}
                                    />
                                }
                                {selectedOption === "PhD Degree" &&
                                    <Select styles={customStyles}
                                        placeholder={<div> Select PhD Degree</div>}
                                        options={phdData?.success?.map(item => ({ value: item.title, label: item.title, slug: item.slug }))}
                                        onChange={(selected) => {
                                            setCourse(selected)
                                            console.log(selected)
                                        }}
                                    />
                                }
                                {selectedOption === "Online Degree" &&
                                    <Select styles={customStyles}
                                        placeholder={<div> Select Online Degree</div>}
                                        options={onlineData.map(item => ({ value: item.title, label: item.title, slug: item.slug }))}
                                        onChange={(selected) => {
                                            setCourse(selected)
                                            console.log(selected)
                                        }}

                                    />
                                }



                            </div>
                        )}
                    </div>

                    <div className="form-control  border-0 mt-1">

                        {
                            program === "Online Degree" ? (<Link onClick={handleClick} target="_blank" className="viewDBtn btn " href="https://shoolini.online/">
                                View Details
                            </Link>) : (
                                <button onClick={handleClick} className="viewDBtn btn" href={`/${course?.slug || "/"}`}> View Details  </button>
                            )
                        }


                    </div>
                </div>
            </div>
        </Styles>
    );




};

export default RadioAPIComponent;








