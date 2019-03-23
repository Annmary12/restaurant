import * as React from 'react';

// style
import './Restaurant.scss';

// components
import SelectBox from '../../components/SelectBox';
import Button from '../../components/Button';
import Card from '../../components/Card';

const filterArray = ['location', 'gender'];

const Restaurant = () => (
  <div className="restaurant-dash">
     <div className="container ml-5 my-4">
        <section className="row">
          <div className="col-6 search-section">
            <div className="row">
              <div className="col-md-5">
                <SelectBox
                  options={filterArray}
                  label="SORT BY"
                />
              </div>
              <div className="col-md-4">
                <SelectBox
                  options={filterArray}
                  label="FILTER BY"
                  classes="sortBy"
                />
              </div>
            </div>
          </div>
          <div className="col-6 button-section ">
            <Button
              classes="add-btn"
              name="Add a new restaurant"
            />
          </div>
        </section>
        <section className="row mt-5 mr-3">
          <div className="col-md-4"><Card /></div>
          <div className="col-md-4"><Card /></div>
          <div className="col-md-4"><Card /></div>
        </section>
        <section className="row mt-5 mr-3">
          <div className="col-md-4"><Card /></div>
          <div className="col-md-4"><Card /></div>
          <div className="col-md-4"><Card /></div>
        </section>
        <section className="row mt-5 mr-3">
          <div className="col-md-4"><Card /></div>
          <div className="col-md-4"><Card /></div>
          <div className="col-md-4"><Card /></div>
        </section>
      </div>
  </div>
)

export default Restaurant;
