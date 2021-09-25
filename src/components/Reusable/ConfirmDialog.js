import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
// import './react-confirm-alert.css'; // Import css

export const confirmDialog = (
  message,
  action,
  optionalMessage,
  globalTranslations
) => {
  
  console.log('daca');
  // const translation = globalTranslations.Button;
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div id="react-confirm-alert">
          <div className="react-confirm-alert">
            <div className="custom-ui button">
              <p>{message}</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  {
                    action();
                  }
                  onClose();
                }}
              >
              dddddd
                {"Yes" + optionalMessage}
              </button>
            </div>
          </div>
        </div>
      );
    },
  });
};
