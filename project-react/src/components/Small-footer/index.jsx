import React from 'react'
import Config from '../../configuration/Footer_Config.json'

const SmallFooter = () => {
    return (
        <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
              <p>
              {Config.Copyright}
            <a href={Config.CompanyUrl}>{Config.CompanyName}</a>
              </p>
            </div>
          </div>
        </footer>
    )
}

export default SmallFooter
