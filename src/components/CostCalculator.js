import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CostCalculator.css';

const CostCalculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    floors: 'Ground',
    package: 'Basic Package @ 1999/sqft',
    builtUpArea: '',
    waterSump: '',
    septicTank: '',
    wallLength: '',
    wallHeight: ''
  });

  const [totalCost, setTotalCost] = useState(0);

  const handleInputChange = (field, value) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
    calculateCost({ ...calculatorData, [field]: value });
  };

  const calculateCost = (data) => {
    let cost = 0;
    
    if (data.builtUpArea) {
      const ratePerSqft = data.package.includes('1999') ? 1999 :
                         data.package.includes('2199') ? 2199 : 2499;
      cost += parseInt(data.builtUpArea) * ratePerSqft;
    }
    
    if (data.waterSump) {
      cost += parseInt(data.waterSump) * 24;
    }
    
    if (data.septicTank) {
      cost += parseInt(data.septicTank) * 24;
    }
    
    if (data.wallLength && data.wallHeight) {
      cost += parseInt(data.wallLength) * parseInt(data.wallHeight) * 425;
    }

    setTotalCost(cost);
  };

  return (
    <section className="calculator-section">
      <div className="calculator-container">
        <motion.div
          className="calculator-header"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Home Construction Cost Calculator (2025) Chennai</h2>
          <p>You can arrive your Construction estimate here</p>
        </motion.div>

        <motion.div
          className="calculator-form"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="form-controls">
            <div className="control-group">
              <label>No. of Floors</label>
              <select 
                value={calculatorData.floors}
                onChange={(e) => handleInputChange('floors', e.target.value)}
              >
                <option value="Ground">Ground</option>
                <option value="Ground + 1">Ground + 1</option>
                <option value="Ground + 2">Ground + 2</option>
              </select>
            </div>

            <div className="control-group">
              <label>Package</label>
              <select 
                value={calculatorData.package}
                onChange={(e) => handleInputChange('package', e.target.value)}
              >
                <option value="Basic Package @ 1999/sqft">Basic Package @ ₹1999/sqft</option>
                <option value="Standard Package @ 2199/sqft">Standard Package @ ₹2199/sqft</option>
                <option value="Premium Package @ 2499/sqft">Premium Package @ ₹2499/sqft</option>
              </select>
            </div>
          </div>

          <div className="calculator-table">
            <div className="table-header">
              <div>Work</div>
              <div>Area</div>
              <div>Unit</div>
              <div>Rate</div>
              <div>Cost</div>
            </div>

            <div className="table-row">
              <div>Enter required Built up Area for Ground Floor</div>
              <div>
                <input 
                  type="number" 
                  placeholder="Area in sqft"
                  value={calculatorData.builtUpArea}
                  onChange={(e) => handleInputChange('builtUpArea', e.target.value)}
                />
              </div>
              <div>sqft</div>
              <div>Rs.1999</div>
              <div>Rs. {calculatorData.builtUpArea ? (parseInt(calculatorData.builtUpArea) * 1999).toLocaleString() : 0}</div>
            </div>

            <div className="table-row">
              <div>Size of RCC Water Sump (A 4 member family will require 9000 liter capacity)</div>
              <div>
                <input 
                  type="number" 
                  placeholder="No. of Liters"
                  value={calculatorData.waterSump}
                  onChange={(e) => handleInputChange('waterSump', e.target.value)}
                />
              </div>
              <div>ltr</div>
              <div>Rs.24</div>
              <div>Rs. {calculatorData.waterSump ? (parseInt(calculatorData.waterSump) * 24).toLocaleString() : 0}</div>
            </div>

            <div className="table-row">
              <div>Size of Septic Tank</div>
              <div>
                <input 
                  type="number" 
                  placeholder="No. of Liters"
                  value={calculatorData.septicTank}
                  onChange={(e) => handleInputChange('septicTank', e.target.value)}
                />
              </div>
              <div>ltr</div>
              <div>Rs.24</div>
              <div>Rs. {calculatorData.septicTank ? (parseInt(calculatorData.septicTank) * 24).toLocaleString() : 0}</div>
            </div>

            <div className="table-row">
              <div>Plain Compound Wall</div>
              <div className="wall-inputs">
                <input 
                  type="number" 
                  placeholder="Length"
                  value={calculatorData.wallLength}
                  onChange={(e) => handleInputChange('wallLength', e.target.value)}
                />
                <input 
                  type="number" 
                  placeholder="Height"
                  value={calculatorData.wallHeight}
                  onChange={(e) => handleInputChange('wallHeight', e.target.value)}
                />
              </div>
              <div>sqft</div>
              <div>Rs.425</div>
              <div>Rs. {(calculatorData.wallLength && calculatorData.wallHeight) ? 
                (parseInt(calculatorData.wallLength) * parseInt(calculatorData.wallHeight) * 425).toLocaleString() : 0}</div>
            </div>

            <div className="table-total">
              <div></div>
              <div></div>
              <div></div>
              <div><strong>Total Construction Cost</strong></div>
              <div><strong>Rs. {totalCost.toLocaleString()}</strong></div>
            </div>
          </div>

          <motion.button 
            className="estimate-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            GET FREE ESTIMATE NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CostCalculator;
