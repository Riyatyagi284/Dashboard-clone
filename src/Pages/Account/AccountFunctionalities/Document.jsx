import React from 'react'

const Document = () => {

    const handleDownloadClick = () => {
        const data = 'This is the content of the file.\nYou can replace it with your data.';
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'example.txt'; // Set the filename for the downloaded file
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Clean up the temporary URL
      };

  return (
    <button onClick={handleDownloadClick}>
      Download File
    </button>
  )
}

export default Document
