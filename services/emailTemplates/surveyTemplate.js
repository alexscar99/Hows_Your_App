const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div>
          <div style="font-family: 'Helvetica', 'sans-serif';
          border: 2px solid black;
          border-radius: 5px;
          background-color: #fcfcfc;
          height: 430px;">
            <h4 style="font-size: 1.2em; margin: 40px; font-weight: 400;">Hi there,</h4>
            <h4 style="font-size: 1.2em; margin: 40px; font-weight: 400;">Let your voice be heard. Share your input with us!</h4>
            <h2 style="text-align: center;
            font-weight: bold; margin: 35px auto;">Please answer the following question:</h2>
            <h1 style="text-align: center;
            color: #067bc2; font-size: 2.1em;">${survey.body}</h1>
            <div style="margin: 50px auto;">  
              <button style="margin-top: 15px; height: 45px; width: 120px; float: left; color: white; 
              margin-left: 385px; background-color: #28a745; border-color: #28a745; font-weight: 400; text-align: center; padding: .375rem .75rem; font-size: 1.3rem; border-radius: 5px;">
                <a style="color: white; text-decoration: none;" href="${
                  keys.redirectDomain
                }/api/surveys/${survey.id}/yes">
                  YES
                </a>
              </button>
            
      
                  <button style="margin-top: 15px; height: 45px; width: 120px; float: right; color: white; 
                  margin-right: 385px; background-color: #dc3545; border-color: #dc3545; font-weight: 400; text-align: center; padding: .375rem .75rem; font-size: 1.3rem; border-radius: 5px;">
                  <a style="color: white; text-decoration: none;" href="${
                    keys.redirectDomain
                  }/api/surveys/${survey.id}/no">
                    NO
                  </a>
                  </button>
              
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};
