import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import SearchLocationInput from "../SearchLocationInput";
import { Button } from "./../ButtonElements";
import "./../Main.css";
import { Tabs } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Checkbox } from "antd";
import { searchAirportsThunk } from "../../redux/actions/map-action";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { mapAPI } from "../../api/api";
function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}


const options = [
  { label: "100LL", value: "100LL" },
  { label: "Jet-A", value: "Jet-A" },
  { label: "MOGAS", value: "MOGAS" },
];
const optionsRun = [
  { label: 'Paved Runway', value: 'Paved Runway' },
  { label: 'Grass Strip', value: 'Grass Strip' },
  { label: 'Helipad', value: 'Helipad' },
  { label: 'Waterway', value: 'Waterway' },
  { label: 'Min Runway Length', value: 'Min Runway Length' }
]



const maintancesOption = [
  {label: 'Airframe Repair', value: 'Airframe Repair'},
  {label: 'Engine Repair', value: 'Engine Repair'},
  {label: 'Avionics Repair', value: 'Avionics Repair'}
]

const { TabPane } = Tabs;
const api = "AIzaSyBoq4qT-mCxXcn5Mx77PAYVWXriJrVEY9A";

function callback(key) {
  console.log(key);
}

const usersSearchFormValidate = (values) => {
  const errors = {};
  return errors;
};

const SearchAirport = () => {
  const [value, setValue] = useState(null);
  const history = useHistory();

  console.log(value);

  const dispatch = useDispatch();
 
  const submit = async (values) => {
    console.log(values)
    await mapAPI.searchAirport(values.search);
    history.push('/map')
  };
  const change = (e) => {
    console.log(e);
  };

 

  return (
    <div className="search-container ">
      <Formik
        enableReinitialize
        initialValues={{ search: '' }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="search-form">
              <Field type='text' name='search' as={SearchLocationInput} />
              <button className='btn' type="submit" disabled={isSubmitting} > Find</button>
            </div>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Amenities" key="1">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "50xp, 50px, 50px",
                  }}
                >
                  <div style={{ flexDirection: "column" }}>
                    <h3>Fuel</h3>
                    <Checkbox.Group
                      options={options}
                      defaultValue={["Pear"]}
                      onChange={onChange}
                    />
                  </div>
                  <div  style={{paddingTop: '20px'}}>
                    <h3>Runway Specs</h3>
                    <Checkbox.Group
                      style={{ flexDirection: "column" }}
                      options={optionsRun}
                      defaultValue={["Pear"]}
                      onChange={onChange}
                    />
                  </div>
                  <div style={{paddingTop: '20px'}}>
                    <h3>Maintenance</h3>
                    <Checkbox.Group
                      style={{ flexDirection: "column" }}
                      options={maintancesOption}
                      defaultValue={["Pear"]}
                      onChange={onChange}
                    />
                  </div>
                  
                </div>
              </TabPane>
            </Tabs>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchAirport;
